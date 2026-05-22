<script>
	import Button from "../../../components/ui/Button.svelte";

</script>
<section class="grid items-center grid-cols-1 px-5 @3xl:grid-cols-3">
	<form class="space-y-5">
		<div>
			<h1 class="text-2xl font-bold">Get started now</h1>
			<p>Enter your credentials to enter your account</p>
		</div>
		<div class="grid grid-cols-2 gap-2 rounded-xl border border-fore p-2">
            <Button child = 'Email' />
            <Button child = 'Magic Link' />
		</div>
		<div class="flex flex-col gap-2">
			<label for="fullname">Enter Email</label>
			<input type="text" placeholder="John Alex" class="h-13 rounded-lg border border-fore pl-3" />
		</div>
		<div class="flex flex-col gap-2">
			<label for="fullname">Password</label>
			<input
				type="email"
				placeholder="johnalex@gmail.com"
				class="h-13 rounded-lg border border-fore pl-3"
			/>
		</div>
		<div class="flex flex-col gap-2">
			<label for="password">Password</label>
			<input
				type="password"
				placeholder="********"
				class="h-13 rounded-lg border border-fore pl-3"
			/>
		</div>
		<div>
			<input type="checkbox" />
			<label for="terms" class="color-transparent"
				>I agree to the <a href="" class="text-primary">Terms & Services</a></label
			>
		</div>
		<div>
            <Button child = 'Register' />
		</div>
        <div>
            <p>I already have an account <a href="" class="text-primary">Login in</a></p>
        </div>
	</form>
	<div class="grid-bg col-span-2 flex h-screen items-center justify-center">
		<img src="/illustrations/reg.svg" alt="" class="@3xl:w-100" />
	</div>
</section>

<style>
	.grid-bg {
		position: relative;
		overflow: hidden;
		perspective: 900px;
	}

	/* GRID LAYER */
	.grid-bg::before {
		content: '';
		position: absolute;
		inset: -20%;

		background-image:
			linear-gradient(rgba(54, 113, 233, 0.1) 1px, transparent 1px),
			linear-gradient(90deg, rgba(54, 113, 233, 0.1) 1px, transparent 1px);

		background-size: 45px 45px;

		transform-origin: center;
		transform: rotateX(60deg) translateY(0);

		animation: gridFloat 10s ease-in-out infinite;

		opacity: 0.75;
		pointer-events: none;
	}

	/* glow layer */
	.grid-bg::after {
		content: '';
		position: absolute;
		inset: 0;

		background: radial-gradient(circle at center, rgba(54, 113, 233, 0.18), transparent 60%);

		pointer-events: none;
	}

	/* animation */
	@keyframes gridFloat {
		0% {
			transform: rotateX(60deg) translate(0, 0);
		}
		50% {
			transform: rotateX(65deg) translate(20px, 20px);
		}
		100% {
			transform: rotateX(60deg) translate(0, 0);
		}
	}

	.grid-bg img {
		position: relative;
		z-index: 10;

		animation: imgFloat 6s ease-in-out infinite;
		transform-origin: center;
		will-change: transform;
		filter: drop-shadow(0 20px 40px rgba(54, 113, 233, 0.15));
	}

	/* floating + breathing effect */
	@keyframes imgFloat {
		0% {
			transform: translateY(0px) scale(1);
		}
		50% {
			transform: translateY(-10px) scale(1.03);
		}
		100% {
			transform: translateY(0px) scale(1);
		}
	}

	/* optional hover boost */
	.grid-bg img:hover {
		transform: translateY(-14px) scale(1.05);
		filter: drop-shadow(0 30px 60px rgba(54, 113, 233, 0.25));
		transition: 0.4s ease;
	}
</style>
