<script>
    import LoginForm from "$lib/components/common/LoginForm.svelte";
    import { checkAuth } from "$lib/api/utils/pb";
    import TestForm from "$lib/components/common/TestForm.svelte";
    import Logout from "$lib/components/common/Logout.svelte";

    /** @type {import('./$types').PageData} */
    export let data;

    let isLoading = false;
</script>

<div class="flex flex-col">
    {#if isLoading}
        Loading ...
    {:else if data.state.user && data.state.user.username && data.state.isValid}
        <div class="flex flex-row px-5 pt-10">
            <img
                src="/mockPFP.jpg"
                alt="pfp-acc"
                class="w-1/3 h-1/3 rounded-xl"
            />
            <div class="flex flex-col ml-4">
                <h1>{data.state.user.username}</h1>
            </div>
        </div>
        <Logout />
        <TestForm />
    {:else}
        <LoginForm formLoading={isLoading} />
    {/if}
    <button class="p-10 bg-slate-200" on:click={checkAuth}> Click me!</button>
</div>
