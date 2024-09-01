/** @type {import('./$types').Actions} */
import { login as loginPB } from '$lib/api/utils/pb.js';

export const actions = {

    login: async (event) => {
        await loginPB();
    }
};