<script>
    import {
        getLinkBoxesForUserID,
        getMockLinkBoxes,
    } from "$lib/api/links/fetchLinks";
    import InputLinkBox from "$lib/components/linkboxes/InputLinkBox.svelte";
    import Linkbox from "$lib/components/linkboxes/Linkbox.svelte";
    /** @type {import('./$types').PageData} */
    export let data;

    const linkBoxes = data.state.linkBoxes;
    console.log(linkBoxes);
</script>

<div class="p-2">
    <InputLinkBox user={data.state.user} />
    {#each linkBoxes as linkBox}
        <div class="bg-slate-100 p-5">
            <h2>
                <Linkbox id={linkBox.id} title={linkBox.title} links={linkBox.links}  />
            </h2>
        </div>
    {/each}
</div>
