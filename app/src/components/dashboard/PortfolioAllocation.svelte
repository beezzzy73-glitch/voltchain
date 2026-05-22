<section class="allocation relative overflow-hidden rounded-2xl">

	<!-- BACKGROUND -->
	<div class="glow one"></div>
	<div class="glow two"></div>
	<div class="grid-bg"></div>

	<!-- HEADER -->
	<div class="header">
		<div>
			<p class="label">ASSET ALLOCATION</p>
			<h2 class="title">Portfolio Breakdown</h2>
		</div>

		<p class="sub">Live distribution across assets</p>
	</div>

	<!-- CONTENT -->
	<div class="content">

		<!-- CHART VISUAL -->
		<div class="chart">

			<div class="ring">
				<div class="inner">
					<p class="total">$248K</p>
					<p class="muted">Total</p>
				</div>
			</div>

		</div>

		<!-- LIST -->
		<div class="list">

			<div class="item">
				<span class="dot btc"></span>
				<div class="info">
					<p class="name">Bitcoin</p>
					<p class="value">52%</p>
				</div>
				<div class="bar btc-bar"></div>
			</div>

			<div class="item">
				<span class="dot eth"></span>
				<div class="info">
					<p class="name">Ethereum</p>
					<p class="value">28%</p>
				</div>
				<div class="bar eth-bar"></div>
			</div>

			<div class="item">
				<span class="dot sol"></span>
				<div class="info">
					<p class="name">Solana</p>
					<p class="value">12%</p>
				</div>
				<div class="bar sol-bar"></div>
			</div>

			<div class="item">
				<span class="dot usdt"></span>
				<div class="info">
					<p class="name">USDT</p>
					<p class="value">8%</p>
				</div>
				<div class="bar usdt-bar"></div>
			</div>

		</div>

	</div>

</section>

<style>

/* ================= BASE ================= */

.allocation {
	background: rgba(255,255,255,0.02);
	border: 1px solid rgba(255,255,255,0.04);
	padding: 20px;
}

/* ================= BACKGROUND ================= */

.glow {
	position: absolute;
	width: 420px;
	height: 420px;
	border-radius: 50%;
	filter: blur(140px);
	opacity: 0.12;
}

.glow.one {
	background: var(--color-primary);
	top: -180px;
	right: -180px;
}

.glow.two {
	background: var(--color-purple);
	bottom: -180px;
	left: -180px;
}

.grid-bg {
	position: absolute;
	inset: 0;
	background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px);
	background-size: 60px 60px;
	opacity: 0.15;
}

/* ================= HEADER ================= */

.header {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	position: relative;
	z-index: 2;
}

.label {
	font-size: 10px;
	color: var(--color-gray);
	letter-spacing: 1px;
}

.title {
	font-size: 18px;
	color: white;
	font-weight: 600;
}

.sub {
	font-size: 11px;
	color: rgba(255,255,255,0.5);
}

/* ================= CONTENT ================= */

.content {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
	margin-top: 20px;
	position: relative;
	z-index: 2;
}

/* ================= CHART ================= */

.chart {
	display: flex;
	align-items: center;
	justify-content: center;
}

.ring {
	width: 170px;
	height: 170px;
	border-radius: 50%;
	background: conic-gradient(
		var(--color-primary) 0% 52%,
		#22c55e 52% 80%,
		#facc15 80% 92%,
		#ef4444 92% 100%
	);

	display: flex;
	align-items: center;
	justify-content: center;

	position: relative;
	animation: spinIn 1s ease;
}

.ring::before {
	content: "";
	position: absolute;
	width: 120px;
	height: 120px;
	border-radius: 50%;
	background: var(--color-base);
}

.inner {
	position: relative;
	text-align: center;
}

.total {
	font-size: 18px;
	font-weight: 600;
	color: white;
}

/* ================= LIST ================= */

.list {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

/* ITEM */

.item {
	display: flex;
	align-items: center;
	gap: 10px;

	padding: 10px;
	border-radius: 12px;
	background: rgba(255,255,255,0.02);
	border: 1px solid rgba(255,255,255,0.04);

	transition: 0.25s ease;
}

.item:hover {
	transform: translateX(4px);
	border-color: var(--color-primary);
}

/* DOTS */

.dot {
	width: 10px;
	height: 10px;
	border-radius: 50%;
}

.btc { background: var(--color-primary); }
.eth { background: #8b5cf6; }
.sol { background: #f97316; }
.usdt { background: #22c55e; }

/* TEXT */

.info {
	flex: 1;
}

.name {
	font-size: 12px;
	color: white;
}

.value {
	font-size: 11px;
	color: var(--color-gray);
}

/* BARS */

.bar {
	height: 4px;
	width: 60px;
	border-radius: 999px;
	background: rgba(255,255,255,0.08);
	position: relative;
	overflow: hidden;
}

.bar::after {
	content: "";
	position: absolute;
	height: 100%;
	left: 0;
	top: 0;
	background: var(--color-primary);
	animation: load 1.2s ease;
}

.btc-bar::after { width: 52%; }
.eth-bar::after { width: 28%; }
.sol-bar::after { width: 12%; }
.usdt-bar::after { width: 8%; }

/* ================= RESPONSIVE ================= */

@media (max-width: 768px) {
	.content {
		grid-template-columns: 1fr;
	}

	.header {
		flex-direction: column;
		align-items: flex-start;
		gap: 6px;
	}
}

/* ================= ANIMATIONS ================= */

@keyframes spinIn {
	from {
		transform: scale(0.7) rotate(-40deg);
		opacity: 0;
	}
	to {
		transform: scale(1) rotate(0);
		opacity: 1;
	}
}

@keyframes load {
	from { width: 0; }
	to { width: 100%; }
}

</style>