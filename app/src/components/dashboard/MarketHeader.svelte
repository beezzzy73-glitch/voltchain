<section class="market-header relative overflow-hidden rounded-[2rem]">

	<!-- ================= BACKGROUND ================= -->
	<div class="orb orb-one"></div>
	<div class="orb orb-two"></div>
	<div class="grid-bg"></div>
	<div class="noise"></div>

	<!-- ================= CONTENT ================= -->
	<div class="relative z-10 p-5 sm:p-6 xl:p-7 flex flex-col gap-7">

		<!-- ================= TOP ================= -->
		<div class="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

			<!-- LEFT TEXT -->
			<div class="max-w-2xl">

				<div class="live">
					<span class="dot"></span>
					<span>MARKET LIVE</span>
				</div>

				<h1 class="title">
					Crypto Market Overview
				</h1>

				<p class="sub">
					Real-time tracking of global crypto assets, liquidity flow, and market behavior across exchanges.
				</p>

			</div>

			<!-- SEARCH -->
			<div class="actions">

				<div class="search">
					<span class="icon">⌕</span>
					<input type="text" placeholder="Search assets..." />
				</div>

				<div class="btns">
					<button class="btn primary">Markets</button>
					<button class="btn">Analytics</button>
				</div>

			</div>

		</div>

		<!-- ================= STATS ================= -->
		<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

			<div class="card">
				<div class="top">
					<p>Market Cap</p>
					<span class="tag green">+2.4%</span>
				</div>
				<h2>$2.41T</h2>
				<div class="bar"><span class="g"></span></div>
			</div>

			<div class="card">
				<div class="top">
					<p>24h Volume</p>
					<span class="tag blue">LIVE</span>
				</div>
				<h2>$184B</h2>
				<div class="bar"><span class="b"></span></div>
			</div>

			<div class="card">
				<div class="top">
					<p>BTC Dominance</p>
					<span class="tag yellow">52%</span>
				</div>
				<h2>52.8%</h2>
				<div class="bar"><span class="y"></span></div>
			</div>

			<div class="card">
				<div class="top">
					<p>Fear Index</p>
					<span class="tag purple">GREED</span>
				</div>
				<h2>74 / 100</h2>
				<div class="bar"><span class="p"></span></div>
			</div>

		</div>

	</div>
</section>

<style>

/* ================= BASE ================= */

.market-header {
	background: rgba(255,255,255,0.02);
	backdrop-filter: blur(25px);
	border: 1px solid rgba(255,255,255,0.04);
	box-shadow: 0 20px 60px rgba(0,0,0,0.35);
}

/* ================= BACKGROUND ================= */

.orb {
	position: absolute;
	border-radius: 50%;
	filter: blur(120px);
	opacity: 0.12;
}

.orb-one {
	width: 380px;
	height: 380px;
	background: var(--color-primary);
	top: -150px;
	right: -120px;
	animation: float 12s ease-in-out infinite;
}

.orb-two {
	width: 320px;
	height: 320px;
	background: var(--color-purple);
	bottom: -140px;
	left: -120px;
	animation: float 14s ease-in-out infinite reverse;
}

.grid-bg {
	position: absolute;
	inset: 0;
	background-image:
		linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
		linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
	background-size: 60px 60px;
	opacity: 0.3;
}

.noise {
	position: absolute;
	inset: 0;
	background: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
	background-size: 18px 18px;
	opacity: 0.12;
}

/* ================= LIVE ================= */

.live {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 6px 12px;
	border-radius: 999px;
	background: rgba(255,255,255,0.03);
	font-size: 9px;
	letter-spacing: 1px;
	color: rgba(255,255,255,0.6);
}

.dot {
	width: 7px;
	height: 7px;
	border-radius: 50%;
	background: #22c55e;
	box-shadow: 0 0 10px rgba(34,197,94,0.6);
	animation: pulse 1.6s infinite;
}

/* ================= TEXT ================= */

.title {
	font-size: clamp(1.4rem, 2.5vw, 2.2rem);
	font-weight: 800;
	margin-top: 12px;
	letter-spacing: -0.6px;
	color: white;
}

.sub {
	margin-top: 10px;
	font-size: 11.5px;
	line-height: 1.6;
	color: rgba(255,255,255,0.55);
	max-width: 600px;
}

/* ================= RIGHT ================= */

.actions {
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 100%;
	max-width: 360px;
}

.search {
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 0 14px;
	height: 50px;
	border-radius: 14px;
	background: rgba(255,255,255,0.03);
}

.search input {
	width: 100%;
	background: transparent;
	border: none;
	outline: none;
	color: white;
	font-size: 11.5px;
}

.icon {
	opacity: 0.6;
}

/* ================= BUTTONS ================= */

.btns {
	display: flex;
	gap: 10px;
}

.btn {
	flex: 1;
	height: 40px;
	border-radius: 12px;
	font-size: 10.5px;
	background: rgba(255,255,255,0.03);
	color: white;
	transition: 0.3s;
}

.primary {
	background: linear-gradient(135deg, var(--color-primary), #4f46e5);
}

/* ================= CARDS ================= */

.card {
	padding: 14px;
	border-radius: 16px;
	background: rgba(255,255,255,0.02);
	transition: 0.3s;
}

.card:hover {
	transform: translateY(-4px);
	border-color: var(--color-primary);
}

.top {
	display: flex;
	justify-content: space-between;
	font-size: 10px;
	color: rgba(255,255,255,0.5);
}

h2 {
	font-size: 18px;
	margin-top: 10px;
	color: white;
}

/* ================= BARS ================= */

.bar {
	height: 3px;
	margin-top: 10px;
	background: rgba(255,255,255,0.06);
	border-radius: 999px;
	overflow: hidden;
}

.bar span {
	display: block;
	height: 100%;
	animation: load 1.2s ease;
}

.g { width: 72%; background: #22c55e; }
.b { width: 58%; background: #3b82f6; }
.y { width: 52%; background: #facc15; }
.p { width: 74%; background: #a855f7; }

/* ================= ANIMATION ================= */

@keyframes pulse {
	0% { transform: scale(1); opacity: 1; }
	50% { transform: scale(1.4); opacity: 0.5; }
	100% { transform: scale(1); opacity: 1; }
}

@keyframes float {
	0% { transform: translate(0,0); }
	50% { transform: translate(40px, 30px); }
	100% { transform: translate(0,0); }
}

@keyframes load {
	from { width: 0; }
}

</style>