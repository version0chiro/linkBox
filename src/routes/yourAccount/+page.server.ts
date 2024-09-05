/** @type {import('./$types').Actions} */
import { checkAuth, login as loginPB, loginAdmin, register } from '$lib/api/utils/pb.js';
import { createInstance } from '$lib/api/utils/pb';


export const actions = {
    login: async ({ request, locals }) => {
        locals.loading = true;
        const { email, password, isAdmin } = Object.fromEntries(await request.formData());
        console.log(email, password)
        // const authData = await checkAuth(email, password);
        // if (!authData) return null
        // document.cookie = authData
        if (isAdmin) {
            const authData = await loginAdmin();
            locals.pb.authStore.save(authData.token, authData.model, authData.admin);
            console.log(authData.admin)
        }
        else {
            const authData = await loginPB(email.toString(), password.toString());
            locals.pb.authStore.save(authData.token, authData.meta);
        }
        locals.loading = false;
        // Set cookie
        // cookies.set('pb_auth', authData.token, { path: '/' });
    },
    test: async ({ request, locals }) => {
        const testData = await locals.pb.collection('linkboxes').getFullList({
            sort: '-created',
        });

    },
    register: async ({ request, locals }) => {
        const { email, password } = Object.fromEntries(await request.formData());
        console.log(email, password)
        const authData = await register(email.toString(), password.toString(), password.toString());
        locals.pb.authStore.save(authData.token, authData.meta);
    },
    logout: async ({ locals }) => {
        locals.pb.authStore.clear();
    }
};


/** @type {import('./$types').PageLoad} */
export async function load({ locals }) {
    const state = {
        isValid: locals.pb.authStore.isValid,
        user: locals.pb.authStore.model,
        loading: locals.loading
    }
    console.log(locals)
    if (locals.pb.authStore.isValid && locals.pb.authStore.model && locals.pb.authStore.model.username) {
        return {
            state
        }
    } else {
        return {
            state: {
                isValid: locals.pb.authStore.isValid,
                user: null,
                loading: locals.loading
            }
        }
    }
}