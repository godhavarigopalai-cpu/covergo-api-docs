# CoverGo API Documentation

Welcome to the CoverGo API documentation. This site provides comprehensive documentation for the CoverGo GraphQL APIs.

## Overview

The CoverGo API is a GraphQL-based API that provides access to various insurance and financial services including:

- Policy management
- Billing and payments
- Financial operations
- Commission management
- Invoice generation

## GraphQL Endpoint

```
https://api.dev.covergo.cloud/graphql/
```

## Authentication

!!! success "Token APIs Found"
    The GraphQL schema contains several authentication and token management APIs:

    **Queries:**
    - `token_2` - Token refresh functionality
    - `refreshToken` - Token refresh
    - `verifyGOODTokenAndGetCoverGoToken` - Token verification
    - SSO token queries for single sign-on

    **Mutations:**
    - `createAccessTokenFromOtpLogin` - Get access token using OTP login

    See the [Authentication](authentication/token.md) section for complete documentation.

## Available APIs

The GraphQL schema contains numerous mutations for managing:

- **Billing Operations**: `addBillingChannel`, `adjustBillingChannel`, `selectBillingChannel`
- **Financial Operations**: `createFee`, `updateFee`, `financialPosting`
- **Policy Management**: `registerPolicyPremium`, `adjustPolicyPremium`
- **Payment Processing**: `createInvoice`, `createReceipt`, `retryInvoicePayment`

For a complete list of available mutations, see the [API Reference](api-reference/mutations.md).

## Getting Started

1. Review the [GraphQL Schema](api-reference/schema.md) structure
2. Check available [Mutations](api-reference/mutations.md)
3. Refer to specific API documentation for implementation details

## Support

For questions or issues with the API documentation, please contact the development team.
