<script>
    import Footer from '$lib/components/Footer.svelte';
</script>
<main>
    <slot/>
</main>

<Footer/>
<style>

    :global(body) {
        box-shadow: inset 0rem 0rem 10rem 0rem black;
    }
</style>
