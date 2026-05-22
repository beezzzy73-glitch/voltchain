<section class="bg-base pt-20 stats-section">

	<!-- ================= BACKGROUND LAYERS ================= -->
	<div class="bg-orb one"></div>
	<div class="bg-orb two"></div>
	<div class="grid-bg"></div>

	{#each Array(16) as _, i (i)}
		<div class="dot" style="--i:{i}"></div>
	{/each}

	<div class="flex justify-center gap-5 @3xl:gap-20 relative z-10">

		<div class="stat-card flex flex-col items-center gap-2 text-center @3xl:flex-row @3xl:text-start">
			<div class="icon-wrap w-fit rounded-full bg-fore p-5">
				<img src="/icons/Bar Chart.svg" alt="Market statistics icon" />
			</div>
			<div>
				<p class="text-lg font-bold @3xl:text-2xl">30B</p>
				<p class="text-xs text-fore">Digital Currency Exchanged</p>
			</div>
		</div>

		<div class="stat-card flex flex-col items-center gap-2 text-center @3xl:flex-row @3xl:text-start">
			<div class="icon-wrap w-fit rounded-full bg-fore p-5">
				<img src="/icons/Person.svg" alt="Users icon" />
			</div>
			<div>
				<p class="text-lg font-bold @3xl:text-2xl">30B</p>
				<p class="text-xs text-fore">Digital Currency Exchanged</p>
			</div>
		</div>

		<div class="stat-card flex flex-col items-center gap-2 text-center @3xl:flex-row @3xl:text-start">
			<div class="icon-wrap w-fit rounded-full bg-fore p-5">
				<img src="/icons/Earth.svg" alt="Global network icon" />
			</div>
			<div>
				<p class="text-lg font-bold @3xl:text-2xl">30B</p>
				<p class="text-xs text-fore">Digital Currency Exchanged</p>
			</div>
		</div>

	</div>
</section>

<style>

/* ================= SECTION ================= */
.stats-section {
	position: relative;
	overflow: hidden;
}

/* ================= GLOWS ================= */
.bg-orb {
	position: absolute;
	width: 500px;
	height: 500px;
	border-radius: 50%;
	filter: blur(140px);
	opacity: 0.12;
	z-index: 0;
}

.bg-orb.one {
	background: var(--color-primary);
	top: -200px;
	left: -200px;
	animation: floatOrb 10s ease-in-out infinite;
}

.bg-orb.two {
	background: var(--color-purple);
	bottom: -200px;
	right: -200px;
	animation: floatOrb 12s ease-in-out infinite reverse;
}

/* ================= GRID BACKGROUND ================= */
.grid-bg {
	position: absolute;
	inset: 0;
	background-image:
		linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
		linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
	background-size: 70px 70px;
	opacity: 0.12;
	animation: gridMove 18s linear infinite;
	z-index: 0;
}

/* ================= FLOATING DOTS ================= */
.dot {
	position: absolute;
	width: 4px;
	height: 4px;
	background: rgba(255,255,255,0.12);
	border-radius: 50%;
	left: calc((var(--i) * 7)%100%);
	top: calc((var(--i) * 5)%100%);
	animation: floatDot 8s ease-in-out infinite;
	z-index: 0;
}

/* ================= CONTENT LAYER ================= */
.stat-card {
	position: relative;
	z-index: 2;
	opacity: 0;
	transform: translateY(20px);
	animation: fadeUp 0.8s ease forwards;
	transition: transform 0.35s ease;
}

.stat-card:nth-child(1) { animation-delay: 0.1s; }
.stat-card:nth-child(2) { animation-delay: 0.25s; }
.stat-card:nth-child(3) { animation-delay: 0.4s; }

.stat-card:hover {
	transform: translateY(-6px) scale(1.04);
}

/* ICON FLOAT */
.icon-wrap img {
	animation: floatIcon 3.5s ease-in-out infinite;
}

/* hover glow */
.stat-card:hover .icon-wrap {
	box-shadow: 0 0 25px rgba(54,113,233,0.25);
}

/* ================= ANIMATIONS ================= */
@keyframes fadeUp {
	from { opacity: 0; transform: translateY(25px); }
	to { opacity: 1; transform: translateY(0); }
}

@keyframes floatIcon {
	0%,100% { transform: translateY(0); }
	50% { transform: translateY(-6px); }
}

@keyframes floatOrb {
	0% { transform: translate(0,0); }
	50% { transform: translate(50px, 40px); }
	100% { transform: translate(0,0); }
}

@keyframes gridMove {
	from { transform: translateY(0); }
	to { transform: translateY(60px); }
}

@keyframes floatDot {
	0%,100% { transform: translateY(0); }
	50% { transform: translateY(-12px); }
}

</style>