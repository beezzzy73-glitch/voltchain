<script>
	import AboutBanner from "../../../components/AboutBanner.svelte";
	import Hero from "../../../components/Hero.svelte";
	import ButtonLink from "../../../components/ui/ButtonLink.svelte";
</script>

<Hero />

<!-- ================= ABOUT INTRO ================= -->
<section class="about-intro">

	<div class="bg-orb one"></div>
	<div class="bg-orb two"></div>

	<div class="content">
		<p class="title">Let's Know How Crypto Works</p>
		<p class="desc">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quidem asperiores animi.
			Deserunt doloribus expedita, fugiat ea rem possimus incidunt.
		</p>
	</div>

	<div class="grid-box">

		<div class="card">
			<img src="/icons/learn.svg" alt="Learn crypto icon" />
			<p>Learn Crypto</p>
		</div>

		<div class="card">
			<img src="/icons/wallet.svg" alt="Wallet icon" />
			<p>Secure Wallet</p>
		</div>

		<div class="card">
			<img src="/icons/trade.svg" alt="Trade icon" />
			<p>Start Trading</p>
		</div>

		<div class="card">
			<img src="/icons/growth.svg" alt="Growth icon" />
			<p>Earn Rewards</p>
		</div>

	</div>

</section>

<!-- ================= FEATURE SECTION ================= -->
<section class="feature-section">

	<div class="feature-grid">

		<div class="mini-grid">

			<div class="feature-card">
				<img src="/icons/shield.svg" alt="Security icon" />
				<p>Secure Transactions</p>
				<span>Advanced encryption & protection system</span>
			</div>

			<div class="feature-card">
				<img src="/icons/lock.svg" alt="Lock icon" />
				<p>Safe Storage</p>
				<span>Your assets remain fully protected</span>
			</div>

			<div class="feature-card">
				<img src="/icons/fast.svg" alt="Speed icon" />
				<p>Fast Execution</p>
				<span>Lightning speed trading engine</span>
			</div>

			<div class="feature-card">
				<img src="/icons/global.svg" alt="Global icon" />
				<p>Global Access</p>
				<span>Trade from anywhere in the world</span>
			</div>

		</div>

		<div class="text-side">
			<p class="tag">Exchange Platform</p>
			<h2>Most Trusted & Secure Crypto Exchange</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat perspiciatis
				praesentium autem minima officiis.
			</p>

			<ButtonLink href="Explore more" />
		</div>

	</div>

</section>

<AboutBanner />

<style>

/* ================= BACKGROUND ORBS ================= */

.about-intro {
	position: relative;
	padding: 100px 20px;
	text-align: center;
	overflow: hidden;
	background: var(--color-base);
}

.bg-orb {
	position: absolute;
	width: 500px;
	height: 500px;
	border-radius: 50%;
	filter: blur(140px);
	opacity: 0.12;
	animation: floatOrb 10s infinite ease-in-out;
}

.bg-orb.one {
	background: var(--color-primary);
	top: -200px;
	left: -200px;
}

.bg-orb.two {
	background: var(--color-purple);
	bottom: -200px;
	right: -200px;
	animation-direction: reverse;
}

/* ================= TEXT ================= */

.content .title {
	font-size: 28px;
	font-weight: 700;
	margin-bottom: 10px;
	animation: fadeUp 0.8s ease;
}

.desc {
	max-width: 700px;
	margin: auto;
	opacity: 0.7;
}

/* ================= GRID ================= */

.grid-box {
	margin-top: 50px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	gap: 20px;
}

/* CARD */
.card {
	background: rgba(255,255,255,0.03);
	border: 1px solid rgba(255,255,255,0.06);
	padding: 20px;
	border-radius: 16px;
	transition: 0.3s ease;
	cursor: pointer;
	animation: fadeUp 0.8s ease;
}

.card img {
	width: 32px;
	margin-bottom: 10px;
	animation: floatIcon 3s infinite ease-in-out;
}

.card:hover {
	transform: translateY(-8px) scale(1.03);
	border-color: var(--color-primary);
	box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

/* ================= FEATURE SECTION ================= */

.feature-section {
	padding: 120px 20px;
	background: var(--color-base);
}

.feature-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 40px;
	align-items: center;
}

.mini-grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 15px;
}

/* FEATURE CARD */
.feature-card {
	background: rgba(255,255,255,0.03);
	border: 1px solid rgba(255,255,255,0.06);
	padding: 20px;
	border-radius: 14px;
	transition: 0.3s ease;
}

.feature-card img {
	width: 28px;
	margin-bottom: 10px;
	animation: floatIcon 3s infinite ease-in-out;
}

.feature-card:hover {
	transform: translateY(-6px);
	border-color: var(--color-primary);
}

/* TEXT SIDE */
.text-side h2 {
	font-size: 26px;
	font-weight: 700;
	margin: 10px 0;
}

.text-side .tag {
	color: var(--color-primary);
	font-size: 12px;
	letter-spacing: 2px;
}

/* ================= ANIMATIONS ================= */

@keyframes fadeUp {
	from { opacity: 0; transform: translateY(20px); }
	to { opacity: 1; transform: translateY(0); }
}

@keyframes floatIcon {
	0%,100% { transform: translateY(0); }
	50% { transform: translateY(-6px); }
}

@keyframes floatOrb {
	0%,100% { transform: translate(0,0); }
	50% { transform: translate(40px, -30px); }
}

</style>