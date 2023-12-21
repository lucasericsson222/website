<script lang="ts">
    import {fade} from "svelte/transition";
    import {expoInOut} from "svelte/easing";
    let speed = 500;
    export let data;
</script>

<div class="transition-container">
    {#key data.path}
    <div
        in:fade={{easing: expoInOut, duration: speed / 2, delay: speed/2}}
        out:fade={{easing: expoInOut, duration: speed / 2}}
    > 
        <main>
            <slot />
        </main>
    </div>
    {/key}
</div>
<style lang="scss">
    .transition-container {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
    }
    .transition-container > * {
        grid-row: 1;
        grid-column: 1;
    }
</style>