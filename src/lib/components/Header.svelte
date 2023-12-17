<!-- Header.svelte -->
<header>
    <a href="/">HOME</a>
    <nav>
        <ul>
            <li>
                <a href="/moodles">MOODLES</a>
            </li>
            <li>
                <a href="/blog">BLOG</a>
            </li>
            <li>
                <a href="/blog/about">ABOUT</a>
            </li>
            <li>
                <a href="/contact">CONTACT</a>
            </li>
        </ul> 
    </nav>
</header>

<style>
    header {
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        letter-spacing: 0.1rem;
        justify-content: space-between;
        /*background: #17181C;*/
        font-size: 1.5rem;
        color: #F05D5E;
    }

    ul {
        margin: 0;
        list-style-type: none;
        display: flex;
        gap: 1rem;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
</style>
