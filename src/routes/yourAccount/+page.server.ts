/** @type {import('./$types').Actions} */
import { checkAuth, login as loginPB } from '$lib/api/utils/pb.js';
import { createInstance } from '$lib/api/utils/pb';


export const actions = {
    login: async ({ request, locals }) => {
        const authData = await loginPB();
        // document.cookie = authData
        locals.pb.authStore.save(authData.token, authData.model, authData.admin);
        if(authData.)
        console.log(authData.admin)
        // cookies.set('pb_auth', authData.token, { path: '/' });
    },
    test: async ({ request, locals }) => {
        const testData = await locals.pb.collection('linkboxes').getFullList({
            sort: '-created',
        });

    },
    logout: async ({ locals }) => {
        locals.pb.authStore.clear();
    }
};


/** @type {import('./$types').PageLoad} */
export async function load({ locals }) {
    console.log(locals.pb.authStore)
    if (locals.pb.authStore.isValid) {
        return {
            state: {
                isValid: locals.pb.authStore.isValid,
                user: locals.pb.authStore.model
            }
        }
    }
    return {
        state: {
            isValid: locals.pb.authStore.isValid
        }
    };
}