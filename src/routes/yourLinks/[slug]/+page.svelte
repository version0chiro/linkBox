<script>
    import Linkbox from "$lib/components/linkboxes/Linkbox.svelte";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="p-2">
    <Linkbox title={data.linkBox.title} links={data.linkBox.links} id={data.linkBox.id} />
</div>
