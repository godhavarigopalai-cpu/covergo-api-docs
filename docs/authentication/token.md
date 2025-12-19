# token_2 API (GraphQL)

## Description
Refresh the user's authentication and obtain a new token.

## Query
```graphql
query Token2(
  $tenantId: String!,
  $clientId: String!,
  $username: String!,
  $password: String!,
  $twoFactorToken: String,
  $twoFactorTemplateId: String
) {
  token_2(
    tenantId: $tenantId,
    clientId: $clientId,
    username: $username,
    password: $password,
    twoFactorToken: $twoFactorToken,
    twoFactorTemplateId: $twoFactorTemplateId
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
| Name                | Type     | Required | Description                  |
|---------------------|----------|----------|------------------------------|
| tenantId            | String   | Yes      | The tenant identifier        |
| clientId            | String   | Yes      | The client identifier        |
| username            | String   | Yes      | The user's username          |
| password            | String   | Yes      | The user's password          |
| twoFactorToken      | String   | No       | 2FA token (if applicable)    |
| twoFactorTemplateId | String   | No       | 2FA template ID (if needed)  |

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
    "token_2": {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR...",
      "refreshToken": "def50200efb8...",
      "expiresIn": 3600,
      "tokenType": "Bearer",
      "identityToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJ...",
      "requiresTwoFactor": false,
      "error": null,
      "errorDescription": null
    }
  }
}
```

### Example Failure Response
```json
{
  "data": {
    "token_2": {
      "accessToken": null,
      "refreshToken": null,
      "expiresIn": null,
      "tokenType": null,
      "identityToken": null,
      "requiresTwoFactor": false,
      "error": "INVALID_CREDENTIALS",
      "errorDescription": "Username or password incorrect"
    }
  }
}
```

## Usage Notes
- Use when authenticating a user to obtain tokens.
- If `requiresTwoFactor` is true, repeat with 2FA details.
- On error, prompt user to check credentials or re-authenticate.
