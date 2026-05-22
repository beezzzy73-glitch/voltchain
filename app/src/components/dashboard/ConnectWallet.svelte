<section class="wallet-connect relative overflow-hidden rounded-2xl">

	<!-- BACKGROUND -->
	<div class="glow one"></div>
	<div class="glow two"></div>
	<div class="grid"></div>

	<!-- HEADER -->
	<div class="header">
		<p class="tag">WALLET CONNECTION</p>
		<h1 class="title">Connect Your Wallet</h1>
		<p class="sub">Secure access using Web3 authentication</p>
	</div>

	<!-- OPTIONS -->
	<div class="grid-box">

		<div class="card">
			<div class="icon">🦊</div>
			<p class="name">MetaMask</p>
			<p class="desc">Connect using browser extension</p>
			<button class="btn">Connect</button>
		</div>

		<div class="card">
			<div class="icon">🔗</div>
			<p class="name">WalletConnect</p>
			<p class="desc">Scan QR code to connect mobile wallet</p>
			<button class="btn">Connect</button>
		</div>

		<div class="card">
			<div class="icon">💠</div>
			<p class="name">Coinbase Wallet</p>
			<p class="desc">Secure Coinbase integration</p>
			<button class="btn">Connect</button>
		</div>

	</div>

	<!-- SECURITY NOTICE -->
	<div class="notice">
		<p class="secure">🔒 Security Notice</p>
		<p class="text">
			We never ask for your seed phrase or private keys.
			All connections are encrypted and handled through secure Web3 protocols.
		</p>
	</div>

</section>

<style>

/* ================= BASE ================= */

.wallet-connect {
	padding: 24px;
	background: rgba(255,255,255,0.02);
	border: 1px solid rgba(255,255,255,0.04);
}

/* ================= BACKGROUND ================= */

.glow {
	position: absolute;
	width: 450px;
	height: 450px;
	border-radius: 50%;
	filter: blur(140px);
	opacity: 0.12;
}

.glow.one {
	background: var(--color-primary);
	top: -200px;
	right: -200px;
}

.glow.two {
	background: var(--color-purple);
	bottom: -200px;
	left: -200px;
}

.grid {
	position: absolute;
	inset: 0;
	background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px);
	background-size: 60px 60px;
	opacity: 0.15;
}

/* ================= HEADER ================= */

.header {
	position: relative;
	z-index: 2;
	margin-bottom: 20px;
}

.tag {
	font-size: 10px;
	color: var(--color-gray);
	letter-spacing: 2px;
}

.title {
	font-size: 22px;
	font-weight: 600;
	color: white;
	margin-top: 6px;
}

.sub {
	font-size: 11px;
	color: rgba(255,255,255,0.5);
	margin-top: 4px;
}

/* ================= GRID ================= */

.grid-box {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 12px;
	position: relative;
	z-index: 2;
}

/* CARD */

.card {
	padding: 16px;
	border-radius: 14px;
	background: rgba(255,255,255,0.02);
	border: 1px solid rgba(255,255,255,0.04);
	text-align: center;
	transition: 0.25s ease;
}

.card:hover {
	transform: translateY(-5px);
	border-color: var(--color-primary);
	box-shadow: 0 15px 40px rgba(54,113,233,0.2);
}

.icon {
	font-size: 26px;
	margin-bottom: 8px;
}

.name {
	font-size: 13px;
	color: white;
	font-weight: 600;
}

.desc {
	font-size: 10px;
	color: var(--color-gray);
	margin: 6px 0 12px;
}

.btn {
	padding: 8px 12px;
	border-radius: 10px;
	background: rgba(54,113,233,0.15);
	border: 1px solid rgba(54,113,233,0.3);
	color: white;
	font-size: 11px;
	transition: 0.3s ease;
}

.btn:hover {
	background: rgba(54,113,233,0.3);
	transform: scale(1.05);
}

/* ================= SECURITY NOTICE ================= */

.notice {
	margin-top: 18px;
	padding: 14px;
	border-radius: 12px;
	background: rgba(34,197,94,0.08);
	border: 1px solid rgba(34,197,94,0.2);
	position: relative;
	z-index: 2;
}

.secure {
	font-size: 12px;
	color: #22c55e;
	font-weight: 600;
}

.text {
	font-size: 11px;
	color: rgba(255,255,255,0.7);
	margin-top: 4px;
	line-height: 1.5;
}

/* ================= RESPONSIVE ================= */

@media (max-width: 768px) {
	.grid-box {
		grid-template-columns: 1fr;
	}
}

/* ================= ANIMATION ================= */

.card {
	animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
	from { opacity: 0; transform: translateY(10px); }
	to { opacity: 1; transform: translateY(0); }
}

</style>