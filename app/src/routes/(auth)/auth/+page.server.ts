import { fail, message, superValidate } from 'sveltekit-superforms';
import type { PageServerLoad } from './$types';
import { zod4 } from 'sveltekit-superforms/adapters';
import { userAuth } from '$lib/schemas/auth';
import type { Actions } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod4(userAuth));

	return { form };
};

export const actions: Actions = {
	register: async ({ request, locals: { supabase } }) => {
		const form = await superValidate(request, zod4(userAuth));
		if (!form.valid) return fail(400, { form });

		const { email, password } = form.data;

		const { error: registerError } = await supabase.auth.signUp({ email, password });
		if (registerError) return message(form, registerError.message);

		return message(form, 'Your registration was successful');
	},

	login: async ({ request, locals: { supabase } }) => {
		const form = await superValidate(request, zod4(userAuth));
		if (!form.valid) return fail(400, { form });

		const { email, password } = form.data;

		const { error: loginError } = await supabase.auth.signUp({ email, password });
		if (loginError) return message(form, loginError.message);

		return message(form, 'Login successfully');
	}
};
