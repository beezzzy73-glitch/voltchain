<section class="activity">

	<!-- HEADER -->
	<div class="header">
		<p class="title">Live Activity</p>
		<p class="sub">Real-time platform events</p>
	</div>

	<!-- FEED -->
	<div class="feed">

		<div class="item">
			<div class="left">
				<span class="dot green"></span>
				<div>
					<p class="main">Deposit Completed</p>
					<p class="meta">+2.45 BTC • 2 min ago</p>
				</div>
			</div>
			<p class="tag success">SUCCESS</p>
		</div>

		<div class="item">
			<div class="left">
				<span class="dot blue"></span>
				<div>
					<p class="main">Swap Executed</p>
					<p class="meta">ETH → USDT • 5 min ago</p>
				</div>
			</div>
			<p class="tag">TRADE</p>
		</div>

		<div class="item">
			<div class="left">
				<span class="dot yellow"></span>
				<div>
					<p class="main">Withdrawal Pending</p>
					<p class="meta">$12,400 • 8 min ago</p>
				</div>
			</div>
			<p class="tag warning">PENDING</p>
		</div>

		<div class="item">
			<div class="left">
				<span class="dot green"></span>
				<div>
					<p class="main">New Wallet Connected</p>
					<p class="meta">MetaMask • 12 min ago</p>
				</div>
			</div>
			<p class="tag success">CONNECTED</p>
		</div>

	</div>

</section>


<style>
    /* ================= BASE ================= */

.activity {
	background: rgba(255,255,255,0.02);
	border-radius: 14px;
	padding: 14px;
	overflow: hidden;
	position: relative;
	box-shadow: 0 10px 35px rgba(0,0,0,0.35);
	animation: fadeIn 0.5s ease;
}

/* ================= HEADER ================= */

.header {
	margin-bottom: 12px;
}

.title {
	font-size: 14px;
	font-weight: 600;
	color: white;
}

.sub {
	font-size: 11px;
	color: var(--color-gray);
	margin-top: 2px;
}

/* ================= FEED ================= */

.feed {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

/* ITEM */
.item {
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 10px;
	border-radius: 10px;

	background: rgba(255,255,255,0.02);
	border: 1px solid rgba(255,255,255,0.05);

	transition: 0.3s ease;
	position: relative;
	overflow: hidden;
}

.item:hover {
	transform: translateX(4px);
	border-color: var(--color-primary);
	background: rgba(54,113,233,0.06);
}

/* LEFT */
.left {
	display: flex;
	align-items: center;
	gap: 10px;
}

.main {
	font-size: 13px;
	color: white;
	font-weight: 500;
}

.meta {
	font-size: 11px;
	color: var(--color-gray);
	margin-top: 2px;
}

/* DOTS */
.dot {
	width: 8px;
	height: 8px;
	border-radius: 50%;
}

.dot.green {
	background: #22c55e;
	box-shadow: 0 0 10px rgba(34,197,94,0.5);
}

.dot.blue {
	background: #3b82f6;
	box-shadow: 0 0 10px rgba(59,130,246,0.5);
}

.dot.yellow {
	background: #facc15;
	box-shadow: 0 0 10px rgba(250,204,21,0.5);
}

/* TAGS */
.tag {
	font-size: 10px;
	padding: 4px 8px;
	border-radius: 999px;
	background: rgba(255,255,255,0.03);
	border: 1px solid rgba(255,255,255,0.06);
	color: var(--color-gray);
}

.tag.success {
	color: #22c55e;
	border-color: rgba(34,197,94,0.3);
}

.tag.warning {
	color: #facc15;
	border-color: rgba(250,204,21,0.3);
}

/* ================= ANIMATION ================= */

@keyframes fadeIn {
	from { opacity: 0; transform: translateY(10px); }
	to { opacity: 1; transform: translateY(0); }
}
</style>