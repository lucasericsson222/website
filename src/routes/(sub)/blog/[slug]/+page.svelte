<!-- src/routes/[slug]/+page.svelte -->
<script>
    export let data;
</script>

<div class="center-container">
    <article class="center-container">
        <div class="container">

            <h2 class="date">{data.title}</h2>
            <h3>{(
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
            </h3>
            <svelte:component this={data.content} />
        </div>
    </article>
</div>
<style lang="scss">
    .date {
        background-color: #F05D5E;
        padding: 0.25rem;
        align-self: flex-start;
        color: #17181C;
    }
    h2 {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
</style>
