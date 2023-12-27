<script lang="ts">
  import { onDestroy } from 'svelte';

    export let data;
    let is_playing: number | null = null;
    let audioplayer: HTMLAudioElement | null = null; 
    function modify_is_playing(i: number) {
        if (is_playing == i) {
            is_playing = null;
            audioplayer?.pause();
        } else {
            audioplayer?.pause();
            is_playing = i;
            audioplayer = new Audio(data.imgpaths[i].replace(".png", ".mp3"));
            audioplayer.play();
            audioplayer.onended = () => {is_playing = null};
        }
    } 
    onDestroy(() => {audioplayer?.pause(); audioplayer = null});
</script>

<div>
{#each data.imgpaths as src, i }
<div class="overlap audio-player-container">
    <p>{is_playing == i ? "■S" : "▶P"}</p>
    <div class="overlap hover-enlarge">
        <button on:click={(m)=>modify_is_playing(i)}></button>
        <img {src} alt="music img"/>
    </div>
</div>
{/each}
</div>

<style lang="scss">
.audio-player-container {
    padding: 1rem;
}
.audio-player-container p {
    z-index: 1;
    user-select: none;
    pointer-events: none;
    opacity: 0;
    width: 2rem;
    height: 2rem;
    text-align: center;
    vertical-align: middle;
}
.audio-player-container:hover > p {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
}
.overlap {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
}
.overlap > * {
    grid-row: 1;
    grid-column: 1;
}
.audio-player-container:hover > .hover-enlarge {
    transform: scale(125%);
}

button {
    margin: 1rem;
    border: none;
    background: inherit;
    cursor: pointer;
    outline: none;
    font-size: 1.5rem;
    color: white;
    z-index: 1;
}
div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

img {
    width: 10rem;
    height: 10rem;
}
.hover-enlarge {
    transition: transform 0.5s;
}
</style>