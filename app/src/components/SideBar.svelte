<aside class="sidebar-container">

	<!-- glow background -->
	<div class="sidebar-glow"></div>

	<!-- HEADER -->
	<div class="flex items-center justify-between mb-10 relative z-10">
		<div class="flex items-center gap-3">
			<div class="logo-dot"></div>

			<div>
				<p class="text-white font-bold text-lg">CryptoX</p>
				<p class="text-gray text-xs">Trading Core</p>
			</div>
		</div>

		<span class="text-white opacity-70">🔔</span>
	</div>

	<!-- NAV LINKS -->
	<nav class="flex flex-col gap-2 relative z-10">

		<a href="/dashboard" class="nav-item">
			<span>📊</span>
			<span>Dashboard</span>
		</a>

		<a href="/markets" class="nav-item">
			<span>📈</span>
			<span>Markets</span>
		</a>

		<a href="/portfolio" class="nav-item">
			<span>💼</span>
			<span>Portfolio</span>
		</a>

		<a href="/wallet" class="nav-item">
			<span>👛</span>
			<span>Wallet</span>
		</a>

		<a href="/trading" class="nav-item">
			<span>⚡</span>
			<span>Trading</span>
		</a>

		<a href="/security" class="nav-item">
			<span>🛡️</span>
			<span>Security</span>
		</a>

		<a href="/settings" class="nav-item">
			<span>⚙️</span>
			<span>Settings</span>
		</a>

	</nav>

	<!-- WALLET SUMMARY -->
	<div class="wallet-card mt-10 relative z-10">

		<p class="text-xs text-gray">Available Balance</p>
		<p class="text-xl font-bold">$24,892.00</p>
		<p class="text-green text-sm mt-1">+12.4% today</p>

	</div>

</aside>


<style>
    .sidebar-container {
	position: relative;
	height: 100vh;
	padding: 24px;
	background: var(--color-base);
	border-right: 1px solid rgba(255, 255, 255, 0.06);
	overflow: hidden;
}

/* glow background */
.sidebar-glow {
	position: absolute;
	inset: -200px;
	background:
		radial-gradient(circle at 30% 20%, rgba(54, 113, 233, 0.25), transparent 40%),
		radial-gradient(circle at 70% 80%, rgba(43, 7, 110, 0.35), transparent 45%);
	filter: blur(60px);
	opacity: 0.7;
	animation: floatGlow 12s ease-in-out infinite;
	z-index: 0;
}

/* logo pulse */
.logo-dot {
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: var(--color-primary);
	box-shadow: 0 0 20px var(--color-primary);
	animation: pulseDot 2.5s infinite;
}

/* nav link */
.nav-item {
	display: flex;
	align-items: center;
	gap: 12px;

	padding: 12px 14px;
	border-radius: 14px;

	color: rgba(255, 255, 255, 0.75);
	text-decoration: none;

	transition: all 0.3s ease;
	position: relative;
}

/* hover */
.nav-item:hover {
	background: rgba(255, 255, 255, 0.04);
	transform: translateX(6px);
	color: white;
}

/* glowing hover line */
.nav-item::before {
	content: "";
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	width: 3px;
	height: 0%;
	background: var(--color-primary);
	border-radius: 10px;
	transition: 0.3s ease;
	opacity: 0;
}

.nav-item:hover::before {
	height: 60%;
	opacity: 1;
}

/* wallet card */
.wallet-card {
	padding: 16px;
	border-radius: 18px;

	background: linear-gradient(
		135deg,
		rgba(54, 113, 233, 0.2),
		rgba(43, 7, 110, 0.3)
	);

	border: 1px solid rgba(255, 255, 255, 0.08);

	backdrop-filter: blur(12px);

	animation: floatCard 6s ease-in-out infinite;
}

/* animations */
@keyframes floatGlow {
	0% { transform: translate(0, 0); }
	50% { transform: translate(40px, 30px); }
	100% { transform: translate(0, 0); }
}

@keyframes pulseDot {
	0% { transform: scale(1); box-shadow: 0 0 0 rgba(54,113,233,0.4); }
	50% { transform: scale(1.2); box-shadow: 0 0 18px rgba(54,113,233,0.8); }
	100% { transform: scale(1); box-shadow: 0 0 0 rgba(54,113,233,0.4); }
}

@keyframes floatCard {
	0% { transform: translateY(0); }
	50% { transform: translateY(-6px); }
	100% { transform: translateY(0); }
}
</style>