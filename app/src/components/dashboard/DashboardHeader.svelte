<section class="header">

	<!-- LEFT -->
	<div class="identity">
		<p class="tag">CRYPTO COMMAND CENTER</p>

		<h1 class="title">Welcome back, Trader</h1>

		<p class="subtitle">
			Market session: <span class="live">LIVE</span> • High volatility detected
		</p>
	</div>

	<!-- SEARCH -->
	<div class="search-wrap">
		<input
			type="text"
			placeholder="Search assets, trades, wallets..."
			class="search"
		/>
		<div class="search-glow"></div>
	</div>

	<!-- RIGHT -->
	<div class="status">

		<div class="status-pill">
			<span class="dot"></span>
			<p>Markets Open</p>
		</div>

		<div class="notif">
			🔔
			<span class="badge">3</span>
		</div>

	</div>

</section>

<style>

/* ================= LAYOUT ================= */

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;

	padding: 18px 0;
	flex-wrap: wrap; /* IMPORTANT for responsiveness */
}

/* ================= LEFT ================= */

.identity {
	display: flex;
	flex-direction: column;
	gap: 4px;
	min-width: 220px;
	flex: 1;
}

.tag {
	font-size: 11px;
	letter-spacing: 2px;
	color: var(--color-primary);
	opacity: 0.8;
}

.title {
	font-size: 22px;
	font-weight: 700;
}

.subtitle {
	font-size: 12px;
	color: var(--color-gray);
}

.live {
	color: #00ff88;
	text-shadow: 0 0 10px rgba(0,255,136,0.4);
}

/* ================= SEARCH ================= */

.search-wrap {
	position: relative;
	flex: 1;
	min-width: 220px;
	max-width: 360px;
}

.search {
	width: 100%;
	padding: 10px 14px;

	border-radius: 12px;
	border: 1px solid rgba(255,255,255,0.08);

	background: rgba(255,255,255,0.03);
	color: white;

	outline: none;
	transition: 0.3s ease;
}

.search:focus {
	border-color: var(--color-primary);
	box-shadow: 0 0 20px rgba(54,113,233,0.25);
	transform: scale(1.02);
}

.search-glow {
	position: absolute;
	inset: 0;
	border-radius: 12px;
	background: radial-gradient(circle, rgba(54,113,233,0.2), transparent 70%);
	filter: blur(18px);
	opacity: 0;
	transition: 0.3s ease;
	z-index: -1;
}

.search:focus + .search-glow {
	opacity: 1;
}

/* ================= RIGHT ================= */

.status {
	display: flex;
	align-items: center;
	gap: 12px;
	flex-shrink: 0;
}

/* status pill */
.status-pill {
	display: flex;
	align-items: center;
	gap: 8px;

	padding: 6px 12px;
	border-radius: 999px;

	background: rgba(54,113,233,0.12);
	border: 1px solid rgba(54,113,233,0.35);

	font-size: 12px;

	animation: floatSoft 4s ease-in-out infinite;
}

.dot {
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: #00ff88;
	box-shadow: 0 0 10px #00ff88;
}

/* notification */
.notif {
	position: relative;
	font-size: 18px;
	cursor: pointer;
	transition: 0.3s ease;
}

.notif:hover {
	transform: scale(1.1);
}

.badge {
	position: absolute;
	top: -6px;
	right: -8px;

	background: red;
	color: white;
	font-size: 10px;

	width: 16px;
	height: 16px;
	border-radius: 50%;

	display: flex;
	justify-content: center;
	align-items: center;

	box-shadow: 0 0 10px rgba(255,0,0,0.4);
}

/* ================= RESPONSIVE BREAKPOINT ================= */

@media (max-width: 768px) {

	.header {
		flex-direction: column;
		align-items: flex-start;
	}

	.search-wrap {
		width: 100%;
		max-width: 100%;
	}

	.status {
		width: 100%;
		justify-content: space-between;
	}
}

/* ================= ANIMATION ================= */

@keyframes floatSoft {
	0%,100% { transform: translateY(0); }
	50% { transform: translateY(-3px); }
}

</style>