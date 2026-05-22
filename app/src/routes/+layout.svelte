<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="gradient-primary @container">
	<div class="text-xs text-white relative z-10">
		{@render children()}
	</div>
</div>
