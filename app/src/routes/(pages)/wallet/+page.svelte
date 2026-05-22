<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';

	let { data } = $props();

	const { form, enhance } = superForm(data.form);
</script>

<section class="wallet-page">
	<!-- HEADER -->
	<div class="header">
		<p class="tag">WALLET INFRASTRUCTURE</p>
		<h1>Connect Your Crypto Wallet</h1>
		<p>Secure blockchain authentication system</p>
	</div>

	<!-- GRID -->
	<div class="grid">
		<div class="panel">
			<p class="section-title">Wallet Selection</p>

			<!-- WALLET DROPDOWN -->
			<select class="input" name="wallets" bind:value={$form.wallets}>
				<option value="">Select wallet</option>
				<option value="metamask">MetaMask</option>
				<option value="walletconnect">WalletConnect</option>
				<option value="coinbase">Coinbase Wallet</option>
				<option value="trust">Trust Wallet</option>
			</select>

			<p class="section-title" style="margin-top: 20px;">Wallet Login</p>

			<form use:enhance method="POST">
				<input
					type="text"
					class="input"
					placeholder="0x wallet address"
					name="address"
					bind:value={$form.address}
				/>

				<input type="hidden" name="signature" bind:value={$form.signature} />

				<input type="hidden" name="messages" bind:value={$form.messages} />

				<button class="connect-btn" type="submit"> Connect Wallet </button>
			</form>

			<p class="hint">Signature-based authentication. No private keys stored.</p>
		</div>
	</div>

	<!-- FOOTER -->
	<div class="footer">
		<p>Secure Web3 authentication layer</p>
	</div>
</section>

<style>
	.wallet-page {
		min-height: 100vh;
		background: radial-gradient(circle at 20% 10%, #0f1025, #050510 70%);
		color: white;
		padding: 80px 20px;
	}

	.header {
		text-align: center;
		max-width: 720px;
		margin: auto;
	}

	.tag {
		font-size: 11px;
		letter-spacing: 3px;
		color: #3671e9;
	}

	h1 {
		font-size: 40px;
		font-weight: 800;
		background: linear-gradient(90deg, #fff, #3671e9, #7b3fe4);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.grid {
		margin-top: 60px;
		display: grid;
		grid-template-columns: 1fr;
		gap: 26px;
		justify-content: center;
	}

	.panel {
		max-width: 420px;
		margin: auto;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 22px;
		padding: 26px;
		backdrop-filter: blur(18px);
		transition: 0.3s ease;
	}

	.panel:hover {
		transform: translateY(-6px);
		border-color: #3671e9;
	}

	.input {
		width: 100%;
		padding: 14px;
		border-radius: 14px;
		margin-top: 15px;
		background: rgba(0, 0, 0, 0.25);
		border: 1px solid rgba(255, 255, 255, 0.08);
		color: white;
	}

	.input:focus {
		outline: none;
		border-color: #3671e9;
	}

	.connect-btn {
		width: 100%;
		margin-top: 15px;
		padding: 14px;
		border-radius: 14px;
		background: linear-gradient(135deg, #3671e9, #2b076e);
		border: none;
		color: white;
		cursor: pointer;
		transition: 0.3s ease;
	}

	.connect-btn:hover {
		transform: translateY(-4px);
		box-shadow: 0 18px 40px rgba(54, 113, 233, 0.35);
	}

	.footer {
		margin-top: 60px;
		text-align: center;
		font-size: 12px;
		opacity: 0.6;
	}

	.hint {
		margin-top: 12px;
		font-size: 12px;
		opacity: 0.7;
		text-align: center;
	}
</style>
