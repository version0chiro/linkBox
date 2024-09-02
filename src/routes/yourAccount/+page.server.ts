/** @type {import('./$types').Actions} */
import { checkAuth, login as loginPB } from '$lib/api/utils/pb.js';

export const actions = {
    login: async ({ request, locals }) => {
        const authData = await loginPB();
        // document.cookie = authData
        locals.pb.authStore.save(authData.token, authData.model);
        // cookies.set('pb_auth', authData.token, { path: '/' });
    },
    test: async ({ request, locals }) => {

        checkAuth()
        console.log('test')
    }
};