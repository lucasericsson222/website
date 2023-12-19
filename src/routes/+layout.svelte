<!-- +layout.svelte -->
<script lang=ts>
    import '$lib/styles/style.scss';
    import { fade } from "svelte/transition";
    import { expoInOut } from "svelte/easing";
  import Footer from '$lib/components/Footer.svelte';
    export let data;
    $: console.log(data);
    let is_home_page: Boolean = true;
    $: is_home_page = data.pathname == "/"; 
    let myswitch = true;
    $: myswitch = is_home_page ? !myswitch : !myswitch; 
    function widen(node: HTMLElement, params?: any) {
		return {
			delay: params.delay || 0,
			duration: params.duration,
			easing: params.easing,
			css: (t: number, u: number) => `width: ${params.opposite ? (1-t)*50+50 : t*50+50}%;`
		};
	}
</script>

{#key is_home_page}
<div
    class="anim"
    out:widen={{easing: expoInOut, duration: 1000, opposite: !is_home_page}}
    style="width: {is_home_page ? 50 : 100}%"
>
<div 
>
    <slot />
</div>
</div>
{/key}

<style lang="scss"> 
@import "src/lib/styles/colors.scss";
    .anim {
        background-color: $background-color;
    }
    div {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>
