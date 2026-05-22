<section class="trade-header relative overflow-hidden rounded-2xl">

	<!-- BACKGROUND -->
	<div class="glow one"></div>
	<div class="glow two"></div>
	<div class="grid"></div>

	<!-- TOP BAR -->
	<div class="top">

		<div class="pair">
			<p class="label">TRADING PAIR</p>
			<h2 class="title">BTC / USDT</h2>
		</div>

		<div class="status">
			<span class="dot"></span>
			<span class="text">LIVE MARKET</span>
		</div>

	</div>

	<!-- PRICE SECTION -->
	<div class="price">

		<h1 class="value">$68,420.12</h1>
		<p class="change up">+2.34% (24h)</p>

	</div>

	<!-- STATS GRID -->
	<div class="stats">

		<div class="card">
			<p class="k">24h High</p>
			<p class="v">$69,800</p>
		</div>

		<div class="card">
			<p class="k">24h Low</p>
			<p class="v">$65,120</p>
		</div>

		<div class="card">
			<p class="k">Volume</p>
			<p class="v">32.4B</p>
		</div>

		<div class="card">
			<p class="k">Market Cap</p>
			<p class="v">$1.3T</p>
		</div>

	</div>

</section>

<style>

/* ================= BASE ================= */

.trade-header {
	padding: 20px;
	background: rgba(255,255,255,0.02);
	border: 1px solid rgba(255,255,255,0.04);
}

/* ================= BACKGROUND ================= */

.glow {
	position: absolute;
	width: 500px;
	height: 500px;
	border-radius: 50%;
	filter: blur(140px);
	opacity: 0.12;
}

.glow.one {
	background: var(--color-primary);
	top: -220px;
	right: -220px;
}

.glow.two {
	background: var(--color-purple);
	bottom: -220px;
	left: -220px;
}

.grid {
	position: absolute;
	inset: 0;
	background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px);
	background-size: 60px 60px;
	opacity: 0.15;
}

/* ================= TOP ================= */

.top {
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	z-index: 2;
}

.label {
	font-size: 10px;
	color: var(--color-gray);
	letter-spacing: 2px;
}

.title {
	font-size: 18px;
	color: white;
	font-weight: 600;
}

.status {
	display: flex;
	align-items: center;
	gap: 8px;
}

.dot {
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: #22c55e;
	box-shadow: 0 0 12px rgba(34,197,94,0.6);
	animation: pulse 1.4s infinite;
}

.text {
	font-size: 10px;
	color: #22c55e;
	letter-spacing: 1px;
}

/* ================= PRICE ================= */

.price {
	margin-top: 18px;
	position: relative;
	z-index: 2;
}

.value {
	font-size: 34px;
	font-weight: 600;
	color: white;
}

.change {
	font-size: 12px;
	margin-top: 4px;
}

.change.up {
	color: #22c55e;
}

/* ================= STATS ================= */

.stats {
	margin-top: 18px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 10px;
	position: relative;
	z-index: 2;
}

.card {
	padding: 12px;
	border-radius: 12px;
	background: rgba(255,255,255,0.02);
	border: 1px solid rgba(255,255,255,0.04);
	transition: 0.25s ease;
}

.card:hover {
	transform: translateY(-4px);
	border-color: var(--color-primary);
}

.k {
	font-size: 10px;
	color: var(--color-gray);
}

.v {
	font-size: 13px;
	color: white;
	font-weight: 600;
	margin-top: 4px;
}

/* ================= RESPONSIVE ================= */

@media (max-width: 768px) {

	.top {
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
	}

	.stats {
		grid-template-columns: repeat(2, 1fr);
	}

	.value {
		font-size: 26px;
	}
}

/* ================= ANIMATION ================= */

@keyframes pulse {
	0% { transform: scale(1); opacity: 1; }
	50% { transform: scale(1.4); opacity: 0.5; }
	100% { transform: scale(1); opacity: 1; }
}

</style>