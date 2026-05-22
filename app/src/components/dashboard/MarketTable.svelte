<section class="market relative w-full rounded-2xl overflow-hidden">

	<!-- BACKGROUND -->
	<div class="glow one"></div>
	<div class="glow two"></div>
	<div class="grid-bg"></div>

	<!-- HEADER -->
	<div class="header">

		<div>
			<p class="tag">MARKET OVERVIEW</p>
			<h2 class="title">Live Prices</h2>
			<p class="sub">Real-time crypto market tracking</p>
		</div>

		<div class="filters">
			<button class="active">All</button>
			<button>Gainers</button>
			<button>Losers</button>
			<button>Volume</button>
		</div>

	</div>

	<!-- TABLE -->
	<div class="table">

		<!-- HEAD -->
		<div class="row head hidden sm:grid">
			<p>Asset</p>
			<p>Price</p>
			<p>24h</p>
			<p>Volume</p>
			<p></p>
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

			<p class="price">$67,420</p>
			<p class="up">+2.4%</p>
			<p class="muted">$28.4B</p>

			<button class="trade">Trade</button>
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

			<p class="price">$3,420</p>
			<p class="up">+1.8%</p>
			<p class="muted">$14.2B</p>

			<button class="trade">Trade</button>
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

			<p class="price">$148</p>
			<p class="down">-0.9%</p>
			<p class="muted">$3.1B</p>

			<button class="trade">Trade</button>
		</div>

	</div>

</section>

<style>

/* ================= BASE ================= */

.market {
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
	opacity: 0.1;
}

.glow.one {
	background: var(--color-primary);
	top: -160px;
	right: -160px;
}

.glow.two {
	background: var(--color-purple);
	bottom: -160px;
	left: -160px;
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
	gap: 16px;
	margin-bottom: 16px;
}

.tag {
	font-size: 10px;
	letter-spacing: 1px;
	color: var(--color-gray);
}

.title {
	font-size: 20px;
	font-weight: 600;
	color: white;
}

.sub {
	font-size: 11px;
	color: rgba(255,255,255,0.5);
}

/* ================= FILTERS ================= */

.filters {
	display: flex;
	gap: 6px;
	flex-wrap: wrap;
}

.filters button {
	font-size: 10px;
	padding: 6px 10px;
	border-radius: 999px;
	background: rgba(255,255,255,0.03);
	color: rgba(255,255,255,0.6);
	transition: 0.25s ease;
}

.filters button:hover {
	transform: translateY(-1px);
}

.filters .active {
	background: var(--color-primary);
	color: white;
}

/* ================= TABLE ================= */

.table {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

/* ================= ROW ================= */

.row {
	display: grid;
	grid-template-columns: 2fr 1fr 1fr 1fr 0.8fr;
	align-items: center;
	gap: 10px;

	padding: 12px;
	border-radius: 14px;

	background: rgba(255,255,255,0.02);
	border: 1px solid rgba(255,255,255,0.03);

	transition: 0.3s ease;
}

.row:hover {
	transform: translateY(-3px);
	border-color: var(--color-primary);
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
	font-size: 11px;
	color: #22c55e;
}

.down {
	font-size: 11px;
	color: #ef4444;
}

.muted {
	font-size: 11px;
	color: rgba(255,255,255,0.5);
}

/* ================= BUTTON ================= */

.trade {
	font-size: 10px;
	padding: 6px 10px;
	border-radius: 10px;
	background: var(--color-primary);
	color: white;
	transition: 0.25s ease;
}

.trade:hover {
	transform: scale(1.05);
}

/* ================= MOBILE ================= */

@media (max-width: 768px) {

	.row {
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			"asset asset"
			"price up"
			"muted trade";
	}

	.price { grid-area: price; }
	.up { grid-area: up; }
	.muted { grid-area: muted; }
	.trade { grid-area: trade; }
}

/* ================= ANIMATION ================= */

.row {
	animation: fadeIn 0.4s ease;
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