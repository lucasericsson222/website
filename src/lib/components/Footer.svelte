<!-- Footer.svelte -->
<script lang="ts">
    import github_logo_png from "$lib/assets/github_logo.png";    
    import linkedin_logo_png from "$lib/assets/linked_in_logo.png";
    import github_logo_hover_png from "$lib/assets/github_logo_hover.png";    
    import linkedin_logo_hover_png from "$lib/assets/linked_in_logo_hover.png";
</script>

<footer>
    <hr/>
    <a href="https://github.com/lucasericsson222">
    <img 
        src={github_logo_png} 
        alt="github logo and link"
        class="logo"
    />
    <img 
        src={github_logo_hover_png} 
        alt="github logo and link"
        class="logo"
    />
    </a>
    <a href="https://www.linkedin.com/in/lucas-ericsson/">
    <img 
        src={linkedin_logo_png} 
        alt="linked_in logo and link"
        class="logo"
    />
    <img 
        src={linkedin_logo_hover_png} 
        alt="linked_in logo and link"
        class="logo"
    />
    </a>
</footer>

<style lang="scss">
    hr {
        border-top: 1px solid #F05D5E;
        border-bottom: none;
    }
    .logo {
        width: 2rem;
    }
    a {
        text-decoration: none;
    }
    a img:last-child {
        display: none;
    }
    a:hover img:last-child {
        display: inline;
    }
    a:hover img:first-child {
        display: none;
    }
</style>
