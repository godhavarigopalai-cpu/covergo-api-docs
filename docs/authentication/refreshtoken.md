# refreshToken API (GraphQL)

!!! info "Token Refresh Endpoint"
    This API handles token renewal for maintaining authenticated sessions in CoverGo GraphQL services.

## Description
Exchange a valid refresh token for a new access and refresh token.

## Query
```graphql
query RefreshToken(
  $tenantId: String!,
  $clientId: String!,
  $refreshToken: String!
) {
  refreshToken(
    tenantId: $tenantId,
    clientId: $clientId,
    refreshToken: $refreshToken
  ) {
    accessToken
    error
    errorDescription
    expiresIn
    identityToken
    refreshToken
    requiresTwoFactor
    tokenType
  }
}
```

## Arguments
| Name         | Type     | Required | Description            |
|--------------|----------|----------|------------------------|
| tenantId     | String   | Yes      | The tenant identifier  |
| clientId     | String   | Yes      | The client identifier  |
| refreshToken | String   | Yes      | Your refresh token     |

## Response
Returns a `token` object:

| Field             | Type     | Description                                         |
|-------------------|----------|-----------------------------------------------------|
| accessToken       | String   | New access token                                    |
| refreshToken      | String   | New refresh token                                   |
| identityToken     | String   | (optional) Additional identity token                |
| expiresIn         | Int      | Time-to-live of the access token (in seconds)       |
| tokenType         | String   | Usually `Bearer`                                    |
| requiresTwoFactor | Boolean  | Whether 2FA is required before completion           |
| error             | String   | Error code if operation failed                      |
| errorDescription  | String   | Human-readable error description                    |

### Example Success Response
```json
{
  "data": {
    "refreshToken": {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR...",
      "refreshToken": "def50200efb8...",
      "expiresIn": 3600,
      "tokenType": "Bearer",
      "identityToken": "eyJ0eXAiOiJKV1QiLCJhb...",
      "requiresTwoFactor": false,
      "error": null,
      "errorDescription": null
    }
  }
}
```

### Example Invalid Token Response
```json
{
  "data": {
    "refreshToken": {
      "accessToken": null,
      "refreshToken": null,
      "expiresIn": null,
      "tokenType": null,
      "identityToken": null,
      "requiresTwoFactor": false,
      "error": "INVALID_REFRESH_TOKEN",
      "errorDescription": "Refresh token expired or invalid"
    }
  }
}
```

## Usage Notes
- Use to rotate access tokens when your current access token expires.
- On error, prompt user to log in again.