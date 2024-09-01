<script>
    import { getMockLinkBoxes } from "$lib/links/fetchLinks";
    import Linkbox from "$lib/components/linkboxes/Linkbox.svelte";
    const linkBoxes = getMockLinkBoxes();
</script>

<div class="p-2">
    {#each linkBoxes as linkBox}
        <div class="bg-slate-100 p-5">
            <h2>
                <Linkbox title={linkBox.name} links={linkBox.links} />
            </h2>
        </div>
    {/each}
</div>
