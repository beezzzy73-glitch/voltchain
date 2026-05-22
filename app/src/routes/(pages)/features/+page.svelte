<script>
	import ButtonLink from "../../../components/ui/ButtonLink.svelte";
	import { onMount } from "svelte";

	let show = $state(false);

	onMount(() => {
		show = true;
	});
</script>

<section class="features-page">

	<!-- ================= BACKGROUND LAYERS ================= -->
	<div class="bg-glow one"></div>
	<div class="bg-glow two"></div>
	<div class="grid-lines"></div>

	<!-- ================= HERO ================= -->
	<div class="hero {show ? 'show' : ''}">
		<p class="title">Next-Generation Crypto Exchange Features</p>
		<p class="subtitle">
			A secure, high-performance trading infrastructure built for speed, precision, and global scale.
		</p>

		<div class="cta">
			<ButtonLink href="" children="Start Trading Now" />
		</div>
	</div>

	<!-- ================= CORE FEATURES ================= -->
	<div class="section-title {show ? 'show' : ''}">
		<p>Core Platform Features</p>
		<span>Everything you need to trade safely and efficiently</span>
	</div>

	<div class="grid">

		<div class="card">
			<div class="icon">🔐</div>
			<p class="card-title">Cold Wallet Security</p>
			<p class="card-text">Offline storage protection with multi-signature encryption layers.</p>
		</div>

		<div class="card">
			<div class="icon">⚡</div>
			<p class="card-title">Ultra-Fast Execution</p>
			<p class="card-text">Low-latency trade engine designed for high-frequency operations.</p>
		</div>

		<div class="card">
			<div class="icon">📊</div>
			<p class="card-title">Live Market Engine</p>
			<p class="card-text">Real-time order books, liquidity depth, and global pricing feeds.</p>
		</div>

		<div class="card">
			<div class="icon">🌍</div>
			<p class="card-title">Global Exchange Access</p>
			<p class="card-text">Trade crypto anywhere without restrictions or downtime.</p>
		</div>

	</div>

	<!-- ================= ADVANCED TRADING ================= -->
	<div class="section-title {show ? 'show' : ''}">
		<p>Advanced Trading System</p>
		<span>Professional tools for serious investors</span>
	</div>

	<div class="grid">

		<div class="card">
			<div class="icon">📈</div>
			<p class="card-title">Smart Order Routing</p>
			<p class="card-text">Automatically finds best price execution across liquidity pools.</p>
		</div>

		<div class="card">
			<div class="icon">🧠</div>
			<p class="card-title">AI Market Signals</p>
			<p class="card-text">Predictive trend analysis powered by machine learning models.</p>
		</div>

		<div class="card">
			<div class="icon">📉</div>
			<p class="card-title">Risk Engine</p>
			<p class="card-text">Automated stop-loss, liquidation protection, and exposure control.</p>
		</div>

		<div class="card">
			<div class="icon">⚙️</div>
			<p class="card-title">Advanced Order Types</p>
			<p class="card-text">Limit, stop, trailing stop, and conditional trading systems.</p>
		</div>

	</div>

	<!-- ================= PORTFOLIO SYSTEM ================= -->
	<div class="section-title {show ? 'show' : ''}">
		<p>Portfolio Intelligence</p>
		<span>Track, grow, and optimize your digital wealth</span>
	</div>

	<div class="grid">

		<div class="card">
			<div class="icon">💼</div>
			<p class="card-title">Unified Dashboard</p>
			<p class="card-text">All assets, wallets, and trades in one clean interface.</p>
		</div>

		<div class="card">
			<div class="icon">📊</div>
			<p class="card-title">Performance Analytics</p>
			<p class="card-text">Real-time profit tracking with deep historical insights.</p>
		</div>

		<div class="card">
			<div class="icon">💰</div>
			<p class="card-title">Passive Yield System</p>
			<p class="card-text">Earn staking rewards and liquidity-based income streams.</p>
		</div>

		<div class="card">
			<div class="icon">🔄</div>
			<p class="card-title">Auto Rebalancing</p>
			<p class="card-text">Smart portfolio optimization based on market conditions.</p>
		</div>

	</div>

	<!-- ================= SECURITY SECTION ================= -->
	<div class="security-box {show ? 'show' : ''}">
		<div>
			<p class="banner-title">Military-Grade Security Infrastructure</p>
			<p class="banner-text">
				We combine encryption, AI fraud detection, and real-time monitoring to protect every transaction.
			</p>
		</div>

		<ButtonLink href="" children="Explore Security" />
	</div>

	<!-- ================= EXTRA FEATURES ================= -->
	<div class="section-title {show ? 'show' : ''}">
		<p>Extra Platform Advantages</p>
		<span>Built for scalability and real-world trading demands</span>
	</div>

	<div class="grid">

		<div class="card">
			<div class="icon">🔔</div>
			<p class="card-title">Real-Time Alerts</p>
			<p class="card-text">Instant notifications for price moves and trade executions.</p>
		</div>

		<div class="card">
			<div class="icon">📡</div>
			<p class="card-title">API Access</p>
			<p class="card-text">Full developer API for bots, automation, and integrations.</p>
		</div>

		<div class="card">
			<div class="icon">🛡️</div>
			<p class="card-title">Fraud Detection AI</p>
			<p class="card-text">Detects suspicious activity in real time using behavioral models.</p>
		</div>

		<div class="card">
			<div class="icon">⚙️</div>
			<p class="card-title">Scalable Infrastructure</p>
			<p class="card-text">Cloud-native architecture built for millions of users.</p>
		</div>

	</div>

	<!-- ================= FINAL CTA ================= -->
	<div class="banner">
		<div>
			<p class="banner-title">Ready to upgrade your trading experience?</p>
			<p class="banner-text">Join a high-performance crypto exchange built for the future.</p>
		</div>

		<ButtonLink href="" children="Get Started" />
	</div>

