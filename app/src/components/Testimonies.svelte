<script>
</script>

<section class="testimony-page">

	<!-- ================= BACKGROUND ================= -->
	<div class="bg-glow one"></div>
	<div class="bg-glow two"></div>
	<div class="grid-bg"></div>

	{#each Array(26) as _, i (i)}
		<div class="dot" style="--i:{i}"></div>
	{/each}

	<!-- ================= HEADER ================= -->
	<div class="header">
		<p class="tag">TRADER FEEDBACK</p>
		<h1>What Users Are Saying</h1>
		<p>Real feedback from active traders using the platform daily.</p>
	</div>

	<!-- ================= RIGHT MARQUEE ================= -->
	<div class="marquee right">
		<div class="track">

			<div class="card">
				<div class="user">
					<img src="https://i.pravatar.cc/80?img=12" />
					<div>
						<p class="name">Alex Carter</p>
						<p class="role">Day Trader</p>
					</div>
				</div>
				<p class="text">“Insanely fast execution. Feels like institutional trading software.”</p>
			</div>

			<div class="card">
				<div class="user">
					<img src="https://i.pravatar.cc/80?img=32" />
					<div>
						<p class="name">Maria Lopez</p>
						<p class="role">Crypto Investor</p>
					</div>
				</div>
				<p class="text">“The UI is clean and extremely smooth. Very professional feel.”</p>
			</div>

			<div class="card">
				<div class="user">
					<img src="https://i.pravatar.cc/80?img=45" />
					<div>
						<p class="name">Chen Wei</p>
						<p class="role">Quant Analyst</p>
					</div>
				</div>
				<p class="text">“Analytics tools feel like a real hedge fund dashboard.”</p>
			</div>

			<div class="card">
				<div class="user">
					<img src="https://i.pravatar.cc/80?img=21" />
					<div>
						<p class="name">Sofia Martins</p>
						<p class="role">Web3 Trader</p>
					</div>
				</div>
				<p class="text">“Everything loads instantly. No lag even during market spikes.”</p>
			</div>

			<div class="card">
				<div class="user">
					<img src="https://i.pravatar.cc/80?img=5" />
					<div>
						<p class="name">Daniel Kim</p>
						<p class="role">DeFi User</p>
					</div>
				</div>
				<p class="text">“Wallet connection flow is super smooth and intuitive.”</p>
			</div>

		</div>
	</div>

	<!-- ================= LEFT MARQUEE ================= -->
	<div class="marquee left">
		<div class="track">

			<div class="card">
				<div class="user">
					<img src="https://i.pravatar.cc/80?img=22" />
					<div>
						<p class="name">James Smith</p>
						<p class="role">Swing Trader</p>
					</div>
				</div>
				<p class="text">“Portfolio tracking is clean and powerful. I love it.”</p>
			</div>

			<div class="card">
				<div class="user">
					<img src="https://i.pravatar.cc/80?img=18" />
					<div>
						<p class="name">Aisha Bello</p>
						<p class="role">Crypto Enthusiast</p>
					</div>
				</div>
				<p class="text">“The animations make everything feel premium and alive.”</p>
			</div>

			<div class="card">
				<div class="user">
					<img src="https://i.pravatar.cc/80?img=9" />
					<div>
						<p class="name">Noah Kim</p>
						<p class="role">DeFi Trader</p>
					</div>
				</div>
				<p class="text">“Execution speed is unmatched. Zero lag experience.”</p>
			</div>

			<div class="card">
				<div class="user">
					<img src="https://i.pravatar.cc/80?img=14" />
					<div>
						<p class="name">Emily Johnson</p>
						<p class="role">Market Analyst</p>
					</div>
				</div>
				<p class="text">“Charts and UI feel like a professional trading terminal.”</p>
			</div>

			<div class="card">
				<div class="user">
					<img src="https://i.pravatar.cc/80?img=28" />
					<div>
						<p class="name">Michael Brown</p>
						<p class="role">Crypto Investor</p>
					</div>
				</div>
				<p class="text">“Very reliable platform with smooth user experience.”</p>
			</div>

		</div>
	</div>

</section>

<style>

.testimony-page {
	background: var(--color-base);
	color: white;
	padding: 90px 20px;
	min-height: 100vh;
	position: relative;
	overflow: hidden;
}

/* ================= BACKGROUND ================= */

.bg-glow {
	position: absolute;
	width: 520px;
	height: 520px;
	border-radius: 50%;
	filter: blur(160px);
	opacity: 0.18;
	z-index: 0;
}

.bg-glow.one {
	background: var(--color-primary);
	top: -220px;
	right: -200px;
	animation: floatGlow 10s ease-in-out infinite;
}

.bg-glow.two {
	background: var(--color-purple);
	bottom: -220px;
	left: -200px;
	animation: floatGlow 12s ease-in-out infinite reverse;
}

.grid-bg {
	position: absolute;
	inset: 0;
	background-image:
		linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
		linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
	background-size: 70px 70px;
	opacity: 0.25;
	animation: gridMove 18s linear infinite;
	z-index: 0;
}

.dot {
	position: absolute;
	width: 4px;
	height: 4px;
	background: rgba(255,255,255,0.12);
	border-radius: 50%;
	left: calc((var(--i) * 6)%100%);
	top: calc((var(--i) * 5)%100%);
	animation: float 6s ease-in-out infinite;
	z-index: 0;
}

/* ================= HEADER ================= */

.header {
	text-align: center;
	max-width: 750px;
	margin: auto;
	position: relative;
	z-index: 2;
}

.tag {
	color: var(--color-primary);
	font-size: 12px;
	letter-spacing: 2px;
}

h1 {
	font-size: 44px;
	font-weight: bold;
	margin-top: 10px;
}

.header p {
	opacity: 0.7;
	margin-top: 8px;
}

/* ================= MARQUEE ================= */

.marquee {
	margin-top: 60px;
	overflow: hidden;
	position: relative;
	z-index: 2;
}

.track {
	display: flex;
	gap: 18px;
	width: max-content;
}

/* directions */
.marquee.left .track {
	animation: scrollLeft 22s linear infinite;
}

.marquee.right .track {
	animation: scrollRight 22s linear infinite;
}

/* ================= CARD ================= */

.card {
	min-width: 340px;
	padding: 18px;
	border-radius: 18px;
	background: rgba(255,255,255,0.03);
	border: 1px solid rgba(255,255,255,0.06);
	backdrop-filter: blur(12px);
	transition: 0.35s ease;
	cursor: pointer;
}

.card:hover {
	transform: perspective(900px) rotateY(-6deg) translateY(-8px);
	border-color: var(--color-primary);
	box-shadow: 0 25px 60px rgba(54,113,233,0.25);
}

/* ================= USER ================= */

.user {
	display: flex;
	align-items: center;
	gap: 12px;
	margin-bottom: 12px;
}

.user img {
	width: 44px;
	height: 44px;
	border-radius: 50%;
	border: 2px solid rgba(54,113,233,0.4);
}

.name {
	font-weight: bold;
	font-size: 14px;
}

.role {
	font-size: 12px;
	opacity: 0.6;
}

.text {
	font-size: 13px;
	opacity: 0.8;
	line-height: 1.5;
}

/* ================= ANIMATION ================= */

@keyframes scrollLeft {
	from { transform: translateX(0); }
	to { transform: translateX(-50%); }
}

@keyframes scrollRight {
	from { transform: translateX(-50%); }
	to { transform: translateX(0); }
}

@keyframes float {
	0% { transform: translateY(0); }
	50% { transform: translateY(-12px); }
	100% { transform: translateY(0); }
}

@keyframes floatGlow {
	0% { transform: translate(0,0); }
	50% { transform: translate(50px, 30px); }
	100% { transform: translate(0,0); }
}

@keyframes gridMove {
	from { transform: translateY(0); }
	to { transform: translateY(60px); }
}

</style>