<section class="chart-card">

	<!-- HEADER -->
	<div class="header">
		<div>
			<p class="label">PORTFOLIO PERFORMANCE</p>
			<h2 class="title">$248,920.00</h2>
			<p class="sub">+18.2% growth (Last 24h)</p>
		</div>

		<div class="status">
			<span class="dot"></span>
			<span class="text">MARKET LIVE</span>
		</div>
	</div>

	<!-- CHART AREA -->
	<div class="chart">

		<div class="wave w1"></div>
		<div class="wave w2"></div>
		<div class="wave w3"></div>

		<div class="glow"></div>

	</div>

	<!-- FOOTER STATS -->
	<div class="stats">

		<div class="item">
			<p class="k">BTC</p>
			<p class="v">$124,500</p>
		</div>

		<div class="item">
			<p class="k">ETH</p>
			<p class="v">$62,300</p>
		</div>

		<div class="item">
			<p class="k">USDT</p>
			<p class="v">$42,100</p>
		</div>

	</div>

</section>

<style>
    /* ================= CARD ================= */

.chart-card {
	background: rgba(255,255,255,0.02);
	border-radius: 16px;
	padding: 16px;
	box-shadow: 0 12px 40px rgba(0,0,0,0.35);
	overflow: hidden;
	position: relative;
	animation: fadeIn 0.5s ease;
}

/* ================= HEADER ================= */

.header {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 14px;
}

.label {
	font-size: 11px;
	color: var(--color-gray);
	letter-spacing: 1px;
}

.title {
	font-size: 22px;
	font-weight: 700;
	color: white;
	margin-top: 4px;
}

.sub {
	font-size: 11px;
	color: var(--color-gray);
}

/* LIVE STATUS */
.status {
	display: flex;
	align-items: center;
	gap: 6px;
}

.dot {
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: #22c55e;
	box-shadow: 0 0 12px rgba(34,197,94,0.6);
	animation: pulse 1.6s infinite;
}

/* ================= CHART ================= */

.chart {
	position: relative;
	height: 180px;
	border-radius: 14px;
	overflow: hidden;
	background: radial-gradient(circle at 30% 40%, rgba(54,113,233,0.15), transparent 60%);
}

/* waves (fake crypto chart motion) */
.wave {
	position: absolute;
	bottom: 0;
	left: -20%;
	width: 140%;
	height: 120%;
	border-radius: 50%;
	opacity: 0.25;
	filter: blur(25px);
	transform-origin: bottom;
	animation: waveMove 6s ease-in-out infinite;
}

.w1 {
	background: var(--color-primary);
	animation-delay: 0s;
}

.w2 {
	background: #7b3fe4;
	animation-delay: 1.5s;
	opacity: 0.2;
}

.w3 {
	background: #22c55e;
	animation-delay: 3s;
	opacity: 0.15;
}

/* glow center */
.glow {
	position: absolute;
	inset: 0;
	background: radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 60%);
}

/* ================= STATS ================= */

.stats {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
	margin-top: 14px;
}

.item {
	padding: 10px;
	border-radius: 10px;
	background: rgba(255,255,255,0.02);
	border: 1px solid rgba(255,255,255,0.05);
	transition: 0.3s ease;
}

.item:hover {
	transform: translateY(-3px);
	border-color: var(--color-primary);
}

.k {
	font-size: 11px;
	color: var(--color-gray);
}

.v {
	font-size: 13px;
	font-weight: 600;
	color: white;
	margin-top: 3px;
}

/* ================= ANIMATION ================= */

@keyframes fadeIn {
	from { opacity: 0; transform: translateY(10px); }
	to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
	0% { transform: scale(1); opacity: 1; }
	50% { transform: scale(1.4); opacity: 0.5; }
	100% { transform: scale(1); opacity: 1; }
}

@keyframes waveMove {
	0% { transform: translateY(0) scale(1); }
	50% { transform: translateY(-10px) scale(1.05); }
	100% { transform: translateY(0) scale(1); }
}
</style>