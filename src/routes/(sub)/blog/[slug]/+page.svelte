<!-- src/routes/[slug]/+page.svelte -->
<script>
    export let data;
</script>

<div class="center-container">
    <article class="center-container">
        <h1>{data.title}</h1>
        <div class="container">
            <h2 class="date">{(
                    new Intl.DateTimeFormat(
                        undefined, 
                        { 
                            weekday: "long", 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric'
                        }
                    )
                ).format(new Date(data.date))}
            </h2>
            <svelte:component this={data.content} />
        </div>
    </article>
</div>
<style lang="scss">
    h1 {
        font-size: 5rem;
        padding: 1rem;
        margin: 1rem;
        color: #F05D5E;
    }
    .date {
        background-color: #F05D5E;
        padding: 0.25rem;
        align-self: flex-start;
        color: #17181C;
    }
     
    .center-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .container {

        width: min(100vw, 700px);
        display: flex;
        flex-direction: column;
    }
</style>
