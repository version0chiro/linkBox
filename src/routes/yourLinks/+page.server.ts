import { getLinkBoxesForUserID } from "$lib/api/links/fetchLinks";

/** @type {import('./$types').PageLoad} */
export async function load({ locals }) {
    const linkBoxes = await getLinkBoxesForUserID(locals.pb.authStore.model.username)
    return {
        state: {
            isValid: locals.pb.authStore.isValid,
            user: locals.pb.authStore.model,
            linkBoxes: linkBoxes
        }
    }
}