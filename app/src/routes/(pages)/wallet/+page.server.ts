import { walletSchema } from "$lib/schemas/crud"
import { fail, superValidate } from "sveltekit-superforms"
import { zod4 } from "sveltekit-superforms/adapters"
import type { Actions, PageServerLoad } from "./$types";
import { verifyMessage } from "viem";


export const load: PageServerLoad = async () => {
    const form = await superValidate(zod4(walletSchema));

    return { form };
}


export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const form = await superValidate(request, zod4(walletSchema));
        if (!form.valid) return fail(400, { form });

        const { address, signature, messages } = form.data;

        const isValid = await verifyMessage({
            address: address as `0x${string}`,
            message: messages,
            signature: signature as `0x${string}`
        });

        if (!isValid) return fail(401, { error: 'Invalid signature' });

        cookies.set('session_wallet', address, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: true,
			maxAge: 60 * 60 * 24 * 7 // 7 days
		});

        return {
			success: true,
			address
		};
    }
}