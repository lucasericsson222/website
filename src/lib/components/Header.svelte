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

<style lang="scss">
    @import "src/lib/styles/sizes.scss";
    header {
        margin: 1rem;

        justify-content: center;
        display: flex;
        flex-wrap: wrap;

        /*background: #17181C;*/
        font-size: $menu-text-size;
        letter-spacing: 0.1rem;
        font-weight: 400;
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
