<section class="dock">

	<!-- LEFT INFO STRIP -->
	<div class="meta">
		<p class="label">Quick Actions</p>
		<p class="sub">Instant execution layer</p>
	</div>

	<!-- DIVIDER -->
	<div class="divider"></div>

	<!-- ACTIONS ROW (NOT GRID) -->
	<div class="actions">

		<a href="#" class="btn deposit">
			<span class="dot"></span>
			<span>Deposit</span>
		</a>

		<a href="#" class="btn withdraw">
			<span class="dot"></span>
			<span>Withdraw</span>
		</a>

		<a href="#" class="btn swap">
			<span class="dot"></span>
			<span>Swap</span>
		</a>

		<a href="#" class="btn send">
			<span class="dot"></span>
			<span>Send</span>
		</a>

	</div>

</section>

<style>

/* ================= MAIN DOCK ================= */

.dock {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;

	padding: 14px 16px;

	border-radius: 16px;

	background: rgba(255,255,255,0.025);
	border: 1px solid rgba(255,255,255,0.06);

	backdrop-filter: blur(18px);

	position: relative;
	overflow: hidden;

	animation: fadeIn 0.5s ease;
}

/* subtle moving light band */
.dock::before {
	content: "";
	position: absolute;
	inset: 0;

	background: linear-gradient(
		120deg,
		transparent 20%,
		rgba(255,255,255,0.05),
		transparent 80%
	);

	transform: translateX(-100%);
	animation: sweep 6s infinite linear;
	opacity: 0.6;
}

/* ================= META ================= */

.meta {
	display: flex;
	flex-direction: column;
	min-width: 140px;
}

.label {
	font-size: 13px;
	font-weight: 600;
}

.sub {
	font-size: 11px;
	color: var(--color-gray);
	opacity: 0.7;
}

/* ================= DIVIDER ================= */

.divider {
	width: 1px;
	height: 28px;
	background: rgba(255,255,255,0.08);
}

/* ================= ACTIONS ROW ================= */

.actions {
	display: flex;
	align-items: center;
	gap: 10px;
	flex: 1;
}

/* ================= BUTTON ================= */

.btn {
	position: relative;

	display: flex;
	align-items: center;
	gap: 6px;

	padding: 8px 12px;

	border-radius: 999px;

	font-size: 12px;
	color: white;

	background: rgba(255,255,255,0.03);
	border: 1px solid rgba(255,255,255,0.06);

	text-decoration: none;

	transition: 0.25s ease;
	overflow: hidden;
}

/* hover lift ONLY (no scaling chaos) */
.btn:hover {
	transform: translateY(-2px);
	border-color: var(--color-primary);
}

/* small status dot */
.dot {
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: rgba(255,255,255,0.4);
}

/* color identity per action */
.deposit .dot { background: #3671e9; }
.withdraw .dot { background: #ff4d4d; }
.swap .dot { background: #8b5cf6; }
.send .dot { background: #00d4a6; }

/* hover glow (subtle, not noisy) */
.btn::after {
	content: "";
	position: absolute;
	inset: 0;
	background: radial-gradient(circle at center, rgba(54,113,233,0.15), transparent 70%);
	opacity: 0;
	transition: 0.3s ease;
}

.btn:hover::after {
	opacity: 1;
}

/* ================= ANIMATIONS ================= */

@keyframes fadeIn {
	from { opacity: 0; transform: translateY(8px); }
	to { opacity: 1; transform: translateY(0); }
}

@keyframes sweep {
	0% { transform: translateX(-100%); }
	100% { transform: translateX(100%); }
}

/* ================= RESPONSIVE ================= */

@media (max-width: 640px) {
	.dock {
		flex-direction: column;
		align-items: flex-start;
	}

	.divider {
		display: none;
	}

	.actions {
		flex-wrap: wrap;
	}
}

</style>