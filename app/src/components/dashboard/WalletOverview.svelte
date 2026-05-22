<section class="w-full rounded-xl bg-base overflow-hidden relative">

	<!-- HEADER -->
	<div class="header">

		<div>
			<p class="label">WALLET OVERVIEW</p>
			<h2 class="title">$248,920.00</h2>
			<p class="sub">Total Portfolio Value</p>
		</div>

		<div class="status">
			<span class="dot"></span>
			<span class="text">LIVE</span>
		</div>

	</div>

	<!-- BODY -->
	<div class="content">

		<!-- LEFT: BREAKDOWN -->
		<div class="breakdown">

			<div class="asset">
				<div class="row">
					<p class="coin">BTC</p>
					<p class="value">$124,500</p>
				</div>
				<div class="bar btc"></div>
			</div>

			<div class="asset">
				<div class="row">
					<p class="coin">ETH</p>
					<p class="value">$62,300</p>
				</div>
				<div class="bar eth"></div>
			</div>

			<div class="asset">
				<div class="row">
					<p class="coin">USDT</p>
					<p class="value">$42,100</p>
				</div>
				<div class="bar usdt"></div>
			</div>

		</div>

		<!-- RIGHT: PERFORMANCE -->
		<div class="performance">

			<div class="card">
				<p class="k">24h Change</p>
				<p class="v up">+18.2%</p>
			</div>

			<div class="card">
				<p class="k">Active Assets</p>
				<p class="v">12</p>
			</div>

			<div class="card">
				<p class="k">Risk Level</p>
				<p class="v mid">Medium</p>
			</div>

		</div>

	</div>

</section>


<style>
    /* ================= CARD BASE ================= */

section {
	animation: fadeIn 0.4s ease;
	box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

section:hover {
	transform: translateY(-2px);
	box-shadow: 0 18px 55px rgba(0, 0, 0, 0.45);
}

/* ================= HEADER ================= */

.header {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	padding: 14px;
	border-bottom: 1px solid rgba(255,255,255,0.05);
}

.label {
	font-size: 11px;
	color: var(--color-gray);
	letter-spacing: 1px;
}

.title {
	font-size: 26px;
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
	animation: pulse 1.6s infinite ease-in-out;
}

/* ================= BODY ================= */

.content {
	display: grid;
	grid-template-columns: 1.2fr 1fr;
	gap: 14px;
	padding: 14px;
}

@media (max-width: 768px) {
	.content {
		grid-template-columns: 1fr;
	}
}

/* ================= ASSETS ================= */

.asset {
	padding: 10px;
	border-radius: 10px;

	background: rgba(255,255,255,0.02);
	border: 1px solid rgba(255,255,255,0.05);

	margin-bottom: 10px;
	transition: 0.25s ease;
	position: relative;
	overflow: hidden;
}

.asset:hover {
	transform: translateY(-3px);
	border-color: var(--color-primary);
}

.row {
	display: flex;
	justify-content: space-between;
	font-size: 12px;
}

.coin {
	color: var(--color-gray);
}

.value {
	color: white;
	font-weight: 600;
}

/* ================= BARS ================= */

.bar {
	height: 3px;
	margin-top: 8px;
	border-radius: 999px;
	background: rgba(255,255,255,0.08);
	overflow: hidden;
	position: relative;
}

.bar::after {
	content: "";
	position: absolute;
	height: 100%;
	left: 0;
	top: 0;
	width: 60%;
	background: var(--color-primary);
	animation: loadBar 1.5s ease;
}

.btc::after { width: 80%; }
.eth::after { width: 55%; }
.usdt::after { width: 45%; }

/* ================= PERFORMANCE ================= */

.performance {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.card {
	padding: 12px;
	border-radius: 10px;

	background: rgba(255,255,255,0.02);
	border: 1px solid rgba(255,255,255,0.05);

	transition: 0.3s ease;
}

.card:hover {
	transform: translateX(4px);
	border-color: var(--color-primary);
}

/* TEXT */
.k {
	font-size: 11px;
	color: var(--color-gray);
}

.v {
	font-size: 14px;
	font-weight: 600;
	color: white;
	margin-top: 4px;
}

.v.up {
	color: #22c55e;
}

.v.mid {
	color: #facc15;
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

@keyframes loadBar {
	from { width: 0; }
	to { width: 60%; }
}
</style>