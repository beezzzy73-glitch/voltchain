<section class="wallet relative overflow-hidden rounded-2xl">

	<!-- BACKGROUND -->
	<div class="glow one"></div>
	<div class="glow two"></div>
	<div class="grid-bg"></div>

	<!-- HEADER -->
	<div class="header">

		<div>
			<p class="label">WALLET BALANCE</p>
			<h1 class="balance">$24,892.00</h1>
			<p class="sub">Secure crypto wallet overview</p>
		</div>

		<div class="status">
			<span class="dot"></span>
			<span class="text">SECURED</span>
		</div>

	</div>

	<!-- QUICK INFO -->
	<div class="cards">

		<div class="card">
			<p class="k">Available</p>
			<p class="v">$12,400</p>
		</div>

		<div class="card">
			<p class="k">Locked</p>
			<p class="v">$8,300</p>
		</div>

		<div class="card">
			<p class="k">Rewards</p>
			<p class="v green">$1,120</p>
		</div>

		<div class="card">
			<p class="k">Networks</p>
			<p class="v">3 Active</p>
		</div>

	</div>

</section>

<style>

/* ================= BASE ================= */

.wallet {
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
	align-items: flex-start;
	position: relative;
	z-index: 2;
	gap: 20px;
}

.label {
	font-size: 10px;
	color: var(--color-gray);
	letter-spacing: 1px;
}

.balance {
	font-size: 30px;
	font-weight: 600;
	color: white;
	margin-top: 6px;
}

.sub {
	font-size: 11px;
	color: rgba(255,255,255,0.5);
	margin-top: 4px;
}

/* STATUS */

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
	animation: pulse 1.5s infinite;
}

.text {
	font-size: 10px;
	color: #22c55e;
	letter-spacing: 1px;
}

/* ================= CARDS ================= */

.cards {
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
	transform: translateY(-3px);
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

.v.green {
	color: #22c55e;
}

/* ================= RESPONSIVE ================= */

@media (max-width: 768px) {

	.header {
		flex-direction: column;
	}

	.cards {
		grid-template-columns: repeat(2, 1fr);
	}
}

/* ================= ANIMATION ================= */

@keyframes pulse {
	0% { transform: scale(1); opacity: 1; }
	50% { transform: scale(1.4); opacity: 0.5; }
	100% { transform: scale(1); opacity: 1; }
}

</style>