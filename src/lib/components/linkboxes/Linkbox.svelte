<script>
    export let title;
    export let links;

    import { fly } from "svelte/transition";
    let expanded = false;
</script>

<div class="flex flex-col">
    <h2 class="font-bold"> 
        {title}
    </h2>
    <div
        class="overflow-hidden"
        in:fly={{ y: 20, duration: 500 }}
        out:fly={{ y: -20, duration: 500 }}
        style:display={expanded ? "block" : "none"}
    >
        {#each links as link}
            <h1>
                <a href={link.url}>
                    {link.title}
                </a>
            </h1>
        {/each}
    </div>

    <button
        on:click={() => (expanded = !expanded)}
        class="mt-2 px-4 py-2 bg-blue-500 text-white">Toggle</button
    >
</div>
