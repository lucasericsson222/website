<!-- +layout.svelte -->
<script lang=ts>
    import '$lib/styles/style.scss';
    import { expoInOut } from "svelte/easing";
    import {fade} from "svelte/transition";
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import GameOfLife from '$lib/components/GameOfLife.svelte';
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
			css: (t: number, u: number) => 
            `
            width: ${params.opposite ? (1-t)*50+50 : t*50+50}%;
            `
		};
	}
    function hide_till_reveal(node: HTMLElement, params?: any) {
		return {
			delay: params.delay || 0,
			duration: params.duration,
			easing: params.easing,
			css: (t: number, u: number) => {
                return `
                background-color: ${t==1 ? "$background-color" : "rgba(0,0,0,0)"};
                `;
            }
		};
    }
    function header_hide(node: HTMLElement, params?: any) {
		return {
			delay: params.delay || 0,
			duration: params.duration,
			easing: params.easing,
			css: (t: number, u: number) => {
                return `
                opacity: ${t==1? 1: 0};
                `;
            }
        };
    }
    let speed = 700;
</script>

<GameOfLife />
<div class="transition-container">
{#key is_home_page}
<div
    class="anim"
    out:widen={{easing: expoInOut, duration: speed, opposite: !is_home_page}}
    in:hide_till_reveal={{easing: expoInOut, duration: speed, opposite: !is_home_page}}
    style="width: {is_home_page ? 50 : 100}%"
>

    <div class="center-container">
        <div class="container">
            <div
                in:header_hide={{easing: expoInOut, duration: speed}}
            >
            <Header/>
            </div>

            <div
                in:fade={{easing: expoInOut, duration: speed / 3 * 2, delay: speed/2}}
                out:fade={{easing: expoInOut, duration: speed / 3 * 2}}
            > 
                <main>
                    <slot />
                </main>
            </div>

        </div>
    </div>

    <Footer/>
</div>
{/key}
</div>

<style lang="scss"> 
@import "src/lib/styles/colors.scss";
    .transition-container {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
    }
    .transition-container > * {
        grid-row: 1;
        grid-column: 1;
    }
    .center-container {
        flex: 1;
    }
    .anim {
        background-color: $background-color;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>
