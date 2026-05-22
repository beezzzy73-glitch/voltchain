import z from 'zod/v4';


export const walletSchema = z.object({
    address: z.string(),
    signature: z.string(),
    messages: z.string(),
    wallets: z.enum(['metamask', 'walletconnect', 'coinbase', 'trust'])
});


export const walletPayment = z.object({
    amount: z.coerce.number()
});