<script lang="ts">
    import { onMount } from "svelte";

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    let row: number;
    let height: number;

    let world: boolean[][] = [];
    let frame: number;
    const number = 10;
    const dark_color = "rgba(39,41,50, 0.5)";
    const light_color = "rgba(231, 236, 239, 0.85)";

    onMount(
        () => {
            let option_ctx = canvas.getContext("2d");
            if (option_ctx) {
                ctx = option_ctx;
                canvas.width  = window.innerWidth;
                canvas.height = window.innerHeight;
                ctx.fillStyle = dark_color;

                row = Math.ceil(ctx.canvas.width / number)
                height = Math.ceil(ctx.canvas.height / number) 
                
                for(let i = 0; i < row; i++) {
                    world[i] = [];
                    for(let j = 0; j < height; j++) {
                        ctx.fillRect(i*number, j*number, number * 4 / 5, number * 4 / 5);
                        world[i][j] = false;
                    }
                }
            }
            return createLoop(_process);
         }
    );

    function handleMousemove(event: MouseEvent) {
        for(let i = 0; i < row; i++) {
            if (world[i] == null) {
                world[i] = [];
            }
            for(let j = 0; j < height; j++) {
                if (Math.floor((event.x + 2.5)/ number) === i && Math.floor((event.y + 2.5)/ number) === j) {
                    // increase brush width
                    set_world_safe(i-1,j);
                    set_world_safe(i+1,j);
                    set_world_safe(i,j+1);
                    set_world_safe(i,j-1);
                    world[i][j] = true;
                } 
            }
        }
    }
    
    function createLoop (fn: (elapsed: number, delta: number) => void) {
        let elapsed = 0;
        let lastTime = performance.now();
        (function loop() {
             frame = requestAnimationFrame(loop);
             const beginTime = performance.now();
             const dt = (beginTime - lastTime) / 1000;
             lastTime = beginTime;
             elapsed += dt;
             fn(elapsed, dt);
         })();
        return () => {
            cancelAnimationFrame(frame);
        };
    };

    let previous = 0;
    function _process(elapsed: number, delta: number) { 
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
         
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;

        let new_world = copyWorld(world); 
        row = Math.ceil(ctx.canvas.width / number)
        height = Math.ceil(ctx.canvas.height / number) 
        for(let i = 0; i < row; i++) {
            if (world[i] == null) {
                world[i] = [];
            }
            for(let j = 0; j < height; j++) {
                if (world[i][j]) {
                    ctx.fillStyle = light_color;
                } else {
                    ctx.fillStyle = dark_color;
                }
                ctx.fillRect(i*number, j*number, 4/5*number, 4/5*number);
                if (elapsed - previous > 0.4) {
                    applyConway(i, j, new_world);
                }
            }
        }
        world = new_world;
        if (elapsed - previous > 0.4) {
            previous = elapsed;
        }
    }

    function applyConway(i: number, j: number, new_world:boolean[][]) {
        let neighbors = num_neighbors(i, j);
        if (world[i][j]) {
            if (neighbors != 2 && neighbors != 3) {
                new_world[i][j] = false;
            }
        } else {
            if (neighbors == 3) {
                new_world[i][j] = true;
            }
        }
    }

    function copyWorld(world: boolean[][]): boolean[][] {
        let new_world: boolean[][] = [];
        for (let i = 0; i < row; i++) {
            if (typeof new_world[i] === 'undefined') {
                new_world[i] = [];
            }
            for (let j = 0; j < height; j++) {
                new_world[i][j] = world[i][j];
            }
        }
        return new_world;
    }

    function num_neighbors(i: number, j: number): number {
        let num: number = 0;
        for (let check_i = i - 1; check_i <= i + 1; check_i++) {
            for (let check_j = j -1; check_j <= j + 1; check_j++) {
                if (i - check_i == 0 && j - check_j == 0) {
                    continue;
                }
                if (get_world_safe(check_i, check_j)) {
                    num += 1;
                }
            }
        }
        return num;
    }

    function get_world_safe(i: number, j: number): boolean {
        if ( i < 0 || j < 0 || i > row || j > height) {
            return false;
        }
        if (typeof world[i] === 'undefined') {
            world[i] = [];
        }
        if (typeof world[i][j] === 'undefined') {
            world[i][j] = false;
        }
        return world[i][j];
    }

    function set_world_safe(i: number, j: number): boolean{
        if ( i < 0 || j < 0 || i > row || j > height) {
            return false;
        }
        if (typeof world[i] === 'undefined') {
            world[i] = [];
        }
        if (typeof world[i][j] === 'undefined') {
            world[i][j] = false;
        }
        world[i][j] = true;
        return true;
    }
</script>

<svelte:window on:mousemove={handleMousemove}/>

<canvas 
    id="art-background"
    bind:this={canvas}
></canvas>

<style lang="scss"> 
    #art-background {
        left: 0;
        top: 0;
        position: fixed;
        z-index: -1;
        overflow:hidden;
    }
</style>
