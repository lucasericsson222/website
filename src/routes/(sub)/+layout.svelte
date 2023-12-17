<script lang="ts">
    import Footer from '$lib/components/Footer.svelte';
</script>

<main>
    <slot/>
</main>

<Footer/>


<style lang="scss">

    :global(body) {
        box-shadow: none;
    }
    main {
        padding: 2rem;
    }

</style>

