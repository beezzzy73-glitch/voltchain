<script lang="ts">
	import { onMount } from "svelte";

	type Order = {
		price: number;
		amount: number;
		total: number;
	};

	let show = $state(false);

	let symbol = $state("BTC/USDT");
	let price = $state(71200);
	let amount = $state("");
	let type = $state("buy");

	onMount(() => {
		show = true;
	});

	// mock order book (API ready later)
	let buyOrders = $state<Order[]>([
		{ price: 71100, amount: 0.5, total: 35550 },
		{ price: 71050, amount: 1.2, total: 85260 },
		{ price: 70980, amount: 0.8, total: 56784 }
	]);

	let sellOrders = $state<Order[]>([
		{ price: 71250, amount: 0.4, total: 28500 },
		{ price: 71320, amount: 1.1, total: 78452 },
		{ price: 71400, amount: 0.7, total: 50000 }
	]);
</script>

<section class="trade-page" class:show={show}>

	<!-- BACKGROUND -->
	<div class="glow one"></div>
	<div class="glow two"></div>
	<div class="grid-bg"></div>

	{#each Array(20) as _, i (i)}
		<div class="dot" style="--i:{i}"></div>
	{/each}

	<!-- HEADER -->
	<div class="header">
		<p class="tag">LIVE TRADING TERMINAL</p>
		<h1>{symbol}</h1>
		<p>Real-time execution engine UI (frontend only)</p>
	</div>

	<!-- MAIN GRID -->
	<div class="grid">

		<!-- CHART AREA -->
		<div class="panel chart">
			<p class="title">Price Chart</p>
			<div class="chart-box">
				<div class="fake-line"></div>
			</div>
			<p class="price">Current Price: ${price.toLocaleString()}</p>
		</div>

		<!-- ORDER BOOK -->
		<div class="panel orderbook">

			<p class="title">Order Book</p>

			<div class="order-section sell">
				{#each sellOrders as o (o.price)}
					<div class="row red">
						<span>{o.price}</span>
						<span>{o.amount}</span>
						<span>{o.total}</span>
					</div>
				{/each}
			</div>

			<div class="spread">Spread</div>

			<div class="order-section buy">
				{#each buyOrders as o (o.price)}
					<div class="row green">
						<span>{o.price}</span>
						<span>{o.amount}</span>
						<span>{o.total}</span>
					</div>
				{/each}
			</div>

		</div>

		<!-- TRADE PANEL -->
		<div class="panel trade">

			<p class="title">Place Order</p>

			<div class="toggle">
				<button class:active={type === "buy"} onclick={() => (type = "buy")}>Buy</button>
				<button class:active={type === "sell"} onclick={() => (type = "sell")}>Sell</button>
			</div>

			<input type="text" placeholder="Amount (BTC)" bind:value={amount} />

			<div class="info">
				<p>Market Price: ${price.toLocaleString()}</p>
				<p>Estimated: ${(Number(amount || 0) * price).toLocaleString()}</p>
			</div>

			<button class={"action " + type}>
				{type === "buy" ? "Buy BTC" : "Sell BTC"}
			</button>

		</div>

	</div>

</section>

<style>

.trade-page {
	min-height: 100vh;
	background: radial-gradient(circle at 30% 10%, #0b0c1d, #050510 70%);
	color: white;
	padding: 80px 20px;
	position: relative;
	overflow: hidden;

	opacity: 0;
	transform: translateY(20px);
	transition: 0.9s ease;
}

.trade-page.show {
	opacity: 1;
	transform: translateY(0);
}

/* ================= BACKGROUND ================= */

.glow {
	position: absolute;
	width: 700px;
	height: 700px;
	border-radius: 50%;
	filter: blur(200px);
	opacity: 0.15;
}

.glow.one {
	background: #3671e9;
	top: -300px;
	right: -300px;
	animation: floatA 16s ease-in-out infinite;
}

.glow.two {
	background: #7b3fe4;
	bottom: -300px;
	left: -300px;
	animation: floatB 18s ease-in-out infinite;
}

.grid-bg {
	position: absolute;
	inset: 0;
	background-image:
		linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
		linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
	background-size: 80px 80px;
	opacity: 0.2;
	animation: gridMove 25s linear infinite;
}

.dot {
	position: absolute;
	width: 4px;
	height: 4px;
	background: rgba(255,255,255,0.12);
	border-radius: 50%;
	left: calc(var(--i) * 5%);
	top: calc(var(--i) * 4%);
	animation: floatDot 6s ease-in-out infinite;
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
	font-size: 11px;
	letter-spacing: 3px;
	color: #3671e9;
}

h1 {
	font-size: 44px;
	font-weight: 900;
	background: linear-gradient(90deg, #fff, #3671e9, #7b3fe4);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

/* ================= GRID ================= */

.grid {
	margin-top: 60px;
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
	gap: 20px;
	position: relative;
	z-index: 2;
}

/* ================= PANELS ================= */

.panel {
	background: rgba(255,255,255,0.03);
	border: 1px solid rgba(255,255,255,0.06);
	border-radius: 18px;
	padding: 18px;
	backdrop-filter: blur(14px);
	transition: 0.3s ease;
}

.panel:hover {
	transform: translateY(-5px);
	border-color: #3671e9;
}

/* ================= CHART ================= */

.chart-box {
	height: 250px;
	background: linear-gradient(120deg, rgba(54,113,233,0.1), transparent);
	border-radius: 12px;
	position: relative;
	overflow: hidden;
}

.fake-line {
	position: absolute;
	width: 200%;
	height: 2px;
	background: #3671e9;
	top: 50%;
	left: -50%;
	animation: wave 3s linear infinite;
}

/* ================= ORDER BOOK ================= */

.order-section {
	display: flex;
	flex-direction: column;
	gap: 5px;
	font-size: 12px;
}

.row {
	display: flex;
	justify-content: space-between;
	padding: 6px;
	border-radius: 8px;
	background: rgba(255,255,255,0.02);
}

.red {
	color: #ff4d4d;
}

.green {
	color: #2ecc71;
}

.spread {
	text-align: center;
	margin: 10px 0;
	opacity: 0.6;
}

/* ================= TRADE PANEL ================= */

.trade input {
	width: 100%;
	padding: 10px;
	margin-top: 10px;
	border-radius: 10px;
	border: 1px solid rgba(255,255,255,0.08);
	background: transparent;
	color: white;
}

.toggle {
	display: flex;
	gap: 10px;
	margin-bottom: 10px;
}

.toggle button {
	flex: 1;
	padding: 8px;
	border-radius: 10px;
	border: none;
	cursor: pointer;
	background: rgba(255,255,255,0.05);
	color: white;
}

.toggle button.active {
	background: #3671e9;
}

.action {
	margin-top: 15px;
	width: 100%;
	padding: 10px;
	border-radius: 10px;
	border: none;
	cursor: pointer;
}

.action.buy {
	background: #2ecc71;
}

.action.sell {
	background: #ff4d4d;
}

/* ================= ANIMATIONS ================= */

@keyframes floatA {
	0%,100% { transform: translate(0,0); }
	50% { transform: translate(60px,-40px); }
}

@keyframes floatB {
	0%,100% { transform: translate(0,0); }
	50% { transform: translate(-60px,50px); }
}

@keyframes gridMove {
	from { transform: translateY(0); }
	to { transform: translateY(80px); }
}

@keyframes floatDot {
	0%,100% { transform: translateY(0); }
	50% { transform: translateY(-10px); }
}

@keyframes wave {
	from { transform: translateX(0); }
	to { transform: translateX(50%); }
}

</style>