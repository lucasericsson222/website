<!-- +layout.svelte -->
<script>
    import Header from '$lib/components/Header.svelte';
    import '$lib/styles/style.scss';
</script>

<Header/>

<slot />

<footer>
    <hr/>
</footer>

<style lang="scss">
    hr {
        border-top: 1px solid #F05D5E;
        border-bottom: none;
    }
</style>
