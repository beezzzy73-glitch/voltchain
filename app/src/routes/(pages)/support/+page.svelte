<script>
</script>

<section class="support-page">

	<!-- BACKGROUND -->
	<div class="glow one"></div>
	<div class="glow two"></div>
	<div class="grid-bg"></div>


	<!-- HEADER -->
	<div class="header">
		<p class="tag">SUPPORT CENTER</p>
		<h1>24/7 Crypto Assistance</h1>
		<p>Instant help for trading, wallets, transactions, and platform issues.</p>
	</div>

	<!-- MAIN GRID -->
	<div class="grid">

		<!-- LEFT MENU -->
		<div class="panel">

			<p class="title">Help Categories</p>

			<div class="menu">
				<div class="item">💬 Live Chat Support</div>
				<div class="item">🎫 Open Ticket</div>
				<div class="item">🔐 Account Security</div>
				<div class="item">💰 Deposit & Withdraw</div>
				<div class="item">📊 Trading Issues</div>
				<div class="item">🌐 API Support</div>
			</div>

			<div class="info-card">
				<p class="info-title">Average Response</p>
				<p class="info-value"> 2 min</p>
			</div>

		</div>

		<!-- RIGHT PANEL -->
		<div class="panel">

			<div class="chat-header">
				<p>Live Support Chat</p>
				<span class="online">● Online</span>
			</div>

			<div class="chat-box">

				<div class="msg bot">
					Hello 👋 How can we assist you today?
				</div>

				<div class="msg user">
					I have an issue with my wallet connection.
				</div>

				<div class="msg bot typing">
					Typing...
				</div>

			</div>

			<div class="input-box">
				<input type="text" placeholder="Type your message..." />
				<button>Send</button>
			</div>

		</div>

	</div>

	<!-- EXTRA SECTION -->
	<div class="cards">

		<div class="card">
			<div class="icon">⚡</div>
			<p class="title">Fast Support</p>
			<p class="text">Instant response system powered by AI routing.</p>
		</div>

		<div class="card">
			<div class="icon">🔐</div>
			<p class="title">Secure Help</p>
			<p class="text">Encrypted communication with support agents.</p>
		</div>

		<div class="card">
			<div class="icon">🌍</div>
			<p class="title">Global Coverage</p>
			<p class="text">Support available 24/7 across all regions.</p>
		</div>

	</div>

	<!-- FOOTER -->
	<div class="footer">
		<p>Need urgent help? Our system monitors all requests in real-time.</p>
	</div>

</section>

<style>

.support-page {
	min-height: 100vh;
	background: var(--color-base);
	color: white;
	padding: 80px 20px;
	position: relative;
	overflow: hidden;
}

/* ================= BACKGROUND ================= */

.glow {
	position: absolute;
	width: 500px;
	height: 500px;
	border-radius: 50%;
	filter: blur(160px);
	opacity: 0.18;
}

.glow.one {
	background: var(--color-primary);
	top: -200px;
	right: -200px;
}

.glow.two {
	background: var(--color-purple);
	bottom: -200px;
	left: -200px;
}

.grid-bg {
	position: absolute;
	inset: 0;
	background-image:
		linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
		linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
	background-size: 70px 70px;
	opacity: 0.25;
}



/* ================= HEADER ================= */

.header {
	text-align: center;
	max-width: 700px;
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
	font-size: 36px;
	margin-top: 10px;
}

.header p {
	opacity: 0.7;
	margin-top: 8px;
}

/* ================= GRID ================= */

.grid {
	margin-top: 60px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	gap: 20px;
	position: relative;
	z-index: 2;
}

/* ================= PANEL ================= */

.panel {
	background: rgba(255,255,255,0.03);
	border: 1px solid rgba(255,255,255,0.06);
	border-radius: 18px;
	padding: 25px;
	backdrop-filter: blur(12px);
	transition: 0.3s ease;
}

.panel:hover {
	transform: translateY(-6px);
	border-color: var(--color-primary);
}

/* ================= MENU ================= */

.menu {
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-top: 15px;
}

.item {
	padding: 12px;
	border-radius: 12px;
	border: 1px solid rgba(255,255,255,0.05);
	cursor: pointer;
	transition: 0.3s ease;
}

.item:hover {
	transform: translateX(6px);
	border-color: var(--color-primary);
}

/* ================= CHAT ================= */

.chat-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 15px;
}

.online {
	color: #2ecc71;
	font-size: 12px;
}

.chat-box {
	height: 240px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	overflow: hidden;
}

.msg {
	padding: 10px;
	border-radius: 12px;
	font-size: 12px;
	max-width: 80%;
}

.bot {
	background: rgba(255,255,255,0.05);
	align-self: flex-start;
}

.user {
	background: rgba(54,113,233,0.2);
	align-self: flex-end;
}

.typing {
	opacity: 0.6;
	font-style: italic;
}

/* ================= INPUT ================= */

.input-box {
	display: flex;
	gap: 10px;
	margin-top: 15px;
}

.input-box input {
	flex: 1;
	padding: 12px;
	border-radius: 12px;
	background: rgba(0,0,0,0.2);
	border: 1px solid rgba(255,255,255,0.08);
	color: white;
}

.input-box button {
	padding: 12px 20px;
	border-radius: 12px;
	background: var(--color-primary);
	border: none;
	color: white;
	cursor: pointer;
	transition: 0.3s ease;
}

.input-box button:hover {
	transform: translateY(-3px);
}

/* ================= CARDS ================= */

.cards {
	margin-top: 60px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	gap: 20px;
}

.card {
	background: rgba(255,255,255,0.03);
	border: 1px solid rgba(255,255,255,0.06);
	padding: 20px;
	border-radius: 16px;
	transition: 0.3s ease;
}

.card:hover {
	transform: translateY(-6px);
	border-color: var(--color-primary);
	box-shadow: 0 10px 30px rgba(54,113,233,0.15);
}

.icon {
	font-size: 22px;
	margin-bottom: 10px;
}

.title {
	font-weight: bold;
}

.text {
	font-size: 12px;
	opacity: 0.7;
	margin-top: 5px;
}

/* ================= FOOTER ================= */

.footer {
	margin-top: 60px;
	text-align: center;
	font-size: 12px;
	opacity: 0.6;
}

/* ================= ANIMATION ================= */

@keyframes float {
	0% { transform: translateY(0); }
	50% { transform: translateY(-12px); }
	100% { transform: translateY(0); }
}

</style>