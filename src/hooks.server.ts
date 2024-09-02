import { createInstance } from '$lib/api/utils/pb';
import { cookieParse } from 'pocketbase';

export async function handle({ event, resolve }) {
    event.locals.pb = createInstance();
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
    console.log(
        event.request.headers.get('cookie'),
        event.locals.pb.authStore.isValid
    )
    try {
        if (event.locals.pb.authStore.isValid) {
            await event.locals.pb.collection('users').authRefresh();
        }
    } catch (_) {
    }

    const response = await resolve(event);

    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

    return response;
}