</section>

<style>

/* ================= BASE ================= */

.features-page {
	padding: 70px 20px;
	background: var(--color-base);
	color: white;
	position: relative;
	overflow: hidden;
	isolation: isolate;
}

/* ================= BACKGROUND EFFECTS ================= */

.bg-glow {
	position: absolute;
	width: 500px;
	height: 500px;
	filter: blur(140px);
	opacity: 0.12;
	z-index: -2;
	border-radius: 50%;
}

.bg-glow.one {
	background: var(--color-primary);
	top: -200px;
	right: -200px;
	animation: floatGlow 10s ease-in-out infinite;
}

.bg-glow.two {
	background: var(--color-purple);
	bottom: -200px;
	left: -200px;
	animation: floatGlow 14s ease-in-out infinite reverse;
}

.grid-lines {
	position: absolute;
	inset: 0;
	z-index: -3;
	background-image:
		linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
		linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
	background-size: 70px 70px;
	opacity: 0.4;
}

/* ================= HERO ================= */

.hero {
	text-align: center;
	max-width: 750px;
	margin: auto;
	opacity: 0;
	transform: translateY(25px);
	transition: 0.8s ease;
}

.hero.show {
	opacity: 1;
	transform: translateY(0);
}

.title {
	font-size: 34px;
	font-weight: bold;
}

.subtitle {
	margin-top: 10px;
	opacity: 0.7;
}

/* ================= SECTION TITLE ================= */

.section-title {
	text-align: center;
	margin-top: 70px;
	opacity: 0;
	transform: translateY(20px);
	transition: 0.8s ease;
}

.section-title.show {
	opacity: 1;
	transform: translateY(0);
}

.section-title p {
	font-size: 22px;
	font-weight: bold;
}

.section-title span {
	font-size: 13px;
	opacity: 0.6;
}

/* ================= GRID ================= */

.grid {
	margin-top: 40px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
	gap: 20px;
}

/* ================= CARD ================= */

.card {
	background: rgba(255,255,255,0.03);
	border: 1px solid rgba(255,255,255,0.05);
	border-radius: 16px;
	padding: 20px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	transition: 0.35s ease;
}

.card::before {
	content: "";
	position: absolute;
	inset: 0;
	background: linear-gradient(120deg, transparent, rgba(255,255,255,0.06), transparent);
	transform: translateX(-120%);
	transition: 0.6s ease;
}

.card:hover::before {
	transform: translateX(120%);
}

.card:hover {
	transform: translateY(-7px);
	border-color: var(--color-primary);
	box-shadow: 0 15px 35px rgba(54,113,233,0.2);
}

/* ================= ICON ================= */

.icon {
	font-size: 26px;
	margin-bottom: 10px;
}

/* ================= SECURITY ================= */

.security-box {
	margin-top: 70px;
	padding: 30px;
	border-radius: 18px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: linear-gradient(135deg, rgba(54,113,233,0.15), rgba(43,7,110,0.2));
	border: 1px solid rgba(255,255,255,0.05);
	transition: 0.3s ease;
}

.security-box:hover {
	transform: scale(1.01);
}

/* ================= BANNER ================= */

.banner {
	margin-top: 80px;
	padding: 30px;
	border-radius: 18px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: rgba(255,255,255,0.03);
	border: 1px solid rgba(255,255,255,0.05);
	transition: 0.3s ease;
}

.banner:hover {
	transform: scale(1.01);
}

/* ================= ANIMATION ================= */

@keyframes floatGlow {
	0% { transform: translate(0,0); }
	50% { transform: translate(60px, 40px); }
	100% { transform: translate(0,0); }
}

</style>