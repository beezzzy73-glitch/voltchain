<script>
	import Button from "../../../components/ui/Button.svelte";
</script>

<section class="crypto-section grid @3xl:grid-cols-2 gap-10 px-5 @3xl:px-10 py-10">

	<!-- BACKGROUND EFFECTS -->
	<div class="crypto-bg-circle crypto-bg-circle-one"></div>
	<div class="crypto-bg-circle crypto-bg-circle-two"></div>
	<div class="crypto-grid-lines"></div>
	<div class="crypto-particles"></div>

	<!-- LEFT CONTENT -->
	<div class="crypto-content flex flex-col gap-10">

		<div class="space-y-5">
			<p class="crypto-title text-3xl @3xl:text-6xl font-bold">
				Get Your Free <br />Crypto Bonus Today!
			</p>

			<p class="crypto-text">
				Start your secure financial journey with fast crypto transfers, protected digital transactions,
				and trusted wallet services designed to keep your money safe anytime, anywhere in the world.
			</p>
		</div>

		<div class="space-y-5 crypto-message">

			<p class="text-xl @3xl:text-2xl font-bold">
				A Message From Leadership
			</p>

			<p>
				At our core, we believe everyone deserves a secure and reliable way to move and protect their digital assets.
				Our mission is to provide fast, transparent, and highly secured crypto solutions that users can trust every day.
			</p>

			<div class="flex gap-3 items-center crypto-profile">

				<img src="" alt="" class="crypto-image" />

				<div>
					<p class="font-bold">Daniel Morgan</p>
					<p class="italic">Chief Executive Officer</p>
				</div>

			</div>

		</div>

	</div>

	<!-- FORM -->
	<form action="" class="crypto-form bg-base rounded-2xl p-5 flex flex-col gap-5 @3xl:p-10">

		<div class="flex flex-col gap-2 @3xl:flex-row">

			<div class="flex flex-col gap-3 w-full">
				<label class="font-bold">First Name</label>
				<input type="text" placeholder="Enter your first name" class="crypto-input bg-fore h-12 rounded-xl pl-3" />
			</div>

			<div class="flex flex-col gap-3 w-full">
				<label class="font-bold">Last Name</label>
				<input type="text" placeholder="Enter your last name" class="crypto-input bg-fore h-12 rounded-xl pl-3" />
			</div>

		</div>

		<div class="flex flex-col gap-3 w-full">
			<label class="font-bold">Email</label>
			<input type="email" placeholder="Enter your email" class="crypto-input bg-fore h-12 rounded-xl pl-3" />
		</div>

		<div class="flex flex-col gap-3 w-full">
			<label class="font-bold">Wallet Address</label>
			<input type="text" placeholder="Enter your wallet address" class="crypto-input bg-fore h-12 rounded-xl pl-3" />
		</div>

		<div>
			<Button child="Send message" />
		</div>

	</form>

</section>

<style>

/* ================= MAIN ================= */

.crypto-section {
	position: relative;
	overflow: hidden;
	isolation: isolate;
}

/* ================= BACKGROUND ================= */

.crypto-bg-circle {
	position: absolute;
	border-radius: 50%;
	filter: blur(80px);
	z-index: -1;
	opacity: 0.4;
}

.crypto-bg-circle-one {
	width: 400px;
	height: 400px;
	background: #3671e9;
	top: -120px;
	left: -120px;
	animation: moveCircleOne 12s ease-in-out infinite alternate;
}

.crypto-bg-circle-two {
	width: 350px;
	height: 350px;
	background: #7b3fe4;
	bottom: -120px;
	right: -100px;
	animation: moveCircleTwo 15s ease-in-out infinite alternate;
}

.crypto-grid-lines {
	position: absolute;
	inset: 0;
	z-index: -2;
	background-image:
		linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
		linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
	background-size: 60px 60px;
	mask-image: radial-gradient(circle at center, black, transparent 90%);
	animation: gridMove 20s linear infinite;
}

.crypto-particles {
	position: absolute;
	inset: 0;
	z-index: -1;
	overflow: hidden;
}

