<script>
    import { enhance } from "$app/forms";
    export let formLoading;
</script>

<form
    class="p-5 flex flex-col"
    method="POST"
    action="?/login"
    use:enhance={() => {
        formLoading = true;
        return async ({ update }) => {
            formLoading = false;
            update();
        };
    }}
>
    <div class="w-full flex flex-row border border-black p-2">
        Username
        <input class="w-2/3" type="email" name="email" />
    </div>
    <div class="w-full flex flex-row border border-black p-2">
        Password
        <input class="w-2/3" type="password" name="password" />
    </div>
    <div>
        Admin User:
        <input type="checkbox" name="isAdmin" />
    </div>
    <button class="bg-blue-200 mt-4 p-5 rounded-md font-bold"> Submit </button>
</form>

<form
    class="p-5 flex flex-col"
    method="POST"
    action="?/register"
    use:enhance={() => {
        formLoading = true;
        return async ({ update }) => {
            formLoading = false;
            update();
        };
    }}
>
    <div class="w-full flex flex-row border border-black p-2">
        Username
        <input class="w-2/3" type="email" name="email" />
    </div>
    <div class="w-full flex flex-row border border-black p-2">
        Password
        <input class="w-2/3" type="password" name="password" />
    </div>
    <div>
        Admin User:
        <input type="checkbox" name="isAdmin" />
    </div>
    <button class="bg-green-200 mt-4 p-5 rounded-md font-bold">
        Register
    </button>
</form>
