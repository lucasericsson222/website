<!-- +page.svelte -->
<script lang="ts">
    import GameOfLife from "$lib/components/GameOfLife.svelte";
</script>

<GameOfLife />

<div class="center-container"> 
    <h2 class="sideways-pre-text">HELLO! I'M</h2>
    <h1 class="name">Lucas</h1>
    <h2 class="post-text">A SOFTWARE DEVELOPER AND MUSICIAN</h2>
</div>

<style lang="scss">
    h1 {
        color: #F3A712;
        font-size: 20rem;
        font-family: 'pincoyablack';
        text-shadow: -20px -20px #F05D5E;
        margin: 0;
        padding: 0;
    }
    .center-container {
        margin: 2rem;
        display: flex;
        flex-direction: column; 
        align-items: center;
        justify-content: left;
        //background-image: linear-gradient(rgba(23, 24, 28, 0.55),rgba(23, 24, 28, 0.55)), url("static.gif");
    }
    .sideways-pre-text {
        transform: rotate(-10deg);
        position: relative;
        left: -20rem;
    }
    .post-text {
        position: relative;
        top: -5rem;
    }
    h2 {
        background-color: #F05D5E;
        color: #17181C;
        padding: 0.25rem;
    }
    h1 {
        margin: 0;
    }


</style>
