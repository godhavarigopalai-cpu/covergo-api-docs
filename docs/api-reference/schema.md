# GraphQL Schema Reference

This page provides reference information about the CoverGo GraphQL schema structure.

## GraphQL Endpoint

```
https://api.dev.covergo.cloud/graphql/
```

## Schema Structure

The GraphQL schema was analyzed using introspection queries. The schema contains:

### Query Type
The schema supports query operations for data retrieval, including:
- Financial data queries
- Policy information
- Billing data
- Commission data
- And other business data

### Mutation Type
The schema provides extensive mutation operations for business operations.

## Authentication APIs

!!! success "Authentication APIs Available"
    The schema includes several authentication and token management operations:

    **Query Operations:**
    - `refreshToken` - Refresh authentication tokens
    - `token_2` - Alternative token refresh endpoint
    - `verifyGOODTokenAndGetCoverGoToken` - Token verification
    - SSO token queries for single sign-on authentication

    **Mutation Operations:**
    - `createAccessTokenFromOtpLogin` - Generate access tokens using OTP
    - `generateKycAuthToken` - Create KYC authentication tokens
    - `initializeTenantAuth` - Initialize tenant authentication

    See the [Authentication](../authentication/token.md) section for detailed usage.

## Entity Relationship Diagrams

The following diagrams show the relationships between core business entities in the CoverGo system. Each diagram represents a major domain area and shows how entities relate to each other.

### Policy & Premium Domain

```mermaid
erDiagram
    POLICY ||--o{ PREMIUM : contains
    POLICY ||--o{ ENDORSEMENT : modified_by
    POLICY ||--o{ CLAIM : filed_against
    POLICY ||--o{ BENEFIT : provides
    PREMIUM ||--o{ INSTALLMENT : paid_through
    INSTALLMENT ||--o{ PAYMENT : settled_by
    CUSTOMER ||--o{ POLICY : owns
    AGENT ||--o{ POLICY : sells
    PRODUCT ||--o{ POLICY : defines
```

### Billing & Payment Domain

```mermaid
erDiagram
    CUSTOMER ||--o{ PAYOR : has
    PAYOR ||--o{ BILLING_CHANNEL : uses
    INVOICE ||--o{ PAYMENT : paid_by
    RECEIPT ||--o{ PAYMENT : records
    COMMISSION ||--o{ PAYMENT : generates
    FEE ||--o{ PAYMENT : charges
    BANK_ACCOUNT ||--o{ PAYMENT : receives
    SEPA_BATCH ||--o{ SEPA_TRANSFER : contains
    MANDATE ||--o{ SEPA_TRANSFER : authorizes
```

### Claims Domain

```mermaid
erDiagram
    CLAIM ||--o{ CLAIMANT : filed_by
    CLAIM ||--o{ BENEFIT : claims
    CLAIM ||--o{ PAYMENT : results_in
    CLAIM ||--o{ ASSESSMENT : evaluated_by
    CLAIM ||--o{ DIAGNOSIS : based_on
    CLAIM ||--o{ TREATMENT : requires
    ASSESSMENT ||--o{ APPROVAL : leads_to
    APPROVAL ||--o{ PAYMENT : authorizes
```

### Agent & Broker Domain

```mermaid
erDiagram
    AGENT ||--o{ POLICY : sells
    AGENT ||--o{ COMMISSION : earns
    AGENT ||--o{ TEAM : belongs_to
    BROKER ||--o{ AGENT : manages
    DISTRIBUTOR ||--o{ TEAM : organizes
    TEAM ||--o{ AGENT : contains
    PRODUCT_AVAILABILITY ||--o{ AGENT : grants
    PRODUCT_AVAILABILITY ||--o{ PRODUCT : for
```

### Customer & Party Domain

```mermaid
erDiagram
    INDIVIDUAL ||--o{ CONTACT : has
    INDIVIDUAL ||--o{ ADDRESS : located_at
    INDIVIDUAL ||--o{ IDENTITY : identified_by
    INDIVIDUAL ||--o{ BENEFICIARY : designates
    ORGANIZATION ||--o{ CONTACT : has
    ORGANIZATION ||--o{ ADDRESS : located_at
    ORGANIZATION ||--o{ INDIVIDUAL : employs
    PARTY ||--o{ INDIVIDUAL : represents
    PARTY ||--o{ ORGANIZATION : represents
```

### Financial Domain

```mermaid
erDiagram
    FINANCIAL_YEAR ||--o{ PERIOD : contains
    PERIOD ||--o{ TRANSACTION : recorded_in
    TRANSACTION ||--o{ LEDGER_ENTRY : creates
    LEDGER_ENTRY ||--o{ ACCOUNT : affects
    BATCH_TRANSACTION ||--o{ LEDGER_ENTRY : groups
    CHAIN_BUILDER ||--o{ LEDGER_ENTRY : generates
    PRODUCT_GL_CHAIN ||--o{ LEDGER_ENTRY : defines
```

### Product & Reference Domain

```mermaid
erDiagram
    PRODUCT ||--o{ BENEFIT : provides
    PRODUCT ||--o{ PRICING : has
    PRODUCT ||--o{ UNDERWRITING_RULE : follows
    REFERENCE_TYPE ||--o{ REFERENCE_DATA : categorizes
    PRODUCT_AVAILABILITY ||--o{ PRODUCT : enables
    PRODUCT_AVAILABILITY ||--o{ AGENT : for
    PRODUCT_CONFIG ||--o{ PRODUCT : configures
```

### Transaction & Order Domain

```mermaid
erDiagram
    ORDER ||--o{ TRANSACTION : creates
    TRANSACTION ||--o{ PAYMENT : settles
    TRANSACTION ||--o{ REFUND : reversed_by
    TRANSACTION ||--o{ NOTE : documented_by
    TRANSACTION ||--o{ ATTACHMENT : supported_by
    TRANSACTION ||--o{ FACT : described_by
    ORDER ||--o{ CUSTOMER : placed_by
    ORDER ||--o{ PRODUCT : for
```

### Authentication & Security Domain

```mermaid
erDiagram
    TENANT ||--o{ USER : contains
    USER ||--o{ LOGIN : authenticates
    USER ||--o{ PERMISSION : granted
    LOGIN ||--o{ ROLE : assigned
    ROLE ||--o{ PERMISSION : defines
    PERMISSION_GROUP ||--o{ PERMISSION : groups
    USER ||--o{ PERMISSION_GROUP : belongs_to
```

## Schema Introspection

The schema was introspected using the following query:

```graphql
query {
  __schema {
    mutationType {
      fields {
        name
        description
        args {
          name
          description
          type {
            name
            kind
            ofType {
              name
              kind
            }
          }
        }
        type {
          name
          kind
          ofType {
            name
            kind
            fields {
              name
              type {
                name
                kind
              }
            }
          }
        }
      }
    }
  }
}
```

## Response Structure

All mutations return a standardized result structure:

```json
{
  "data": {
    "mutationName": {
      "status": "string",
      "errors": [...],
      "errors_2": [...],
      "value": "...",
      "isSuccess": true|false
    }
  }
}
```

## Error Handling

The API uses a consistent error handling pattern with:
- `status`: Operation status message
- `errors`: Primary error array
- `errors_2`: Secondary error array
- `isSuccess`: Boolean success indicator

## See Also

- [Available Mutations](mutations.md) - Complete list of mutation operations
- [Authentication](../authentication/token.md) - Authentication information
