<!-- +page.svelte -->
<script lang="ts">
    import GameOfLife from "$lib/components/GameOfLife.svelte";
</script>

<GameOfLife />

<div class="center-container"> 
    <h2 class="sideways-pre-text">Hello! I'm</h2>
    <h1>Lucas</h1>
    <h2 class="post-text">a software developer and musician</h2>
</div>

<div class="content">
    <div class="hbox-container">
        <p> Hello! I'm a UC Berkeley student majoring in Electrical Engineering
            and Computer Science. I enjoy making videogames, writing music, and
            working on conlangs. 
        </p>
        <p></p>
    </div>
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
    .content {
        padding: 1rem;
        background: #17181C;
        flex: 1;
        //box-shadow: 0 0 100px 1px black;

    //box-shadow: inset 0 0 100px 1px black;
    }
    .hbox-container {
        display: flex;
    }
    .hbox-container * {
        padding: 2rem;
        flex: 1;
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
    p {
        margin: 0;
    }
    h1 {
        margin: 0;
    }


</style>
