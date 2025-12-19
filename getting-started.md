# Getting Started with CoverGo API

This guide will help you get started with the CoverGo GraphQL API.

## Prerequisites

- GraphQL client (Postman, Insomnia, or similar)
- API credentials (if required)
- Understanding of GraphQL queries and mutations

## GraphQL Endpoint

```
https://api.dev.covergo.cloud/graphql/
```

## Authentication

!!! important "Authentication Required"
    The CoverGo API requires authentication. Use the available token APIs for authentication:

    **Available Authentication Methods:**
    - OTP Login: `createAccessTokenFromOtpLogin` mutation
    - Token Refresh: `refreshToken` and `token_2` queries
    - Token Verification: `verifyGOODTokenAndGetCoverGoToken` query

    See the [Authentication](../authentication/token.md) section for detailed usage.

## Making Your First Query

### 1. Schema Introspection

Start by exploring the schema:

```graphql
query {
  __schema {
    queryType {
      name
    }
    mutationType {
      name
    }
  }
}
```

### 2. Available Operations

Check what queries are available:

```graphql
query {
  __schema {
    queryType {
      fields {
        name
        description
      }
    }
  }
}
```

### 3. Test a Simple Query

Try a basic query to test connectivity:

```graphql
query {
  # Replace with an actual query from the schema
  # Example: tenants { ... } or other available queries
}
```

## Making Mutations

### Basic Mutation Structure

All mutations follow this pattern:

```graphql
mutation {
  mutationName(command: {
    # Input parameters
    field1: "value1"
    field2: "value2"
  }) {
    status
    errors
    errors_2
    value
    isSuccess
  }
}
```

### Example Mutation

```graphql
mutation {
  createFee(command: {
    name: "Example Fee"
    amount: 100.00
    # Other required fields...
  }) {
    status
    errors
    value
    isSuccess
  }
}
```

## Error Handling

The API returns errors in a structured format:

```json
{
  "data": {
    "mutationName": {
      "status": "Error message",
      "errors": ["Specific error details"],
      "errors_2": ["Additional error information"],
      "isSuccess": false
    }
  }
}
```

## Best Practices

### 1. Use Descriptive Queries

```graphql
# Good
mutation {
  createInvoice(command: {
    policyId: "POL-123"
    amount: 500.00
  }) {
    status
    value
    isSuccess
  }
}
```

### 2. Handle Errors Properly

```javascript
const response = await graphqlRequest(mutation);

if (!response.data.mutationName.isSuccess) {
  console.error('Errors:', response.data.mutationName.errors);
  console.error('Additional errors:', response.data.mutationName.errors_2);
}
```

### 3. Use Variables

```graphql
mutation CreateFee($input: CreateFeeCommandInput!) {
  createFee(command: $input) {
    status
    value
    isSuccess
  }
}

# Variables:
{
  "input": {
    "name": "Service Fee",
    "amount": 50.00
  }
}
```

## Common Patterns

### Command Input Objects

Most mutations use command input objects:

```graphql
input CreateFeeCommandInput {
  name: String!
  amount: Decimal!
  # Other fields...
}
```

### Result Objects

Mutations return result objects with consistent structure:

```graphql
type ResultOfFee {
  status: String
  errors: [String]
  errors_2: [String]
  value: Fee
  isSuccess: Boolean
}
```

## Troubleshooting

### Common Issues

1. **Authentication Errors**: Verify your authentication method
2. **Schema Errors**: Check field names and types
3. **Permission Errors**: Ensure your credentials have required permissions

### Debug Steps

1. Test with schema introspection
2. Verify field names and types
3. Check error messages in response
4. Contact API support if needed

## Next Steps

- Explore the [API Reference](api-reference/schema.md)
- Review [Available Mutations](api-reference/mutations.md)
- Check specific mutation documentation

## Support

For additional help:
- Check the [API Reference](api-reference/schema.md) for detailed field information
- Contact the CoverGo development team for authentication setup
- Review error messages for specific guidance
