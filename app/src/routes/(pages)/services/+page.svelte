<script>
	import ButtonLink from "../../../components/ui/ButtonLink.svelte";
	import { onMount } from "svelte";

	let show = $state(false);
	let active = $state(0);

	onMount(() => {
		show = true;
	});

	const systems = [
		{
			title: "Trading Engine Core",
			desc: "Ultra-low latency matching engine processing millions of orders per second.",
			stats: "0.0003s execution"
		},
		{
			title: "Liquidity Network",
			desc: "Deep aggregated liquidity across global crypto exchanges.",
			stats: "500+ pools"
		},
		{
			title: "Security Layer",
			desc: "Multi-signature wallets, AI fraud detection, cold storage vaults.",
			stats: "99.99% protection"
		},
		{
			title: "API Infrastructure",
			desc: "WebSocket + REST APIs for automated trading systems.",
			stats: "99.95% uptime"
		}
	];
</script>

<section class="services">

	<!-- ================= BACKGROUND SYSTEM ================= -->
	<div class="bg-grid"></div>
	<div class="bg-glow one"></div>
	<div class="bg-glow two"></div>

	<!-- ================= HEADER ================= -->
	<div class="header {show ? 'in' : ''}">
		<p class="kicker">EXCHANGE INFRASTRUCTURE</p>
		<h1>High-Performance Crypto Trading Systems</h1>
		<p>
			Institution-grade architecture powering execution, liquidity, security, and global trading.
		</p>
	</div>

	<!-- ================= SYSTEM NAV ================= -->
	<div class="system-nav">
		{#each systems as s, i}
			<button
				class="nav-item {active === i ? 'active' : ''}"
				on:click={() => (active = i)}
			>
				{ s.title }
			</button>
		{/each}
	</div>

	<!-- ================= MAIN DISPLAY ================= -->
	<div class="system-panel">

		<div class="panel-left">
			<p class="panel-title">{systems[active].title}</p>
			<p class="panel-desc">{systems[active].desc}</p>

			<div class="metric">
				<span>Performance Metric</span>
				<strong>{systems[active].stats}</strong>
			</div>

			<div class="actions">
				<ButtonLink href="" children="Deploy System" />
			</div>
		</div>

		<div class="panel-right">
			<div class="pulse-ring"></div>
			<div class="core-node"></div>

			{#each Array(8) as _, i}
				<div class="node" style="--i:{i}"></div>
			{/each}
		</div>

	</div>

	<!-- ================= FEATURE STRIP ================= -->
	<div class="strip">
		<div class="strip-item">⚡ Ultra-Low Latency</div>
		<div class="strip-item">🔐 Bank-Level Security</div>
		<div class="strip-item">🌍 Global Liquidity</div>
		<div class="strip-item">📡 Real-Time APIs</div>
		<div class="strip-item">🧠 AI Risk Engine</div>
	</div>

</section>

<style>

.services {
	min-height: 100vh;
	background: var(--color-base);
	color: white;
	padding: 80px 20px;
	position: relative;
	overflow: hidden;
}

/* ================= BACKGROUND ================= */

.bg-grid {
	position: absolute;
	inset: 0;
	background-image:
		linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
		linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
	background-size: 70px 70px;
	opacity: 0.3;
}

.bg-glow {
	position: absolute;
	width: 500px;
	height: 500px;
	border-radius: 50%;
	filter: blur(160px);
	opacity: 0.18;
}

.bg-glow.one {
	background: var(--color-primary);
	top: -200px;
	right: -200px;
}

.bg-glow.two {
	background: var(--color-purple);
	bottom: -200px;
	left: -200px;
}

/* ================= HEADER ================= */

.header {
	text-align: center;
	max-width: 750px;
	margin: auto;
	opacity: 0;
	transform: translateY(25px);
	transition: 0.8s ease;
}

.header.in {
	opacity: 1;
	transform: translateY(0);
}

.kicker {
	color: var(--color-primary);
	letter-spacing: 2px;
	font-size: 12px;
}

h1 {
	font-size: 34px;
	margin-top: 10px;
}

.header p {
	opacity: 0.7;
	margin-top: 10px;
}

/* ================= NAV ================= */

.system-nav {
	display: flex;
	gap: 10px;
	justify-content: center;
	flex-wrap: wrap;
	margin-top: 50px;
	position: relative;
	z-index: 2;
}

.nav-item {
	padding: 10px 14px;
	border-radius: 999px;
	border: 1px solid rgba(255,255,255,0.08);
	background: rgba(255,255,255,0.02);
	color: white;
	cursor: pointer;
	transition: 0.3s ease;
	font-size: 12px;
}

.nav-item:hover {
	border-color: var(--color-primary);
	transform: translateY(-2px);
}

.nav-item.active {
	background: var(--color-primary);
	box-shadow: 0 0 25px rgba(54,113,233,0.4);
}

/* ================= PANEL ================= */

.system-panel {
	margin-top: 60px;
	display: grid;
	grid-template-columns: 1.2fr 1fr;
	gap: 40px;
	align-items: center;
	position: relative;
	z-index: 2;
}

/* LEFT */

.panel-left {
	background: rgba(255,255,255,0.03);
	border: 1px solid rgba(255,255,255,0.06);
	border-radius: 18px;
	padding: 30px;
	backdrop-filter: blur(12px);
	animation: fadeIn 0.5s ease;
}

.panel-title {
	font-size: 22px;
	font-weight: bold;
}

.panel-desc {
	margin-top: 10px;
	opacity: 0.7;
}

.metric {
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
	padding: 12px;
	border-radius: 12px;
	background: rgba(255,255,255,0.03);
}

.metric strong {
	color: var(--color-primary);
}

/* RIGHT VISUAL ENGINE */

.panel-right {
	position: relative;
	height: 320px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.core-node {
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background: var(--color-primary);
	box-shadow: 0 0 40px rgba(54,113,233,0.6);
	z-index: 2;
	animation: pulse 2s infinite;
}

.node {
	position: absolute;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: white;
	opacity: 0.4;
	transform: rotate(calc(var(--i) * 45deg)) translate(120px);
	animation: orbit 6s linear infinite;
}

/* ================= STRIP ================= */

.strip {
	margin-top: 80px;
	display: flex;
	gap: 20px;
	justify-content: center;
	flex-wrap: wrap;
	position: relative;
	z-index: 2;
}

.strip-item {
	padding: 10px 14px;
	border-radius: 999px;
	background: rgba(255,255,255,0.03);
	border: 1px solid rgba(255,255,255,0.06);
	font-size: 12px;
	transition: 0.3s ease;
}

.strip-item:hover {
	transform: translateY(-3px);
	border-color: var(--color-primary);
}

/* ================= ANIMATIONS ================= */

@keyframes pulse {
	0% { transform: scale(1); }
	50% { transform: scale(1.15); }
	100% { transform: scale(1); }
}

@keyframes orbit {
	from { transform: rotate(calc(var(--i) * 45deg)) translate(120px) rotate(0deg); }
	to { transform: rotate(calc(var(--i) * 45deg)) translate(120px) rotate(360deg); }
}

@keyframes fadeIn {
	from { opacity: 0; transform: translateY(20px); }
	to { opacity: 1; transform: translateY(0); }
}

</style>