<script>
    import { pushLinkBoxForUserID } from "$lib/api/links/submitLinks";

    /**
     * @type {any}
     */
    export let user;

    // Data structure to hold the form inputs
    let boxName = "";
    let links = [{ name: "", url: "" }]; // Initial link entry

    // Function to add a new link input
    function addLink() {
        links = [...links, { name: "", url: "" }];
    }

    // Function to remove a link input
    /**
     * @param {number} index
     */
    function removeLink(index) {
        links = links.filter((_, i) => i !== index);
    }

    // Function to handle form submission (example logging to console)
    function handleSubmit() {
        console.log(links, user.username);
        pushLinkBoxForUserID(boxName, links, user.username);
    }
</script>

<!-- Form with box name and dynamic link inputs -->
<form
    on:submit|preventDefault={handleSubmit}
    class="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md"
>
    <div class="mb-4">
        <label for="boxName" class="block text-gray-700 font-bold mb-2"
            >Box Name:</label
        >
        <input
            type="text"
            id="boxName"
            bind:value={boxName}
            placeholder="Enter box name"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>

    {#each links as link, index}
        <div class="mb-4">
            <div class="flex space-x-4">
                <div class="flex-1">
                    <label
                        for={`linkName-${index}`}
                        class="block text-gray-700 font-bold mb-2"
                        >Link Name:</label
                    >
                    <input
                        type="text"
                        id={`linkName-${index}`}
                        bind:value={link.name}
                        placeholder="Enter link name"
                        required
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div class="flex-1">
                    <label
                        for={`linkUrl-${index}`}
                        class="block text-gray-700 font-bold mb-2"
                        >Link URL:</label
                    >
                    <input
                        type="url"
                        id={`linkUrl-${index}`}
                        bind:value={link.url}
                        placeholder="Enter link URL"
                        required
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <!-- Remove button -->
                {#if links.length > 1}
                    <button
                        type="button"
                        class="text-red-500 font-bold self-end mb-1"
                        on:click={() => removeLink(index)}
                        title="Remove link"
                    >
                        ✖
                    </button>
                {/if}
            </div>
        </div>
    {/each}

    <!-- Button to add a new link -->
    <button
        type="button"
        class="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
        on:click={addLink}
    >
        ➕ Add Link
    </button>

    <!-- Submit button -->
    <button
        type="submit"
        class="w-full mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
    >
        Submit
    </button>
</form>
