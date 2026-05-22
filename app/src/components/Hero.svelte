<script>
	import ButtonLink from "./ui/ButtonLink.svelte";
</script>

<section class="bg-base items-center px-5 grid @3xl:grid-cols-2 crypto-hero">

	<!-- SYSTEM BACKGROUND -->
	<div class="hero-bg"></div>
	<div class="data-flow"></div>

	<!-- LEFT -->
	<div class="flex flex-col gap-5 hero-left">

		<!-- MARKET STATUS (NEW) -->
		<div class="market-status">
			<span class="dot"></span>
			<span>MARKET LIVE • VOLATILITY NORMAL</span>
		</div>

		<div class="bg-fore p-2 rounded-full flex w-fit gap-5 items-center hero-badge">
			<p class="bg-white rounded-full text-fore font-bold p-1.5">75% SAVE</p>
			<span>For the Black Friday Weekend</span>
		</div>

		<h1 class="text-3xl font-bold @3xl:text-5xl hero-title">
			Fastest & Secure <br> platform to invest in crypto
		</h1>

		<p class="hero-text">
			Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.
		</p>

		<div class="hero-btn">
			<ButtonLink href='' children="Try for free" />
		</div>

	</div>

	<!-- RIGHT -->
	<div class="hero-image-wrap">
		<img src="/illustrations/hero.svg" alt="" class="hero-image">
	</div>

</section>

<style>

/* ================= SYSTEM BASE ================= */

.crypto-hero {
	position: relative;
	overflow: hidden;
}

/* ambient market glow */
.hero-bg {
	position: absolute;
	inset: 0;
	background:
		radial-gradient(circle at 25% 30%, rgba(54,113,233,0.18), transparent 55%),
		radial-gradient(circle at 75% 70%, rgba(123,63,228,0.14), transparent 55%);
	animation: breathe 10s ease-in-out infinite;
	z-index: 0;
}

/* DATA FLOW LAYER (NEW — feels like blockchain activity) */
.data-flow {
	position: absolute;
	inset: 0;
	background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px);
	background-size: 40px 40px;
	opacity: 0.25;
	animation: flow 18s linear infinite;
	z-index: 0;
}

/* ================= MARKET STATUS ================= */

.market-status {
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: 11px;
	letter-spacing: 1px;
	opacity: 0.8;
	padding: 6px 10px;
	border: 1px solid rgba(255,255,255,0.08);
	border-radius: 999px;
	width: fit-content;
	background: rgba(255,255,255,0.03);
	animation: floatSoft 4s ease-in-out infinite;
}

.market-status .dot {
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: #00ff88;
	animation: pulseMarket 1.8s infinite;
}

/* ================= LEFT ================= */

.hero-left {
	position: relative;
	z-index: 2;
	animation: slideLeft 1s ease;
}

.hero-badge {
	overflow: hidden;
	border: 1px solid rgba(255,255,255,0.08);
}

.hero-title {
	animation: glowSoft 4s ease-in-out infinite alternate;
}

.hero-text {
	opacity: 0.8;
	animation: fadeUp 1.2s ease;
}

.hero-btn {
	transition: 0.3s ease;
}

.hero-btn:hover {
	transform: translateY(-3px);
}

/* ================= IMAGE ================= */

.hero-image-wrap {
	position: relative;
	z-index: 2;
	animation: slideRight 1s ease;
}

.hero-image {
	width: 100%;
	max-width: 520px;
	animation: floatImage 6s ease-in-out infinite;
	filter: drop-shadow(0 20px 40px rgba(54,113,233,0.2));
	transition: 0.4s ease;
}

.hero-image:hover {
	transform: scale(1.03);
}

/* ================= ANIMATIONS ================= */

@keyframes slideLeft {
	from { opacity: 0; transform: translateX(-60px); }
	to { opacity: 1; transform: translateX(0); }
}

@keyframes slideRight {
	from { opacity: 0; transform: translateX(60px); }
	to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeUp {
	from { opacity: 0; transform: translateY(20px); }
	to { opacity: 1; transform: translateY(0); }
}

/* soft crypto glow */
@keyframes glowSoft {
	from { text-shadow: 0 0 10px rgba(54,113,233,0.2); }
	to { text-shadow: 0 0 22px rgba(54,113,233,0.4); }
}

/* floating UI feel */
@keyframes floatSoft {
	0% { transform: translateY(0); }
	50% { transform: translateY(-3px); }
	100% { transform: translateY(0); }
}

/* background pulse */
@keyframes breathe {
	0% { opacity: 0.7; }
	50% { opacity: 1; }
	100% { opacity: 0.7; }
}

/* grid/data flow */
@keyframes flow {
	from { transform: translateY(0); }
	to { transform: translateY(40px); }
}

/* image float */
@keyframes floatImage {
	0% { transform: translateY(0); }
	50% { transform: translateY(-10px); }
	100% { transform: translateY(0); }
}

/* market indicator pulse */
@keyframes pulseMarket {
	0% { box-shadow: 0 0 0 rgba(0,255,136,0.2); }
	50% { box-shadow: 0 0 12px rgba(0,255,136,0.5); }
	100% { box-shadow: 0 0 0 rgba(0,255,136,0.2); }
}

</style>