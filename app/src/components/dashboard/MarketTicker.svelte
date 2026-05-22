<section class="ticker">

	<!-- LABEL -->
	<div class="label">
		<p>Live Market</p>
	</div>

	<!-- TRACK -->
	<div class="track">

		<div class="item up">
			<span>BTC</span>
			<span>$68,420</span>
			<span>+2.4%</span>
		</div>

		<div class="item up">
			<span>ETH</span>
			<span>$3,520</span>
			<span>+1.8%</span>
		</div>

		<div class="item down">
			<span>SOL</span>
			<span>$142</span>
			<span>-1.2%</span>
		</div>

		<div class="item up">
			<span>BNB</span>
			<span>$610</span>
			<span>+0.9%</span>
		</div>

		<div class="item down">
			<span>XRP</span>
			<span>$0.52</span>
			<span>-0.6%</span>
		</div>

		<!-- duplicate for seamless loop -->
		<div class="item up">
			<span>BTC</span>
			<span>$68,420</span>
			<span>+2.4%</span>
		</div>

		<div class="item up">
			<span>ETH</span>
			<span>$3,520</span>
			<span>+1.8%</span>
		</div>

	</div>

</section>

<style>

/* ================= MAIN ================= */

.ticker {
	display: flex;
	align-items: center;
	gap: 16px;

	padding: 12px 14px;

	border-radius: 14px;

	background: rgba(255,255,255,0.03);
	border: 1px solid rgba(255,255,255,0.06);

	backdrop-filter: blur(16px);

	overflow: hidden;
	position: relative;

	animation: fadeIn 0.6s ease;
}

/* ================= LABEL ================= */

.label {
	min-width: 90px;
	font-size: 12px;
	color: var(--color-gray);
	opacity: 0.8;
}

/* ================= TRACK ================= */

.track {
	display: flex;
	gap: 18px;
	width: max-content;

	animation: scroll 18s linear infinite;
}

/* ================= ITEM ================= */

.item {
	display: flex;
	gap: 8px;
	align-items: center;

	padding: 6px 10px;
	border-radius: 999px;

	font-size: 12px;

	border: 1px solid rgba(255,255,255,0.06);
	background: rgba(255,255,255,0.02);

	white-space: nowrap;

	transition: 0.2s ease;
}

/* hover */
.item:hover {
	transform: scale(1.05);
	border-color: var(--color-primary);
}

/* UP / DOWN STATES */
.up span:last-child {
	color: #00ff88;
	text-shadow: 0 0 10px rgba(0,255,136,0.3);
}

.down span:last-child {
	color: #ff4d4d;
	text-shadow: 0 0 10px rgba(255,0,0,0.2);
}

/* ================= ANIMATION ================= */

@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(-50%); }
}

@keyframes fadeIn {
	from { opacity: 0; transform: translateY(6px); }
	to { opacity: 1; transform: translateY(0); }
}

/* ================= RESPONSIVE ================= */

@media (max-width: 768px) {

	.ticker {
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
	}

	.track {
		animation-duration: 25s;
	}
}

@media (max-width: 480px) {

	.item {
		font-size: 11px;
		padding: 5px 8px;
	}

	.label {
		font-size: 11px;
	}
}

</style>