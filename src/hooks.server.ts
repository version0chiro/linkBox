export async function handle({ event, resolve }) {
    console.log("Enter");
    return await resolve(event);
}