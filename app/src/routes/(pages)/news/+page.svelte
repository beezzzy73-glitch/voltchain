<script lang="ts">
	import { onMount } from "svelte";

	type News = {
		id: number;
		title: string;
		desc: string;
		tag: string;
		time: string;
		source: string;
	};

	let show = $state(false);
	let activeFilter = $state("all");

	onMount(() => {
		show = true;
	});

	// API READY STRUCTURE (replace later with fetch)
	let news: News[] = $state([
		{
			id: 1,
			title: "Bitcoin breaks key resistance as bulls regain control",
			desc: "BTC shows strong momentum after weeks of consolidation in the market.",
			tag: "Bitcoin",
			time: "5m ago",
			source: "CryptoDesk"
		},
		{
			id: 2,
			title: "Ethereum staking inflows surge across global exchanges",
			desc: "More users lock ETH as staking rewards remain attractive.",
			tag: "Ethereum",
			time: "12m ago",
			source: "ChainWire"
		},
		{
			id: 3,
			title: "DeFi ecosystem TVL climbs back above $90B",
			desc: "Liquidity returns to decentralized protocols after market recovery.",
			tag: "DeFi",
			time: "25m ago",
			source: "DefiPulse"
		},
		{
			id: 4,
			title: "Regulators tighten crypto compliance in Europe",
			desc: "New framework aims to improve transparency across exchanges.",
			tag: "Regulation",
			time: "40m ago",
			source: "CoinReg News"
		},
		{
			id: 5,
			title: "Altcoins rally as Bitcoin dominance drops",
			desc: "Mid-cap tokens outperform BTC in short-term market rotation.",
			tag: "Altcoins",
			time: "1h ago",
			source: "MarketWatch Crypto"
		},
		{
			id: 6,
			title: "Stablecoin market cap reaches new yearly high",
			desc: "USDT and USDC dominance increases across trading pairs.",
			tag: "Stablecoins",
			time: "2h ago",
			source: "StableWatch"
		},
		{
			id: 7,
			title: "Layer 2 networks reduce Ethereum gas fees by 80%",
			desc: "Arbitrum and Optimism lead scaling efficiency improvements.",
			tag: "Ethereum",
			time: "3h ago",
			source: "L2 Analytics"
		},
		{
			id: 8,
			title: "Crypto adoption grows in emerging markets",
			desc: "Africa and Asia show fastest wallet growth rates globally.",
			tag: "Adoption",
			time: "5h ago",
			source: "GlobalCrypto Report"
		},
		{
			id: 9,
			title: "NFT trading volume stabilizes after long decline",
			desc: "Blue-chip collections maintain steady buyer activity.",
			tag: "NFT",
			time: "7h ago",
			source: "NFT Stats"
		}
	]);

	// filter logic (UI only, API later)
	function filterNews(tag: string) {
		activeFilter = tag;
	}
</script>

<section class="news-page" class:show={show}>

	<!-- BACKGROUND SYSTEM -->
	<div class="glow one"></div>
	<div class="glow two"></div>
	<div class="grid-bg"></div>

	{#each Array(20) as _, i (i)}
		<div class="dot" style="--i:{i}"></div>
	{/each}

	<!-- HEADER -->
	<div class="header">
		<p class="tag">LIVE CRYPTO INTELLIGENCE</p>
		<h1>Market News Terminal</h1>
		<p>Real-time blockchain updates, trends, and market signals.</p>
	</div>

	<!-- FILTERS -->
	<div class="filters">
		<button class="chip" onclick={() => filterNews("all")}>All</button>
		<button class="chip" onclick={() => filterNews("Bitcoin")}>Bitcoin</button>
		<button class="chip" onclick={() => filterNews("Ethereum")}>Ethereum</button>
		<button class="chip" onclick={() => filterNews("DeFi")}>DeFi</button>
		<button class="chip" onclick={() => filterNews("Regulation")}>Regulation</button>
		<button class="chip" onclick={() => filterNews("Altcoins")}>Altcoins</button>
	</div>

	<!-- GRID -->
	<div class="grid">

		{#each news.filter(n => activeFilter === "all" ? true : n.tag === activeFilter) as item (item.id)}

			<article class="card">

				<div class="top">
					<span class="tag-badge">{item.tag}</span>
					<span class="time">{item.time}</span>
				</div>

				<h2 class="title">{item.title}</h2>
				<p class="desc">{item.desc}</p>

				<div class="meta">
					<span>{item.source}</span>
				</div>

				<div class="bottom">
					<span>Read full analysis →</span>
				</div>

			</article>

		{/each}

	</div>

</section>

<style>

.news-page {
	min-height: 100vh;
	background: radial-gradient(circle at 20% 10%, #0b0c1d, #050510 70%);
	color: white;
	padding: 80px 20px;
	position: relative;
	overflow: hidden;
	opacity: 0;
	transform: translateY(20px);
	transition: 0.9s ease;
}

.news-page.show {
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
	opacity: 0.18;
}

.glow.one {
	background: #3671e9;
	top: -300px;
	right: -300px;
	animation: floatA 15s ease-in-out infinite;
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

/* ================= FILTERS ================= */

.filters {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 10px;
	margin-top: 30px;
	z-index: 2;
	position: relative;
}

.chip {
	padding: 8px 14px;
	border-radius: 999px;
	border: 1px solid rgba(255,255,255,0.08);
	background: rgba(255,255,255,0.03);
	cursor: pointer;
	transition: 0.3s ease;
	font-size: 12px;
}

.chip:hover {
	transform: translateY(-2px);
	border-color: #3671e9;
	background: rgba(54,113,233,0.15);
}

/* ================= GRID ================= */

.grid {
	margin-top: 60px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 20px;
	position: relative;
	z-index: 2;
}

/* ================= CARD ================= */

.card {
	background: rgba(255,255,255,0.03);
	border: 1px solid rgba(255,255,255,0.06);
	border-radius: 18px;
	padding: 18px;
	backdrop-filter: blur(16px);
	transition: 0.35s ease;
	position: relative;
	overflow: hidden;
}

.card:hover {
	transform: translateY(-10px) scale(1.02);
	border-color: #3671e9;
	box-shadow: 0 25px 60px rgba(0,0,0,0.4);
}

.card::before {
	content: "";
	position: absolute;
	inset: 0;
	background: linear-gradient(120deg, transparent, rgba(255,255,255,0.06), transparent);
	transform: translateX(-120%);
	transition: 0.7s ease;
}

.card:hover::before {
	transform: translateX(120%);
}

/* TEXT */

.top {
	display: flex;
	justify-content: space-between;
	font-size: 11px;
	opacity: 0.7;
}

.tag-badge {
	color: #3671e9;
	font-weight: bold;
}

.title {
	font-size: 15px;
	font-weight: bold;
	margin-top: 10px;
}

.desc {
	font-size: 13px;
	opacity: 0.7;
	margin-top: 8px;
}

.meta {
	margin-top: 10px;
	font-size: 11px;
	opacity: 0.5;
}

.bottom {
	margin-top: 14px;
	font-size: 12px;
	color: #3671e9;
	cursor: pointer;
}

/* ================= ANIMATIONS ================= */

@keyframes floatA {
	0%,100% { transform: translate(0,0); }
	50% { transform: translate(70px,-50px); }
}

@keyframes floatB {
	0%,100% { transform: translate(0,0); }
	50% { transform: translate(-70px,60px); }
}

@keyframes gridMove {
	from { transform: translateY(0); }
	to { transform: translateY(80px); }
}

@keyframes floatDot {
	0%,100% { transform: translateY(0); }
	50% { transform: translateY(-12px); }
}

</style>