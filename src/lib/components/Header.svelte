<!-- Header.svelte -->
<header>
    <nav>
        <ul>
            <li>
                <a href="/">home</a>
            </li>
            <li>
                <a href="/blog">blog</a>
            </li>
            <li>
                <a href="/blog/about">music</a>
            </li>
        </ul> 
    </nav>
</header>

<style>
    header {
        padding: 1rem;

        justify-content: center;
        display: flex;
        flex-wrap: wrap;

        letter-spacing: 0.1rem;
        /*background: #17181C;*/
        font-size: 1.25rem;
    }

    ul {
        margin: 0;
        list-style-type: none;
        display: flex;
        padding: 0;
        gap: 4rem;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
</style>
