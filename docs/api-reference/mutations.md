# Available Mutations

This page lists all mutations available in the CoverGo GraphQL schema.

!!! note "Authentication APIs"
    **No token or authentication mutations were found in the schema.**

    The following mutations are business operations, not authentication operations.

## Billing Operations

| Mutation | Description |
|----------|-------------|
| `addBillingChannel` | Add a new billing channel |
| `adjustBillingChannel` | Adjust existing billing channel |
| `removeBillingChannel` | Remove a billing channel |
| `selectBillingChannel` | Select a billing channel |

## Payor Management

| Mutation | Description |
|----------|-------------|
| `addPayor` | Add a payor to the system |
| `adjustPayor` | Adjust payor information |
| `removePayor` | Remove a payor |

## Fee Management

| Mutation | Description |
|----------|-------------|
| `createFee` | Create a new fee |
| `updateFee` | Update existing fee |
| `deactivateFee` | Deactivate a fee |

## Financial Operations

| Mutation | Description |
|----------|-------------|
| `createFinanceIbanMappings` | Create IBAN mappings |
| `updateFinanceIbanMappings` | Update IBAN mappings |
| `createFinancialYear` | Create financial year |
| `financialPosting` | Perform financial posting |
| `updateGeneralLedgerEntries` | Update general ledger entries |
| `retryGeneralLedgerEntries` | Retry general ledger entries |
| `syncGLJournalLines` | Sync GL journal lines |
| `verifyAccountPeriodBalance` | Verify account period balance |
| `executeInstallmentGLChain` | Execute installment GL chain |
| `updateChainBuilders` | Update chain builders |

## Policy Operations

| Mutation | Description |
|----------|-------------|
| `registerPolicyPremium` | Register policy premium |
| `adjustPolicyPremium` | Adjust policy premium |
| `startApprovedPolicyPremiumCancellation` | Start approved policy premium cancellation |
| `waivePolicyPremium` | Waive policy premium |
| `regeneratePremiumInstallment` | Regenerate premium installment |
| `cancelPremiumInstallment` | Cancel premium installment |
| `createPremiumPaymentTransaction` | Create premium payment transaction |

## Invoice Operations

| Mutation | Description |
|----------|-------------|
| `createInvoice` | Create invoice |
| `createGroupInvoice` | Create group invoice |
| `createCardAdditionInvoice` | Create card addition invoice |
| `resendInvoice` | Resend invoice |
| `retryInvoicePayment` | Retry invoice payment |
| `waiveInvoiceFee` | Waive invoice fee |
| `createRefundNote` | Create refund note |

## Commission Operations

| Mutation | Description |
|----------|-------------|
| `createCommissionTransaction` | Create commission transaction |

## Payment Operations

| Mutation | Description |
|----------|-------------|
| `createReceipt` | Create receipt |
| `createSepaBatch` | Create SEPA batch |
| `createSepaSchedule` | Create SEPA schedule |
| `createSepaTransfer` | Create SEPA transfer |
| `downloadSepaBatchFile` | Download SEPA batch file |
| `generateSepaFromInstallment` | Generate SEPA from installment |
| `generateSepaMandatePdf` | Generate SEPA mandate PDF |
| `registerMandate` | Register mandate |
| `updateMandate` | Update mandate |

## Bank Account Operations

| Mutation | Description |
|----------|-------------|
| `createInternalBankAccount` | Create internal bank account |
| `updateInternalBankAccount` | Update internal bank account |

## Reference Data Operations

| Mutation | Description |
|----------|-------------|
| `createReferenceData` | Create reference data |
| `updateReferenceData` | Update reference data |
| `deactivateReferenceData` | Deactivate reference data |

## Authentication Operations

| Mutation | Description |
|----------|-------------|
| `createAccessTokenFromOtpLogin` | Get access token using OTP login |
| `generateKycAuthToken` | Generate auth token for KYC processes |
| `initializeTenantAuth` | Initialize tenant authentication |

## Other Operations

| Mutation | Description |
|----------|-------------|
| `addMemberOrder` | Add member order |
| `applyPromoCode` | Apply promo code |
| `registerMasterPolicy` | Register master policy |
| `updateFeatureConfiguration` | Update feature configuration |
| `updatePromotionManagementFeature` | Update promotion management feature |

## Mutation Pattern

All mutations follow a consistent pattern:

```graphql
mutation {
  mutationName(command: {
    # mutation-specific input fields
  }) {
    status
    errors
    errors_2
    value
    isSuccess
  }
}
```

## Response Structure

Mutations return a standardized response:

```json
{
  "status": "Success|Error message",
  "errors": ["error1", "error2"],
  "errors_2": ["additional error info"],
  "value": "result data or ID",
  "isSuccess": true
}
```

## See Also

- [Schema Reference](schema.md) - GraphQL schema structure
- [Authentication](../authentication/token.md) - Authentication information
