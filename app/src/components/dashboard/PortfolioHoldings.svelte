<section class="holdings relative overflow-hidden rounded-2xl">

	<!-- BACKGROUND -->
	<div class="glow one"></div>
	<div class="glow two"></div>
	<div class="grid-bg"></div>

	<!-- HEADER -->
	<div class="header">

		<div>
			<p class="label">PORTFOLIO HOLDINGS</p>
			<h2 class="title">Your Assets</h2>
		</div>

		<div class="summary">
			<p class="muted">Total Assets: <span class="white">12</span></p>
			<p class="muted">Active Profit: <span class="green">+18.2%</span></p>
		</div>

	</div>

	<!-- TABLE -->
	<div class="table">

		<!-- HEADER ROW -->
		<div class="row head hidden sm:grid">
			<p>Asset</p>
			<p>Holdings</p>
			<p>Value</p>
			<p>24h</p>
			<p>P/L</p>
		</div>

		<!-- BTC -->
		<div class="row">
			<div class="asset">
				<div class="coin btc">₿</div>
				<div>
					<p class="name">Bitcoin</p>
					<p class="symbol">BTC</p>
				</div>
			</div>

			<p class="muted">1.42 BTC</p>
			<p class="price">$95,200</p>
			<p class="up">+2.4%</p>
			<p class="profit up">+$12,300</p>
		</div>

		<!-- ETH -->
		<div class="row">
			<div class="asset">
				<div class="coin eth">Ξ</div>
				<div>
					<p class="name">Ethereum</p>
					<p class="symbol">ETH</p>
				</div>
			</div>

			<p class="muted">8.3 ETH</p>
			<p class="price">$28,400</p>
			<p class="up">+1.1%</p>
			<p class="profit up">+$3,120</p>
		</div>

		<!-- SOL -->
		<div class="row">
			<div class="asset">
				<div class="coin sol">◎</div>
				<div>
					<p class="name">Solana</p>
					<p class="symbol">SOL</p>
				</div>
			</div>

			<p class="muted">120 SOL</p>
			<p class="price">$17,800</p>
			<p class="down">-0.8%</p>
			<p class="profit down">-$540</p>
		</div>

		<!-- USDT -->
		<div class="row">
			<div class="asset">
				<div class="coin usdt">$</div>
				<div>
					<p class="name">Tether</p>
					<p class="symbol">USDT</p>
				</div>
			</div>

			<p class="muted">42,100 USDT</p>
			<p class="price">$42,100</p>
			<p class="up">+0.0%</p>
			<p class="profit">Stable</p>
		</div>

	</div>

</section>

<style>

/* ================= BASE ================= */

.holdings {
	background: rgba(255,255,255,0.02);
	border: 1px solid rgba(255,255,255,0.04);
	padding: 18px;
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
	margin-bottom: 16px;
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

.summary {
	text-align: right;
}

.muted {
	font-size: 11px;
	color: rgba(255,255,255,0.5);
}

.white {
	color: white;
}

.green {
	color: #22c55e;
}

/* ================= TABLE ================= */

.table {
	display: flex;
	flex-direction: column;
	gap: 10px;
	position: relative;
	z-index: 2;
}

/* ROW */

.row {
	display: grid;
	grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
	align-items: center;
	gap: 10px;

	padding: 12px;
	border-radius: 14px;

	background: rgba(255,255,255,0.02);
	border: 1px solid rgba(255,255,255,0.03);

	transition: 0.25s ease;
}

.row:hover {
	transform: translateY(-3px);
	border-color: var(--color-primary);
}

/* HEADER ROW */

.head {
	opacity: 0.6;
	font-size: 10px;
	background: transparent;
}

/* ================= ASSET ================= */

.asset {
	display: flex;
	align-items: center;
	gap: 10px;
}

.coin {
	width: 34px;
	height: 34px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	background: rgba(255,255,255,0.05);
}

.name {
	font-size: 12px;
	color: white;
}

.symbol {
	font-size: 10px;
	color: rgba(255,255,255,0.5);
}

/* ================= VALUES ================= */

.price {
	font-size: 12px;
	color: white;
}

.up {
	color: #22c55e;
	font-size: 11px;
}

.down {
	color: #ef4444;
	font-size: 11px;
}

.profit {
	font-size: 11px;
	font-weight: 600;
}

.profit.up {
	color: #22c55e;
}

.profit.down {
	color: #ef4444;
}

/* ================= RESPONSIVE ================= */

@media (max-width: 768px) {

	.row {
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			"asset asset"
			"price price"
			"muted up"
			"profit profit";
	}

}

/* ================= ANIMATION ================= */

.row {
	animation: fadeIn 0.35s ease;
}

@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translateY(8px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

</style>