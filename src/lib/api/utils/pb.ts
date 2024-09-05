import PocketBase from 'pocketbase'

export const createInstance = () => {
    const pb = new PocketBase('http://127.0.0.1:8090');

    return pb;
}

export const getUser = async (id: string) => {
    const pb = createInstance();

    const record = await pb.collection('users').getOne(id);

    return record;
}


export const loginAdmin = async () => {
    const pb = createInstance();

    const authData = await pb.admins.authWithPassword('sachinsinghbhadoriya1@gmail.com', 'Sachin@123#');

    return authData;
}

export const login = async (email: string, password: string) => {
    const pb = createInstance();

    const authData = await pb.collection('users').authWithPassword(
        email,
        password
    );

    return authData;
}

export const register = async (email: string, password: string, passwordConfirm: string) => {
    const pb = createInstance();

    const data = {
        "email": email,
        "password": password,
        "passwordConfirm": passwordConfirm
    };

    const record = await pb.collection('users').create(data);

    return record;
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