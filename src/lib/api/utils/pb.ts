import PocketBase from 'pocketbase'

export const createInstance = () => {
    const pb = new PocketBase('http://127.0.0.1:8090');

    return pb;
}

export const login = async () => {
    const pb = createInstance();

    const authData = await pb.admins.authWithPassword('sachinsinghbhadoriya1@gmail.com', 'Sachin@123#');

    console.log(pb.authStore.isValid)
    console.log(pb.authStore.token)

    return authData;
}

export const checkAuth = async () => {
    const pb = createInstance();

    if (
        !pb.authStore.isValid
    ) {

        console.log('not valid')
        return;
    }

    console.log('valid')


    return pb.authStore.isValid;
}