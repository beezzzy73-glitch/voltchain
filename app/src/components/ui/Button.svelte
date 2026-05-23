<script>
    let { child, formaction = undefined } = $props();
</script>


<button {formaction} class="btn-primary rounded-xl h-12 w-full">{child}</button>