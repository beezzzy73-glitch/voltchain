<script>
	import SideBar from '../../components/SideBar.svelte';

	let { children } = $props();
</script>

<div class="flex min-h-screen w-full bg-base text-white">

	<!-- SIDEBAR -->
	<SideBar />

	<!-- MAIN -->
	<main class="flex-1 min-w-0 w-full p-6 overflow-x-hidden">
		{@render children()}
	</main>

</div>