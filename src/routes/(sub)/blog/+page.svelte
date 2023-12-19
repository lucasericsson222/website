<!-- blog/+page.svelte -->

<script>
    export let data;
</script>

<ul>
    {#each data.posts.entries() as [index, post]}
    <li>

        <a class={index == 0 ? "less-top-margin title" : "equal-top-margin title"} href={post.path.replace("posts/", "").replace("\(sub\)/", "")}>
            <h2>
                    {post.meta.title}
            </h2>
        </a>
        <p>
        {(
            new Intl.DateTimeFormat(
                undefined, 
                { 
                    weekday: "long", 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric'
                }
            )
        ).format(new Date(post.meta.date))}
        </p>
    </li>
    {#if index != data.posts.length - 1}
    <hr/>
    {/if}
    {/each}
</ul>

<style lang="scss">
    h2 {
        background-color: #F05D5E;
        padding: 0.25rem;
        align-self: flex-start;
        color: #17181C;
        margin: 0;
    }
    .less-top-margin {
        margin-top: 1rem;
    }
    .equal-top-margin {
        margin-top: 2rem;
    }
    p {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
    h2:hover {
        background-color: #F3A712;
    }
    .center-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1 {
        font-size: 5rem;
        padding: 1rem;
        margin: 1rem;
        color: #F05D5E;
        align-self: center;
    }
    .content {
        display: flex;
        flex-direction: column;
    }
    li {
        list-style-type: none;
    }
    ul {
        padding: 0;
        margin: 0;
    }
    .title {
        display: table;
    }

    a {
        text-decoration: none;  
        // override default a styling
        color: #17181C;
        margin-bottom: 2rem;
    }
    a:hover {
        //override default a:hover styling (in lib)
        color: #17181C;
    }
    .content {
        width: min(100%, 700px);
    }
    hr {
        color: #F05D5E;
        margin-left: -1rem;
        margin-right: -1rem;
    }
</style>
