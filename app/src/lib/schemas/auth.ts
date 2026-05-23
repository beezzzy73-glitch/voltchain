import z from 'zod/v4';

export const userAuth = z.object({
	email: z.string().max(40, 'Your email is too long').min(7, 'Your email is short'),
	password: z.string().max(30, 'Your password is too long').min(7, 'Your password is short')
});
