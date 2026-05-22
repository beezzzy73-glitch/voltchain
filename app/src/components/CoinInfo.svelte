<script lang="ts">
	import ButtonLink from "./ui/ButtonLink.svelte";
</script>

<section class="crypto-section">

	<!-- BACKGROUND -->
	<div class="bg-orb one"></div>
	<div class="bg-orb two"></div>

	<!-- HEADER -->
	<div class="header">
		<h1>Trade securely and access high-growth cryptocurrencies</h1>
		<p>Real-time execution, deep liquidity, and institutional-grade security.</p>
	</div>

	<!-- CARDS -->
	<div class="cards">

		<div class="card btc">
			<div class="top">
				<img src="/icons/bit.svg" />
				<span>BTC</span>
			</div>

			<h2>Bitcoin</h2>
			<p>Digital currency with decentralized transaction verification system.</p>

			<div class="action">
				<ButtonLink href="" />
			</div>
		</div>

		<div class="card eth">
			<div class="top">
				<img src="/icons/eth.svg" />
				<span>ETH</span>
			</div>

			<h2>Ethereum</h2>
			<p>Smart contract platform powering decentralized applications.</p>

			<div class="action">
				<ButtonLink href="" />
			</div>
		</div>

		<div class="card ltc">
			<div class="top">
				<img src="/icons/lit.svg" />
				<span>LTC</span>
			</div>

			<h2>Litecoin</h2>
			<p>Fast, low-fee global payments network for instant transfers.</p>

			<div class="action">
				<ButtonLink href="" />
			</div>
		</div>

	</div>
</section>

<style>

/* ================= BASE ================= */

.crypto-section {
	padding: 120px 20px;
	background: var(--color-base);
	color: white;
	position: relative;
	overflow: hidden;
	perspective: 1200px; /* enables 3D depth */
}

/* ================= BACKGROUND ================= */

.bg-orb {
	position: absolute;
	width: 520px;
	height: 520px;
	border-radius: 50%;
	filter: blur(140px);
	opacity: 0.08;
}

.bg-orb.one {
	background: var(--color-primary);
	top: -220px;
	left: -220px;
}

.bg-orb.two {
	background: var(--color-purple);
	bottom: -220px;
	right: -220px;
}

/* ================= HEADER ================= */

.header {
	max-width: 720px;
	margin: 0 auto 60px;
	text-align: center;
}

.header h1 {
	font-size: 28px;
	font-weight: 700;
	line-height: 1.3;
}

.header p {
	margin-top: 10px;
	opacity: 0.65;
	font-size: 14px;
}

/* ================= GRID ================= */

.cards {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
	gap: 22px;
	max-width: 1100px;
	margin: auto;
}

/* ================= CARD ================= */

.card {
	background: rgba(255,255,255,0.03);
	border: 1px solid rgba(255,255,255,0.06);
	border-radius: 16px;

	padding: 24px; /* 👈 more space inside */
	display: flex;
	flex-direction: column;
	gap: 14px; /* 👈 spacing between elements */

	position: relative;

	transform-style: preserve-3d;
	transition: transform 0.35s ease, box-shadow 0.35s ease, border 0.3s ease;
}

/* ================= CLEAN 3D HOVER ================= */

.card:hover {
	transform:
		perspective(1000px)
		rotateX(6deg)
		rotateY(-6deg)
		translateY(-10px)
		scale(1.02);

	box-shadow:
		0 20px 50px rgba(0,0,0,0.35),
		0 0 25px rgba(54,113,233,0.15);

	border-color: rgba(255,255,255,0.15);
}

/* ================= TOP ROW ================= */

.top {
	display: flex;
	align-items: center;
	gap: 10px;
	font-size: 12px;
	opacity: 0.85;
	letter-spacing: 1px;
}

/* ICON */
.top img {
	width: 22px;
	height: 22px;
}

/* TITLE */
.card h2 {
	font-size: 18px;
	font-weight: 600;
	margin-top: 4px;
}

/* TEXT */
.card p {
	font-size: 13px;
	opacity: 0.65;
	line-height: 1.5;
}

/* ACTION */
.action {
	margin-top: auto; /* pushes button to bottom nicely */
}

/* ================= ACCENTS ================= */

.btc:hover {
	box-shadow: 0 20px 50px rgba(247,147,26,0.15);
}

.eth:hover {
	box-shadow: 0 20px 50px rgba(98,126,234,0.12);
}

.ltc:hover {
	box-shadow: 0 20px 50px rgba(180,180,180,0.10);
}

</style>