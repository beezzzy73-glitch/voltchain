<script lang="ts">
	import { onMount } from "svelte";

	type Coin = {
		id: number;
		name: string;
		symbol: string;
		price: number;
		change: number;
		volume: string;
		marketCap: string;
	};

	let show = $state(false);
	let search = $state("");

	onMount(() => {
		show = true;
	});

	// API READY MOCK DATA (replace later with fetch)
	let coins = $state<Coin[]>([
		{ id: 1, name: "Bitcoin", symbol: "BTC", price: 71200, change: 2.4, volume: "38B", marketCap: "1.4T" },
		{ id: 2, name: "Ethereum", symbol: "ETH", price: 3890, change: -1.2, volume: "19B", marketCap: "470B" },
		{ id: 3, name: "Solana", symbol: "SOL", price: 168, change: 4.8, volume: "5.2B", marketCap: "72B" },
		{ id: 4, name: "BNB", symbol: "BNB", price: 610, change: 0.6, volume: "2.1B", marketCap: "94B" },
		{ id: 5, name: "XRP", symbol: "XRP", price: 0.62, change: -0.8, volume: "3.4B", marketCap: "34B" },
		{ id: 6, name: "Cardano", symbol: "ADA", price: 0.58, change: 1.9, volume: "1.2B", marketCap: "20B" },
		{ id: 7, name: "Dogecoin", symbol: "DOGE", price: 0.18, change: 3.1, volume: "1.9B", marketCap: "26B" },
		{ id: 8, name: "Avalanche", symbol: "AVAX", price: 42.3, change: -0.4, volume: "900M", marketCap: "15B" }
	]);

	function formatPrice(p: number) {
		return p.toLocaleString();
	}
</script>

<section class="market-page" class:show={show}>

	<!-- BACKGROUND SYSTEM -->
	<div class="glow one"></div>
	<div class="glow two"></div>
	<div class="grid-bg"></div>

	{#each Array(20) as _, i (i)}
		<div class="dot" style="--i:{i}"></div>
	{/each}

	<!-- HEADER -->
	<div class="header">
		<p class="tag">GLOBAL MARKET TERMINAL</p>
		<h1>Live Crypto Market Data</h1>
		<p>Real-time price tracking, volume, and market capitalization.</p>
	</div>

	<!-- SEARCH BAR -->
	<div class="search-box">
		<input type="text" placeholder="Search coin (BTC, ETH...)" bind:value={search} />
	</div>

	<!-- MARKET TABLE -->
	<div class="table">

		<div class="row head">
			<span>Asset</span>
			<span>Price</span>
			<span>24h %</span>
			<span>Volume</span>
			<span>Market Cap</span>
		</div>

		{#each coins.filter(c => c.name.toLowerCase().includes(search.toLowerCase())) as coin (coin.id)}

			<div class="row">

				<div class="asset">
					<div class="logo">{coin.symbol}</div>
					<div>
						<p class="name">{coin.name}</p>
						<p class="symbol">{coin.symbol}</p>
					</div>
				</div>

				<p class="price">${formatPrice(coin.price)}</p>

				<p class:green={coin.change > 0} class:red={coin.change < 0}>
					{coin.change > 0 ? "+" : ""}{coin.change}%
				</p>

				<p>{coin.volume}</p>

				<p>{coin.marketCap}</p>

			</div>

		{/each}

	</div>

</section>

<style>

.market-page {
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

.market-page.show {
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
	top: -280px;
	right: -280px;
	animation: floatA 16s ease-in-out infinite;
}

.glow.two {
	background: #7b3fe4;
	bottom: -280px;
	left: -280px;
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

/* ================= SEARCH ================= */

.search-box {
	margin-top: 30px;
	display: flex;
	justify-content: center;
}

.search-box input {
	width: 320px;
	padding: 12px;
	border-radius: 12px;
	border: 1px solid rgba(255,255,255,0.08);
	background: rgba(255,255,255,0.03);
	color: white;
	transition: 0.3s ease;
}

.search-box input:focus {
	outline: none;
	border-color: #3671e9;
	box-shadow: 0 0 20px rgba(54,113,233,0.25);
}

/* ================= TABLE ================= */

.table {
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	position: relative;
	z-index: 2;
}

.row {
	display: grid;
	grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
	gap: 10px;
	padding: 14px;
	border-radius: 12px;
	background: rgba(255,255,255,0.03);
	border: 1px solid rgba(255,255,255,0.06);
	transition: 0.3s ease;
	align-items: center;
}

.row:hover {
	transform: scale(1.01);
	border-color: #3671e9;
}

.head {
	font-weight: bold;
	background: rgba(255,255,255,0.05);
}

/* ================= ASSET ================= */

.asset {
	display: flex;
	align-items: center;
	gap: 10px;
}

.logo {
	width: 36px;
	height: 36px;
	border-radius: 50%;
	background: rgba(54,113,233,0.2);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 12px;
	font-weight: bold;
}

/* ================= COLORS ================= */

.green {
	color: #2ecc71;
}

.red {
	color: #ff4d4d;
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

</style>