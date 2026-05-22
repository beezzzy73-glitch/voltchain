<script lang="ts">
	import ButtonLink from "./ui/ButtonLink.svelte";

	let hashRate = $state("");
	let revenue = $state(0.05513059);

	let interval: any;

	function startCounter() {
		clearInterval(interval);

		let target = 0.12845921;
		let step = (target - revenue) / 60;

		interval = setInterval(() => {
			revenue = +(revenue + step).toFixed(8);

			if (revenue >= target) {
				revenue = target;
				clearInterval(interval);
			}
		}, 80);
	}
</script>

<!-- ================= SECTION 1 ================= -->
<section class="grid items-center gap-10 bg-base px-5 @3xl:grid-cols-2 @3xl:px-10 why-section">

	<div class="bg-orb one"></div>
	<div class="bg-orb two"></div>
	<div class="grid-bg"></div>

	<div class="image-wrap">
		<img src="/illustrations/more.svg" alt="Crypto illustration" />
	</div>

	<div class="space-y-7 content">
		<p class="text-2xl font-bold @3xl:text-3xl">Why you should choose CRAPPO</p>
		<p>
			Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.
		</p>
		<ButtonLink href="" />
	</div>
</section>

<!-- ================= SAFE FLOAT WRAPPER ================= -->
<section class="calc-wrapper earn-section">

	<div class="bg-orb three"></div>
	<div class="grid-bg"></div>

	<div class="calc-card w-full @3xl:w-200 rounded-2xl p-6 h-70">

		<div class="flex gap-3">
			<input
				class="input"
				type="text"
				placeholder="Enter your hash rate"
				bind:value={hashRate}
			/>

			<select class="select">
				<option>Bitcoin</option>
			</select>

			<button class="btn" onclick={startCounter}>
				Calculate
			</button>
		</div>

		<div class="revenue">
			<p class="label">ESTIMATED 24 HOURS REVENUE</p>

			<p class="value">
				{revenue.toFixed(8)} ETH
				<span class="price">($1275)</span>
			</p>

			<p class="note">
				Revenue updates live based on mining conditions.
			</p>
		</div>

	</div>
</section>

<style>

/* ================= SAFE LAYOUT FIX ================= */

.calc-wrapper {
	position: relative;
	display: flex;
	justify-content: center;

	/* 👇 THIS is the key fix: reserves space so nothing breaks */
	padding: 60px 20px 40px;
	margin-top: -40px;
	z-index: 20;
}

/* ================= BACKGROUNDS ================= */

.why-section,
.earn-section {
	position: relative;
	overflow: hidden;
}

.bg-orb {
	position: absolute;
	width: 600px;
	height: 600px;
	border-radius: 50%;
	filter: blur(160px);
	opacity: 0.12;
	z-index: 0;
}

.bg-orb.one { background: var(--color-primary); top: -250px; left: -250px; }
.bg-orb.two { background: var(--color-purple); bottom: -250px; right: -250px; }
.bg-orb.three { background: #00ffae; top: -200px; left: 50%; opacity: 0.08; }

.grid-bg {
	position: absolute;
	inset: 0;
	background-image:
		linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
		linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
	background-size: 70px 70px;
	animation: moveGrid 18s linear infinite;
	opacity: 0.2;
	z-index: 0;
}

/* ================= CARD ================= */

.calc-card {
	background: rgba(255,255,255,0.04);
	border: 1px solid rgba(255,255,255,0.08);
	backdrop-filter: blur(14px);
	box-shadow: 0 25px 80px rgba(0,0,0,0.35);
	z-index: 10;
}

/* inputs */
.input, .select {
	flex: 1;
	padding: 12px;
	border-radius: 10px;
	background: rgba(0,0,0,0.2);
	color: white;
	border: 1px solid rgba(255,255,255,0.1);
}

/* button */
.btn {
	padding: 12px 18px;
	border-radius: 10px;
	background: var(--color-primary);
	color: white;
	cursor: pointer;
}

/* revenue */
.revenue {
	margin-top: 20px;
}

.label {
	color: var(--color-primary);
	font-weight: bold;
	font-size: 12px;
}

.value {
	font-size: 22px;
	font-weight: bold;
	margin-top: 5px;
}

.price {
	color: var(--color-primary);
}

.note {
	font-size: 12px;
	opacity: 0.6;
	margin-top: 5px;
}

@keyframes moveGrid {
	0% { transform: translateY(0); }
	100% { transform: translateY(60px); }
}

</style>