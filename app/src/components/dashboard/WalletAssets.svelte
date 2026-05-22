<section class="assets relative overflow-hidden rounded-2xl">

	<!-- BACKGROUND -->
	<div class="glow one"></div>
	<div class="glow two"></div>
	<div class="grid-bg"></div>

	<!-- HEADER -->
	<div class="header">

		<div>
			<p class="label">YOUR ASSETS</p>
			<h2 class="title">Crypto Holdings</h2>
		</div>

		<p class="sub">Live wallet breakdown</p>

	</div>

	<!-- LIST -->
	<div class="list">

		<!-- BTC -->
		<div class="item">
			<div class="left">
				<div class="coin btc">₿</div>
				<div>
					<p class="name">Bitcoin</p>
					<p class="symbol">BTC</p>
				</div>
			</div>

			<div class="right">
				<p class="amount">0.42 BTC</p>
				<p class="value">$28,400</p>
			</div>
		</div>

		<!-- ETH -->
		<div class="item">
			<div class="left">
				<div class="coin eth">Ξ</div>
				<div>
					<p class="name">Ethereum</p>
					<p class="symbol">ETH</p>
				</div>
			</div>

			<div class="right">
				<p class="amount">3.8 ETH</p>
				<p class="value">$12,900</p>
			</div>
		</div>

		<!-- SOL -->
		<div class="item">
			<div class="left">
				<div class="coin sol">◎</div>
				<div>
					<p class="name">Solana</p>
					<p class="symbol">SOL</p>
				</div>
			</div>

			<div class="right">
				<p class="amount">120 SOL</p>
				<p class="value">$17,800</p>
			</div>
		</div>

		<!-- USDT -->
		<div class="item">
			<div class="left">
				<div class="coin usdt">$</div>
				<div>
					<p class="name">Tether</p>
					<p class="symbol">USDT</p>
				</div>
			</div>

			<div class="right">
				<p class="amount">8,200 USDT</p>
				<p class="value">$8,200</p>
			</div>
		</div>

	</div>

</section>

<style>

/* ================= BASE ================= */

.assets {
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

.sub {
	font-size: 11px;
	color: rgba(255,255,255,0.5);
}

/* ================= LIST ================= */

.list {
	display: flex;
	flex-direction: column;
	gap: 10px;
	position: relative;
	z-index: 2;
}

/* ITEM */

.item {
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 12px;
	border-radius: 14px;

	background: rgba(255,255,255,0.02);
	border: 1px solid rgba(255,255,255,0.03);

	transition: 0.25s ease;
}

.item:hover {
	transform: translateY(-3px);
	border-color: var(--color-primary);
}

/* LEFT */

.left {
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

/* TEXT */

.name {
	font-size: 12px;
	color: white;
}

.symbol {
	font-size: 10px;
	color: rgba(255,255,255,0.5);
}

/* RIGHT */

.right {
	text-align: right;
}

.amount {
	font-size: 12px;
	color: white;
}

.value {
	font-size: 11px;
	color: var(--color-gray);
}

/* ================= COIN COLORS ================= */

.btc { color: #f7931a; }
.eth { color: #8b5cf6; }
.sol { color: #f97316; }
.usdt { color: #22c55e; }

/* ================= RESPONSIVE ================= */

@media (max-width: 768px) {

	.item {
		flex-direction: column;
		align-items: flex-start;
		gap: 8px;
	}

	.right {
		text-align: left;
	}

}

/* ================= ANIMATION ================= */

.item {
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