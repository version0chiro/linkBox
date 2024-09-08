<script>
    export let title;
    export let links;
    export let id;

    import { fly } from "svelte/transition";
    let expanded = false;

    function copyIdToClipboard() {
        navigator.clipboard
            .writeText(id)
            .then(() => {
                alert("ID copied to clipboard!");
            })
            .catch((err) => {
                console.error("Failed to copy ID: ", err);
            });
    }
</script>

<div class="flex flex-col">
    <div class="flex flex-row justify-between">
        <h2 class="font-bold">
            {title}
        </h2>
        <h3 on:click={copyIdToClipboard} class="cursor-pointer">
            {id}
        </h3>
    </div>
    <div
        class="overflow-hidden"
        in:fly={{ y: 20, duration: 500 }}
        out:fly={{ y: -20, duration: 500 }}
        style:display={expanded ? "block" : "none"}
    >
        {#each links as link}
            <h1>
                <a href={link.url}>
                    {link.name}
                </a>
            </h1>
        {/each}
    </div>

    <button
        on:click={() => (expanded = !expanded)}
        class="mt-2 px-4 py-2 bg-blue-500 text-white">Toggle</button
    >
</div>
