<script lang="ts">
	import ButtonLink from "./ui/ButtonLink.svelte";
</script>

<!-- ================= MARKET TICKER ================= -->
<div class="market-ticker">
	<div class="ticker-track">

		<!-- SET 1 -->
		<span class="up">BTC $67,420 ▲2.4%</span>
		<span class="up">ETH $3,510 ▲1.1%</span>
		<span class="down">SOL $142 ▼0.8%</span>
		<span class="up">BNB $580 ▲0.6%</span>
		<span class="down">XRP $0.62 ▼0.3%</span>
		<span class="up">ADA $0.48 ▲1.2%</span>
		<span class="up">DOGE $0.15 ▲0.9%</span>
		<span class="down">AVAX $38.2 ▼1.4%</span>
		<span class="up">MATIC $0.92 ▲2.1%</span>
		<span class="down">LINK $14.8 ▼0.6%</span>

		<!-- SET 2 (duplicate for seamless loop) -->
		<span class="up">BTC $67,420 ▲2.4%</span>
		<span class="up">ETH $3,510 ▲1.1%</span>
		<span class="down">SOL $142 ▼0.8%</span>
		<span class="up">BNB $580 ▲0.6%</span>
		<span class="down">XRP $0.62 ▼0.3%</span>
		<span class="up">ADA $0.48 ▲1.2%</span>
		<span class="up">DOGE $0.15 ▲0.9%</span>
		<span class="down">AVAX $38.2 ▼1.4%</span>
		<span class="up">MATIC $0.92 ▲2.1%</span>
		<span class="down">LINK $14.8 ▼0.6%</span>

	</div>
</div>

<!-- ================= HEADER ================= -->
<header class="crypto-header">

	<nav class="nav">

		<!-- LOGO -->
		<div class="logo">
			<p>Crypto</p>
			<span class="live-dot"></span>
		</div>

		<!-- LINKS -->
		<div class="links hidden @3xl:flex">

			<a class="nav-item" href="home">Home</a>
			<a class="nav-item" href="about">About</a>
			<a class="nav-item" href="contact">Contact</a>
			<a class="nav-item" href="features">Features</a>
			<a class="nav-item" href="services">Services</a>

			<div class="divider">|</div>

			<ButtonLink href="wallet" children="Connect Wallet" />

		</div>

	</nav>

</header>

<style>

/* ================= HEADER ================= */

.crypto-header {
	position: sticky;
	top: 0;
	z-index: 50;
	background: rgba(13, 13, 43, 0.85);
	backdrop-filter: blur(14px);
	border-bottom: 1px solid rgba(255,255,255,0.05);
}

/* ================= NAV ================= */

.nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 18px 20px;
}

/* ================= LOGO ================= */

.logo {
	display: flex;
	align-items: center;
	gap: 8px;
	font-weight: bold;
	color: white;
}

.live-dot {
	width: 7px;
	height: 7px;
	border-radius: 50%;
	background: #00ff9d;
	box-shadow: 0 0 10px #00ff9d;
	animation: pulse 2s infinite;
}

/* ================= LINKS ================= */

.links {
	display: flex;
	align-items: center;
	gap: 22px;
}

.nav-item {
	position: relative;
	padding: 6px 2px;
	opacity: 0.85;
	transition: 0.2s ease;
	color: white;
}

.nav-item:hover {
	opacity: 1;
	color: var(--color-primary);
	transform: translateY(-1px);
}

.nav-item::after {
	content: "";
	position: absolute;
	left: 0;
	bottom: -4px;
	width: 0%;
	height: 2px;
	background: var(--color-primary);
	transition: 0.25s ease;
}

.nav-item:hover::after {
	width: 100%;
}

.divider {
	opacity: 0.3;
	margin: 0 6px;
	color: white;
}

/* ================= MARKET TICKER ================= */

.market-ticker {
	background: #0b0b22;
	font-size: 12px;
	padding: 8px 0;
	overflow: hidden;
	border-bottom: 1px solid rgba(255,255,255,0.04);
}

.ticker-track {
	display: flex;
	gap: 45px;
	white-space: nowrap;
	animation: scroll 28s linear infinite;
	opacity: 0.85;
}

/* colors */
.up { color: #00ff9d; }
.down { color: #ff4d4d; }

/* ================= ANIMATIONS ================= */

@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(-50%); }
}

@keyframes pulse {
	0% { transform: scale(1); opacity: 1; }
	50% { transform: scale(1.5); opacity: 0.6; }
	100% { transform: scale(1); opacity: 1; }
}

</style>