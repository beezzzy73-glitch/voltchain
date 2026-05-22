<section class="portfolio-header relative overflow-hidden rounded-2xl">

	<!-- BACKGROUND -->
	<div class="glow one"></div>
	<div class="glow two"></div>
	<div class="grid-bg"></div>

	<!-- CONTENT -->
	<div class="content">

		<div class="left">

			<p class="label">PORTFOLIO BALANCE</p>

			<h1 class="balance">$248,920.00</h1>

			<div class="stats">

				<p class="gain">+18.2% (24h)</p>
				<p class="muted">All-time growth: +64.3%</p>

			</div>

		</div>

		<div class="right">

			<div class="mini-card">
				<p class="k">Available</p>
				<p class="v">$42,100</p>
			</div>

			<div class="mini-card">
				<p class="k">Assets</p>
				<p class="v">12</p>
			</div>

			<div class="mini-card">
				<p class="k">Risk</p>
				<p class="v mid">Medium</p>
			</div>

		</div>

	</div>

</section>

<style>

/* ================= BASE ================= */

.portfolio-header {
	background: rgba(255,255,255,0.02);
	border: 1px solid rgba(255,255,255,0.04);
	padding: 20px;
}

/* ================= BACKGROUND ================= */

.glow {
	position: absolute;
	width: 420px;
	height: 420px;
	border-radius: 50%;
	filter: blur(140px);
	opacity: 0.12;
}

.glow.one {
	background: var(--color-primary);
	top: -180px;
	right: -180px;
}

.glow.two {
	background: var(--color-purple);
	bottom: -180px;
	left: -180px;
}

.grid-bg {
	position: absolute;
	inset: 0;
	background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px);
	background-size: 60px 60px;
	opacity: 0.15;
}

/* ================= CONTENT ================= */

.content {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
	position: relative;
	z-index: 2;
}

/* LEFT */

.label {
	font-size: 10px;
	color: var(--color-gray);
	letter-spacing: 1px;
}

.balance {
	font-size: 34px;
	font-weight: 600;
	color: white;
	margin-top: 6px;
}

.stats {
	margin-top: 6px;
}

.gain {
	font-size: 12px;
	color: #22c55e;
}

.muted {
	font-size: 11px;
	color: rgba(255,255,255,0.5);
}

/* RIGHT */

.right {
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
}

.mini-card {
	padding: 12px;
	border-radius: 12px;
	background: rgba(255,255,255,0.02);
	border: 1px solid rgba(255,255,255,0.04);
	min-width: 110px;
	transition: 0.25s ease;
}

.mini-card:hover {
	transform: translateY(-3px);
	border-color: var(--color-primary);
}

.k {
	font-size: 10px;
	color: var(--color-gray);
}

.v {
	font-size: 13px;
	color: white;
	font-weight: 600;
}

.v.mid {
	color: #facc15;
}

/* ================= RESPONSIVE ================= */

@media (max-width: 768px) {

	.content {
		flex-direction: column;
		align-items: flex-start;
	}

	.balance {
		font-size: 26px;
	}

	.right {
		width: 100%;
	}
}

</style>