<script>
    let { href, children = 'Learn more' }  = $props();
</script>


<a {href} class="px-7 py-3 btn-primary rounded-xl w-fit">{children}</a>