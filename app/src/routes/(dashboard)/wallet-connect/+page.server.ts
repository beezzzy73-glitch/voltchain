import { fail, superValidate } from 'sveltekit-superforms';
import type { PageServerLoad, Actions } from './$types';
import { zod4 } from 'sveltekit-superforms/adapters';
import { walletPayment } from '$lib/schemas/crud';

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod4(walletPayment));

	return { form };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod4(walletPayment));

		if (!form.valid) {
			return fail(400, { form });
		}

		const { amount } = form.data;

		const response = await fetch('https://api.paystack.co/transaction/initialize', {
			method: 'POST',

			headers: {
				Authorization: `Bearer YOUR_SECRET_KEY`,
				'Content-Type': 'application/json'
			},

			body: JSON.stringify({
				email: 'customer@email.com',
				amount: amount * 100 // Paystack uses kobo
			})
		});

		const data = await response.json();

		console.log(data);

		return {
			form,
			data
		};
	}
};
