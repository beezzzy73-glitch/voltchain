<section class="w-full rounded-xl bg-base border border-white/5 overflow-hidden relative">

	<!-- TOP STATUS BAR -->
	<div class="topbar">

		<div class="left">
			<span class="dot"></span>
			<span class="label">AI ENGINE ACTIVE</span>
		</div>

		<div class="right">
			<span class="tag">BTC / USD</span>
			<span class="tag">REAL-TIME</span>
		</div>

	</div>

	<!-- MAIN CONTENT GRID -->
	<div class="content">

		<!-- SIGNAL ZONE -->
		<div class="signal">

			<p class="headline">
				Bullish Momentum Building
			</p>

			<p class="desc">
				High-volume accumulation detected with breakout probability increasing across major liquidity zones.
			</p>

		</div>

		<!-- ANALYTICS RAIL -->
		<div class="rail">

			<div class="item">
				<p class="k">Confidence</p>
				<p class="v">82%</p>
				<div class="bar"></div>
			</div>

			<div class="item">
				<p class="k">Trend</p>
				<p class="v up">Bullish</p>
				<div class="bar upbar"></div>
			</div>

			<div class="item">
				<p class="k">Horizon</p>
				<p class="v">6–12h</p>
				<div class="bar"></div>
			</div>

		</div>

	</div>

</section>


<style>
    /* ================= TOP BAR ================= */

.topbar {
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 12px 14px;
	border-bottom: 1px solid rgba(255,255,255,0.06);

	background: rgba(255,255,255,0.02);
	backdrop-filter: blur(10px);
}

.left {
	display: flex;
	align-items: center;
	gap: 8px;
}

.label {
	font-size: 11px;
	letter-spacing: 1px;
	color: var(--color-gray);
}

/* make tags wrap nicely on small screens */
.right {
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
	justify-content: flex-end;
}

/* ================= TAG ================= */

.tag {
	font-size: 10px;
	padding: 3px 9px;
	border-radius: 999px;

	background: rgba(255,255,255,0.03);
	border: 1px solid rgba(255,255,255,0.06);
	color: var(--color-gray);

	transition: 0.3s ease;
}

.tag:hover {
	transform: translateY(-1px);
	border-color: var(--color-primary);
}

/* ================= LIVE DOT ================= */

.dot {
	width: 7px;
	height: 7px;
	border-radius: 50%;
	background: #22c55e;
	box-shadow: 0 0 10px rgba(34,197,94,0.6);
	animation: pulse 1.6s infinite ease-in-out;
}

/* ================= MAIN GRID (RESPONSIVE FIX) ================= */

.content {
	display: grid;
	grid-template-columns: 1.4fr 1fr;
	gap: 14px;
	padding: 14px;
}

/* mobile stack */
@media (max-width: 768px) {
	.content {
		grid-template-columns: 1fr;
	}
}

/* ================= SIGNAL ================= */

.signal {
	padding: 6px;
}

.headline {
	font-size: 18px;
	font-weight: 600;
	color: white;
	margin-bottom: 6px;

	letter-spacing: -0.2px;
}

.desc {
	font-size: 12px;
	color: var(--color-gray);
	line-height: 1.6;
	opacity: 0.9;
}

/* ================= RAIL ================= */

.rail {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

/* metric cards feel more premium */
.item {
	padding: 11px;
	border-radius: 10px;

	background: rgba(255,255,255,0.02);
	border: 1px solid rgba(255,255,255,0.05);

	transition: 0.25s ease;
	position: relative;
	overflow: hidden;
}

.item::before {
	content: "";
	position: absolute;
	inset: 0;
	background: linear-gradient(
		120deg,
		transparent,
		rgba(54,113,233,0.08),
		transparent
	);
	transform: translateX(-100%);
	transition: 0.6s ease;
}

.item:hover::before {
	transform: translateX(100%);
}

.item:hover {
	transform: translateX(4px);
	border-color: var(--color-primary);
}

/* ================= TEXT ================= */

.k {
	font-size: 11px;
	color: var(--color-gray);
}

.v {
	font-size: 14px;
	font-weight: 600;
	color: white;
	margin-top: 3px;
}

.v.up {
	color: #22c55e;
}

/* ================= BARS ================= */

.bar {
	height: 2px;
	width: 40%;
	margin-top: 6px;
	background: rgba(255,255,255,0.1);
	border-radius: 2px;
}

.upbar {
	background: #22c55e;
	width: 70%;
}

/* ================= ANIMATIONS ================= */

section {
	animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
	from { opacity: 0; transform: translateY(8px); }
	to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
	0% { transform: scale(1); opacity: 1; }
	50% { transform: scale(1.4); opacity: 0.5; }
	100% { transform: scale(1); opacity: 1; }
}
</style>