.crypto-particles::before,
.crypto-particles::after {
	content: '';
	position: absolute;
	width: 600px;
	height: 600px;
	background-image: radial-gradient(rgba(255,255,255,0.15) 2px, transparent 2px);
	background-size: 50px 50px;
	animation: particlesMove 30s linear infinite;
	opacity: 0.5;
}

.crypto-particles::after {
	animation-direction: reverse;
	opacity: 0.3;
}

/* ================= CONTENT ================= */

.crypto-content {
	animation: slideLeft 1.2s ease;
}

.crypto-title {
	animation: glowText 3s ease-in-out infinite alternate;
}

.crypto-text {
	animation: fadeUp 1.5s ease;
}

.crypto-message {
	animation: floatCard 4s ease-in-out infinite;
}

.crypto-profile {
	animation: fadeUp 2s ease;
}

/* IMAGE ANIMATION (RESTORED) */
.crypto-image {
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background: rgba(255,255,255,0.1);
	animation: imagePulse 2.5s infinite, floatImage 5s ease-in-out infinite;
}

/* ================= FORM ================= */

.crypto-form {
	position: relative;
	overflow: hidden;
	animation: slideRight 1.2s ease;
	backdrop-filter: blur(10px);
}

.crypto-form::before {
	content: '';
	position: absolute;
	width: 200%;
	height: 200%;
	background: linear-gradient(
		120deg,
		transparent,
		rgba(255,255,255,0.08),
		transparent
	);
	top: -50%;
	left: -50%;
	transform: rotate(25deg);
	animation: shine 6s linear infinite;
}

.crypto-input {
	transition: all 0.4s ease;
}

.crypto-input:hover {
	transform: translateY(-2px);
}

.crypto-input:focus {
	transform: translateY(-3px) scale(1.02);
	box-shadow: 0 0 20px rgba(54, 113, 233, 0.45);
	outline: none;
}

/* ================= KEYFRAMES ================= */

/* CONTENT */
@keyframes slideLeft {
	from { opacity: 0; transform: translateX(-120px); }
	to { opacity: 1; transform: translateX(0); }
}

@keyframes slideRight {
	from { opacity: 0; transform: translateX(120px); }
	to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeUp {
	from { opacity: 0; transform: translateY(40px); }
	to { opacity: 1; transform: translateY(0); }
}

@keyframes glowText {
	from { text-shadow: 0 0 10px rgba(54, 113, 233, 0.3); }
	to { text-shadow: 0 0 25px rgba(54, 113, 233, 0.8); }
}

@keyframes floatCard {
	0% { transform: translateY(0); }
	50% { transform: translateY(-10px); }
	100% { transform: translateY(0); }
}

@keyframes shine {
	0% { transform: translateX(-100%) rotate(25deg); }
	100% { transform: translateX(100%) rotate(25deg); }
}

/* IMAGE (RESTORED + IMPROVED) */
@keyframes imagePulse {
	0% { box-shadow: 0 0 0 rgba(54,113,233,0.2); }
	50% { box-shadow: 0 0 25px rgba(54,113,233,0.6); }
	100% { box-shadow: 0 0 0 rgba(54,113,233,0.2); }
}

@keyframes floatImage {
	0% { transform: translateY(0); }
	50% { transform: translateY(-6px); }
	100% { transform: translateY(0); }
}

/* BACKGROUND */
@keyframes moveCircleOne {
	0% { transform: translate(0, 0) scale(1); }
	50% { transform: translate(60px, 40px) scale(1.1); }
	100% { transform: translate(-20px, 70px) scale(0.95); }
}

@keyframes moveCircleTwo {
	0% { transform: translate(0, 0) scale(1); }
	50% { transform: translate(-70px, -50px) scale(1.15); }
	100% { transform: translate(20px, -80px) scale(0.9); }
}

@keyframes gridMove {
	from { transform: translateY(0); }
	to { transform: translateY(60px); }
}

@keyframes particlesMove {
	from { transform: translateY(0) rotate(0deg); }
	to { transform: translateY(-120px) rotate(10deg); }
}

</style>