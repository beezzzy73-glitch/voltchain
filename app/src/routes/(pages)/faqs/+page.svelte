<script>
	let active = $state('general');
</script>

<section class="faq-page">

	<!-- ================= BACKGROUND ================= -->
	<div class="bg-glow one"></div>
	<div class="bg-glow two"></div>
	<div class="grid-bg"></div>

	{#each Array(18) as _, i (i)}
		<div class="dot" style="--i:{i}"></div>
	{/each}

	<!-- ================= HERO ================= -->
	<div class="hero">
		<p class="tag">KNOWLEDGE BASE</p>

		<h1>
			Frequently Asked Questions <br />
			<span>Everything You Need</span>
		</h1>

		<p class="subtitle">
			Explore answers about trading, wallets, security, and platform tools.
		</p>
	</div>

	<!-- ================= GLASS CATEGORY SWITCH (REPLACES BUTTONS) ================= -->
	<div class="category-bar">
		<button class:active={active === "general"} onclick={() => (active = "general")}>General</button>
		<button class:active={active === "security"} onclick={() => (active = "security")}>Security</button>
		<button class:active={active === "trading"} onclick={() => (active = "trading")}>Trading</button>
		<button class:active={active === "wallets"} onclick={() => (active = "wallets")}>Wallets</button>
		<button class:active={active === "fees"} onclick={() => (active = "fees")}>Fees</button>
	</div>

	<!-- ================= FAQ GRID ================= -->
	<div class="faq-grid">

		<div class="faq-card">
			<details>
				<summary>What is this platform?</summary>
				<p>A modern crypto exchange UI system built for speed, analytics, and secure trading experience.</p>
			</details>
		</div>

		<div class="faq-card">
			<details>
				<summary>Is my wallet secure?</summary>
				<p>Yes. Private keys are never stored and all connections are encrypted end-to-end.</p>
			</details>
		</div>

		<div class="faq-card">
			<details>
				<summary>How fast are transactions?</summary>
				<p>Transactions execute in seconds depending on network congestion and asset type.</p>
			</details>
		</div>

		<div class="faq-card">
			<details>
				<summary>Do I need verification?</summary>
				<p>Basic access is instant. Advanced features may require identity verification.</p>
			</details>
		</div>

		<div class="faq-card">
			<details>
				<summary>Are there trading fees?</summary>
				<p>Minimal network fees apply depending on blockchain activity.</p>
			</details>
		</div>

		<div class="faq-card">
			<details>
				<summary>Can I use mobile?</summary>
				<p>Yes. The interface is fully responsive across all devices.</p>
			</details>
		</div>

	</div>

</section>

<style>

.faq-page {
	background: var(--color-base);
	color: white;
	padding: 80px 20px;
	min-height: 100vh;
	position: relative;
	overflow: hidden;
}

/* ================= BACKGROUND ================= */

.bg-glow {
	position: absolute;
	width: 520px;
	height: 520px;
	border-radius: 50%;
	filter: blur(160px);
	opacity: 0.18;
	z-index: 0;
}

.bg-glow.one {
	background: var(--color-primary);
	top: -220px;
	right: -200px;
	animation: floatGlow 10s ease-in-out infinite;
}

.bg-glow.two {
	background: var(--color-purple);
	bottom: -220px;
	left: -200px;
	animation: floatGlow 12s ease-in-out infinite reverse;
}

.grid-bg {
	position: absolute;
	inset: 0;
	background-image:
		linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
		linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
	background-size: 70px 70px;
	opacity: 0.25;
	animation: gridMove 18s linear infinite;
	z-index: 0;
}

.dot {
	position: absolute;
	width: 4px;
	height: 4px;
	background: rgba(255,255,255,0.12);
	border-radius: 50%;
	left: calc((var(--i) * 6)%100%);
	top: calc((var(--i) * 5)%100%);
	animation: float 6s ease-in-out infinite;
	z-index: 0;
}

/* ================= HERO ================= */

.hero {
	text-align: center;
	max-width: 750px;
	margin: auto;
	position: relative;
	z-index: 2;
}

.tag {
	color: var(--color-primary);
	font-size: 12px;
	letter-spacing: 2px;
}

.hero h1 {
	font-size: 42px;
	font-weight: bold;
	margin-top: 10px;
}

.hero h1 span {
	color: var(--color-primary);
}

.subtitle {
	margin-top: 10px;
	opacity: 0.7;
}

/* ================= CATEGORY BAR (NEW REPLACEMENT) ================= */

.category-bar {
	display: flex;
	justify-content: center;
	gap: 8px;
	margin-top: 40px;
	z-index: 2;
	position: relative;
	flex-wrap: wrap;
}

.category-bar button {
	font-size: 11px;
	padding: 6px 14px;
	border-radius: 999px;
	background: rgba(255,255,255,0.03);
	border: 1px solid rgba(255,255,255,0.06);
	color: white;
	cursor: pointer;
	transition: 0.25s ease;
	backdrop-filter: blur(10px);
}

.category-bar button:hover {
	transform: translateY(-2px);
	border-color: var(--color-primary);
	box-shadow: 0 10px 25px rgba(54,113,233,0.15);
}

.category-bar button.active {
	background: rgba(54,113,233,0.2);
	border-color: var(--color-primary);
	color: white;
	box-shadow: 0 0 25px rgba(54,113,233,0.25);
}

/* ================= FAQ GRID ================= */

.faq-grid {
	max-width: 1000px;
	margin: 60px auto;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
	gap: 16px;
	z-index: 2;
	position: relative;
}

/* ================= 3D CARD ================= */

.faq-card {
	background: rgba(255,255,255,0.03);
	border: 1px solid rgba(255,255,255,0.06);
	border-radius: 16px;
	padding: 18px;
	transition: 0.35s ease;
	transform-style: preserve-3d;
	position: relative;
	overflow: hidden;
}

.faq-card:hover {
	transform: perspective(800px) rotateX(6deg) rotateY(-6deg) translateY(-6px);
	border-color: var(--color-primary);
	box-shadow: 0 20px 50px rgba(54,113,233,0.2);
}

.faq-card::before {
	content: "";
	position: absolute;
	inset: 0;
	background: linear-gradient(120deg, transparent, rgba(255,255,255,0.06), transparent);
	transform: translateX(-100%);
	transition: 0.6s ease;
}

.faq-card:hover::before {
	transform: translateX(100%);
}

/* ================= DETAILS ================= */

summary {
	cursor: pointer;
	font-weight: bold;
	position: relative;
	padding-right: 18px;
	list-style: none;
}

summary::after {
	content: "+";
	position: absolute;
	right: 0;
	color: var(--color-primary);
}

details[open] summary::after {
	content: "-";
}

details p {
	margin-top: 10px;
	font-size: 13px;
	opacity: 0.75;
	line-height: 1.6;
}

/* ================= ANIMATIONS ================= */

@keyframes float {
	0% { transform: translateY(0); }
	50% { transform: translateY(-12px); }
	100% { transform: translateY(0); }
}

@keyframes floatGlow {
	0% { transform: translate(0,0); }
	50% { transform: translate(50px, 30px); }
	100% { transform: translate(0,0); }
}

@keyframes gridMove {
	from { transform: translateY(0); }
	to { transform: translateY(60px); }
}

</style>