<script lang="ts">
	import { onMount } from "svelte";

	type State = "idle" | "loading";

	let show = $state(false);
	let state = $state<State>("idle");

	let from = $state("USD");
	let to = $state("EUR");

	onMount(() => {
		show = true;
	});
</script>

<section class="forex-page" class:show={show}>

	<!-- BACKGROUND LAYERS -->
	<div class="glow one"></div>
	<div class="glow two"></div>
	<div class="grid-bg"></div>

	{#each Array(25) as _, i (i)}
		<div class="dot" style="--i:{i}"></div>
	{/each}

	<!-- HEADER -->
	<div class="header">
		<p class="tag">FOREX TRADING DESK</p>
		<h1>Global Currency Exchange</h1>
		<p>Trade forex pairs with real-time style UI, fast execution visuals, and market insights.</p>
	</div>

	<!-- MAIN GRID -->
	<div class="grid">

		<!-- LEFT PANEL -->
		<div class="panel left">

			<p class="title">Market Pairs</p>

			<div class="pair-list">
				<div class="pair active" onclick={() => (from = "USD", to = "EUR")}>
					<p>USD / EUR</p>
					<span>+0.12%</span>
				</div>

				<div class="pair" onclick={() => (from = "GBP", to = "USD")}>
					<p>GBP / USD</p>
					<span>-0.08%</span>
				</div>

				<div class="pair" onclick={() => (from = "JPY", to = "USD")}>
					<p>JPY / USD</p>
					<span>+0.22%</span>
				</div>

				<div class="pair" onclick={() => (from = "EUR", to = "GBP")}>
					<p>EUR / GBP</p>
					<span>+0.05%</span>
				</div>
			</div>

			<div class="mini-chart"></div>
		</div>

		<!-- RIGHT PANEL -->
		<div class="panel right">

			<p class="title">Currency Converter</p>

			<div class="converter">

				<div class="box">
					<p>From</p>
					<input type="text" value={from} />
				</div>

				<div class="swap">⇅</div>

				<div class="box">
					<p>To</p>
					<input type="text" value={to} />
				</div>

			</div>

			<button class="trade-btn" onclick={() => (state = "loading")}>
				{state === "loading" ? "Processing..." : "Execute Trade"}
			</button>

			<div class="stats">
				<div>
					<p>Spread</p>
					<span>0.02%</span>
				</div>

				<div>
					<p>Fee</p>
					<span>0.1%</span>
				</div>

				<div>
					<p>Execution</p>
					<span>Instant UI</span>
				</div>
			</div>

		</div>

	</div>

</section>

<style>

.forex-page {
	min-height: 100vh;
	background: var(--color-base);
	color: white;
	padding: 80px 20px;
	position: relative;
	overflow: hidden;
	opacity: 0;
	transform: translateY(20px);
	transition: 0.8s ease;
}

.forex-page.show {
	opacity: 1;
	transform: translateY(0);
}

/* ================= BACKGROUND ================= */

.glow {
	position: absolute;
	width: 500px;
	height: 500px;
	border-radius: 50%;
	filter: blur(160px);
	opacity: 0.18;
}

.glow.one {
	background: var(--color-primary);
	top: -200px;
	right: -200px;
}

.glow.two {
	background: var(--color-purple);
	bottom: -200px;
	left: -200px;
}

.grid-bg {
	position: absolute;
	inset: 0;
	background-image:
		linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
		linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
	background-size: 70px 70px;
	opacity: 0.25;
}

.dot {
	position: absolute;
	width: 4px;
	height: 4px;
	background: rgba(255,255,255,0.12);
	border-radius: 50%;
	left: calc((var(--i) * 7)%100%);
	top: calc((var(--i) * 5)%100%);
	animation: float 6s infinite ease-in-out;
}

/* ================= HEADER ================= */

.header {
	text-align: center;
	max-width: 700px;
	margin: auto;
	position: relative;
	z-index: 2;
}

.tag {
	color: var(--color-primary);
	font-size: 12px;
	letter-spacing: 2px;
}

h1 {
	font-size: 36px;
	margin-top: 10px;
}

.header p {
	opacity: 0.7;
	margin-top: 8px;
}

/* ================= GRID ================= */

.grid {
	margin-top: 60px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	gap: 20px;
	position: relative;
	z-index: 2;
}

/* ================= PANEL ================= */

.panel {
	background: rgba(255,255,255,0.03);
	border: 1px solid rgba(255,255,255,0.06);
	border-radius: 18px;
	padding: 25px;
	backdrop-filter: blur(12px);
	transition: 0.3s ease;
}

.panel:hover {
	transform: translateY(-6px);
	border-color: var(--color-primary);
}

/* ================= LEFT ================= */

.pair-list {
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-top: 15px;
}

.pair {
	display: flex;
	justify-content: space-between;
	padding: 12px;
	border-radius: 12px;
	cursor: pointer;
	border: 1px solid rgba(255,255,255,0.05);
	transition: 0.3s ease;
}

.pair:hover {
	transform: translateX(5px);
	border-color: var(--color-primary);
}

.pair.active {
	background: rgba(54,113,233,0.15);
	border-color: var(--color-primary);
}

.mini-chart {
	height: 120px;
	margin-top: 20px;
	border-radius: 12px;
	background: linear-gradient(90deg, rgba(54,113,233,0.2), transparent);
	animation: pulse 3s infinite;
}

/* ================= RIGHT ================= */

.converter {
	display: flex;
	align-items: center;
	gap: 10px;
	margin-top: 15px;
}

.box {
	flex: 1;
}

.box input {
	width: 100%;
	padding: 12px;
	border-radius: 12px;
	background: rgba(0,0,0,0.2);
	border: 1px solid rgba(255,255,255,0.08);
	color: white;
	transition: 0.3s ease;
}

.box input:focus {
	outline: none;
	border-color: var(--color-primary);
	box-shadow: 0 0 15px rgba(54,113,233,0.3);
}

.swap {
	font-size: 20px;
	animation: rotate 6s linear infinite;
}

.trade-btn {
	width: 100%;
	margin-top: 15px;
	padding: 12px;
	border-radius: 12px;
	background: var(--color-primary);
	border: none;
	color: white;
	cursor: pointer;
	transition: 0.3s ease;
}

.trade-btn:hover {
	transform: translateY(-3px);
	box-shadow: 0 10px 25px rgba(54,113,233,0.3);
}

.stats {
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
	font-size: 12px;
	opacity: 0.8;
}

/* ================= ANIMATIONS ================= */

@keyframes float {
	0% { transform: translateY(0); }
	50% { transform: translateY(-12px); }
	100% { transform: translateY(0); }
}

@keyframes pulse {
	0%,100% { opacity: 0.4; }
	50% { opacity: 0.8; }
}

@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}

</style>