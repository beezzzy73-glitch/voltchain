<script>
	import Button from "./ui/Button.svelte";
</script>

<section class="contact-section">

	<!-- BACKGROUND EFFECTS -->
	<div class="bg-orb one"></div>
	<div class="bg-orb two"></div>
	<div class="grid-bg"></div>

	<!-- ================= TOP CARD ================= -->
	<div class="card main">

		<p class="title">Company Responsibility</p>

		<p class="desc">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsum facere,
			ut consectetur voluptate optio.
		</p>

		<div class="form">
			<input type="text" placeholder="Enter your email" />
			<Button child="Send Email" />
		</div>

	</div>

	<!-- ================= INFO CARD ================= -->
	<div class="card info">

		<p class="title">Company</p>

		<p class="subtitle">Building the future of digital finance</p>

		<p class="desc">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nam aperiam eum
			laudantium modi error ullam unde odio rerum vero rem velit.
		</p>

		<a class="link" href="#">Connect →</a>

	</div>

</section>

<style>

/* ================= BASE ================= */

.contact-section {
	position: relative;
	padding: 100px 20px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 30px;
	background: var(--color-base);
	overflow: hidden;
}

/* ================= BACKGROUND ================= */

.bg-orb {
	position: absolute;
	width: 500px;
	height: 500px;
	border-radius: 50%;
	filter: blur(140px);
	opacity: 0.12;
	animation: float 10s ease-in-out infinite;
}

.bg-orb.one {
	background: var(--color-primary);
	top: -200px;
	left: -200px;
}

.bg-orb.two {
	background: var(--color-purple);
	bottom: -200px;
	right: -200px;
	animation-direction: reverse;
}

.grid-bg {
	position: absolute;
	inset: 0;
	background-image:
		linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
		linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
	background-size: 70px 70px;
	opacity: 0.15;
	animation: moveGrid 18s linear infinite;
}

/* ================= CARD ================= */

.card {
	background: rgba(255,255,255,0.04);
	border: 1px solid rgba(255,255,255,0.06);
	backdrop-filter: blur(14px);
	border-radius: 18px;
	padding: 28px;
	position: relative;
	z-index: 2;

	transition: 0.3s ease;
	animation: fadeUp 0.8s ease forwards;
}

.card:hover {
	transform: translateY(-10px);
	border-color: var(--color-primary);
	box-shadow: 0 30px 70px rgba(0,0,0,0.35);
}

/* ================= TEXT ================= */

.title {
	font-size: 18px;
	font-weight: 700;
	margin-bottom: 10px;
}

.subtitle {
	font-size: 14px;
	opacity: 0.7;
	margin-bottom: 10px;
}

.desc {
	font-size: 13px;
	opacity: 0.6;
	line-height: 1.6;
}

/* ================= FORM ================= */

.form {
	margin-top: 20px;
	display: flex;
	gap: 10px;
}

.form input {
	flex: 1;
	padding: 12px 14px;
	border-radius: 10px;
	border: 1px solid rgba(255,255,255,0.08);
	background: rgba(0,0,0,0.2);
	color: white;
	outline: none;
	transition: 0.3s ease;
}

.form input:focus {
	border-color: var(--color-primary);
	box-shadow: 0 0 15px rgba(54,113,233,0.25);
}

/* ================= LINK ================= */

.link {
	display: inline-block;
	margin-top: 15px;
	color: var(--color-primary);
	text-decoration: none;
	transition: 0.2s ease;
}

.link:hover {
	transform: translateX(5px);
}

/* ================= ANIMATIONS ================= */

@keyframes fadeUp {
	from {
		opacity: 0;
		transform: translateY(25px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes float {
	0%,100% { transform: translate(0,0); }
	50% { transform: translate(40px,-30px); }
}

@keyframes moveGrid {
	from { transform: translateY(0); }
	to { transform: translateY(60px); }
}

</style>