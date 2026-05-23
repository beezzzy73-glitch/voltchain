<script lang="ts">
	import ButtonLink from './ui/ButtonLink.svelte';

	let mobileMenu = $state(false);
</script>

<!-- ================= MARKET TICKER ================= -->
<div class="market-ticker">
	<div class="ticker-track">
		<!-- SET 1 -->
		<span class="up">BTC $67,420 ▲2.4%</span>
		<span class="up">ETH $3,510 ▲1.1%</span>
		<span class="down">SOL $142 ▼0.8%</span>
		<span class="up">BNB $580 ▲0.6%</span>
		<span class="down">XRP $0.62 ▼0.3%</span>
		<span class="up">ADA $0.48 ▲1.2%</span>
		<span class="up">DOGE $0.15 ▲0.9%</span>
		<span class="down">AVAX $38.2 ▼1.4%</span>
		<span class="up">MATIC $0.92 ▲2.1%</span>
		<span class="down">LINK $14.8 ▼0.6%</span>

		<!-- SET 2 -->
		<span class="up">BTC $67,420 ▲2.4%</span>
		<span class="up">ETH $3,510 ▲1.1%</span>
		<span class="down">SOL $142 ▼0.8%</span>
		<span class="up">BNB $580 ▲0.6%</span>
		<span class="down">XRP $0.62 ▼0.3%</span>
		<span class="up">ADA $0.48 ▲1.2%</span>
		<span class="up">DOGE $0.15 ▲0.9%</span>
		<span class="down">AVAX $38.2 ▼1.4%</span>
		<span class="up">MATIC $0.92 ▲2.1%</span>
		<span class="down">LINK $14.8 ▼0.6%</span>
	</div>
</div>

<!-- ================= HEADER ================= -->
<header class="crypto-header">
	<nav class="nav">
		<!-- LOGO -->
		<div class="logo">
			<p>Crypto</p>
			<span class="live-dot"></span>
		</div>

		<!-- DESKTOP LINKS -->
		<div class="links desktop-links">
			<a class="nav-item" href="home">Home</a>
			<a class="nav-item" href="about">About</a>
			<a class="nav-item" href="contact">Contact</a>
			<a class="nav-item" href="features">Features</a>
			<a class="nav-item" href="services">Services</a>

			<div class="divider">|</div>

			<ButtonLink href="wallet-connect" children="Connect Wallet" />
		</div>

		<!-- MOBILE MENU BUTTON -->
		<button class="menu-btn" on:click={() => (mobileMenu = !mobileMenu)}> ☰ </button>
	</nav>

	<!-- MOBILE MENU -->
	{#if mobileMenu}
		<div class="mobile-menu">
			<a class="mobile-item" href="home">Home</a>
			<a class="mobile-item" href="about">About</a>
			<a class="mobile-item" href="contact">Contact</a>
			<a class="mobile-item" href="features">Features</a>
			<a class="mobile-item" href="services">Services</a>

			<div class="mobile-wallet">
				<ButtonLink href="wallet-connect" children="Connect Wallet" />
			</div>
		</div>
	{/if}
</header>

<style>
	/* ================= HEADER ================= */

	.crypto-header {
		position: sticky;
		top: 0;
		z-index: 50;
		background: rgba(13, 13, 43, 0.85);
		backdrop-filter: blur(14px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
	}

	/* ================= NAV ================= */

	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 18px 20px;
	}

	/* ================= LOGO ================= */

	.logo {
		display: flex;
		align-items: center;
		gap: 8px;
		font-weight: bold;
		color: white;
	}

	.live-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: #00ff9d;
		box-shadow: 0 0 10px #00ff9d;
		animation: pulse 2s infinite;
	}

	/* ================= LINKS ================= */

	.links {
		display: flex;
		align-items: center;
		gap: 22px;
	}

	.nav-item {
		position: relative;
		padding: 6px 2px;
		opacity: 0.85;
		transition: 0.2s ease;
		color: white;
	}

	.nav-item:hover {
		opacity: 1;
		color: var(--color-primary);
		transform: translateY(-1px);
	}

	.nav-item::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -4px;
		width: 0%;
		height: 2px;
		background: var(--color-primary);
		transition: 0.25s ease;
	}

	.nav-item:hover::after {
		width: 100%;
	}

	.divider {
		opacity: 0.3;
		margin: 0 6px;
		color: white;
	}

	/* ================= MOBILE ================= */

	.menu-btn {
		display: none;
		background: transparent;
		border: none;
		color: white;
		font-size: 28px;
		cursor: pointer;
	}

	.mobile-menu {
		display: flex;
		flex-direction: column;
		gap: 18px;
		padding: 20px;
		background: rgba(10, 10, 30, 0.98);
		border-top: 1px solid rgba(255, 255, 255, 0.06);
		animation: fadeIn 0.25s ease;
	}

	.mobile-item {
		color: white;
		font-size: 16px;
		opacity: 0.9;
		transition: 0.2s ease;
	}

	.mobile-item:hover {
		color: var(--color-primary);
	}

	.mobile-wallet {
		margin-top: 10px;
	}

	/* ================= MARKET TICKER ================= */

	.market-ticker {
		background: #0b0b22;
		font-size: 12px;
		padding: 8px 0;
		overflow: hidden;
		border-bottom: 1px solid rgba(255, 255, 255, 0.04);
	}

	.ticker-track {
		display: flex;
		gap: 45px;
		white-space: nowrap;
		width: max-content;
		animation: scroll 28s linear infinite;
		opacity: 0.85;
	}

	/* colors */

	.up {
		color: #00ff9d;
	}
	.down {
		color: #ff4d4d;
	}

	/* ================= RESPONSIVE ================= */

	@media (max-width: 900px) {
		.desktop-links {
			display: none;
		}

		.menu-btn {
			display: block;
		}

		.nav {
			padding: 16px;
		}
	}

	/* ================= ANIMATIONS ================= */

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(1.5);
			opacity: 0.6;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
