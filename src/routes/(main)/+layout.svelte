<script>
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';
</script>

<Header/>
<main>
<slot/>
</main>
<Footer/>

<style lang="scss">
@import "src/lib/styles/colors.scss";
    main {
        display: flex;
        flex-direction: column;
    } 

    div {
        padding: 3rem;
        flex: 1;
    }
</style>

