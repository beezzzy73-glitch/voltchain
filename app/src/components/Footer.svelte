<footer class="crypto-footer">

    <!-- LIVE TICKER -->
    <div class="crypto-ticker">
        <div class="ticker-track">
            <span>BTC $67,120 ↑ +2.4%</span>
            <span>ETH $3,410 ↓ -1.1%</span>
            <span>SOL $142 ↑ +5.8%</span>
            <span>BNB $590 ↑ +1.2%</span>
            <span>XRP $0.62 ↑ +0.8%</span>
        </div>
    </div>

    <!-- BACKGROUND -->
    <div class="footer-glow"></div>
    <div class="footer-grid"></div>
    <div class="footer-orb"></div>

    <nav class="footer-nav">

        <div class="footer-brand">
            <div class="status">
                <span class="dot"></span> MARKET SYNC ACTIVE
            </div>

            <p class="brand-title">Crypto</p>

            <!-- MINI CHART -->
            <svg class="mini-chart" viewBox="0 0 100 30">
                <path d="M0,20 L10,18 L20,22 L30,10 L40,14 L50,8 L60,12 L70,6 L80,10 L90,4 L100,8"
                      stroke="#3671e9"
                      fill="none"
                      stroke-width="2"/>
            </svg>

            <p class="brand-sub">Secure Digital Finance Network</p>
        </div>

        <div class="footer-col">
            <p class="footer-title">Quick Link</p>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Features</a>
        </div>

        <div class="footer-col">
            <p class="footer-title">Resources</p>
            <a href="#">Wallet</a>
            <a href="#">Crypto News</a>
            <a href="#">Community</a>
            <a href="#">Market Data</a>
        </div>

        <div class="footer-col">
            <p class="footer-title">Services</p>
            <a href="#">Trading</a>
            <a href="#">Forex</a>
            <a href="#">Support</a>
            <a href="#">FAQ</a>
        </div>

    </nav>

    <!-- SECURITY STRIP -->
    <div class="security-strip">
        🔒 AES-256 SECURE • ⚡ INSTANT TRANSFERS • 🌍 GLOBAL LIQUIDITY
    </div>

    <p class="footer-bottom">© All Rights Reserved</p>

</footer>

<style>

/* ================= CORE ================= */

.crypto-footer {
    position: relative;
    overflow: hidden;
    background: #070A12;
    color: white;
}

/* ================= TICKER ================= */

.crypto-ticker {
    overflow: hidden;
    white-space: nowrap;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    padding: 10px 0;
}

.ticker-track {
    display: inline-block;
    animation: tickerMove 18s linear infinite;
}

.ticker-track span {
    margin-right: 60px;
    opacity: 0.8;
}

/* ================= BACKGROUND ================= */

.footer-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 20%, rgba(54,113,233,0.15), transparent 40%),
                radial-gradient(circle at 80% 80%, rgba(123,63,228,0.15), transparent 40%);
    z-index: 0;
    animation: pulse 8s ease-in-out infinite;
}

.footer-grid {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    z-index: 0;
    animation: gridMove 20s linear infinite;
}

.footer-orb::before {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;
    background: #3671e9;
    filter: blur(100px);
    opacity: 0.2;
    top: -200px;
    left: -200px;
    animation: floatOrb 10s ease-in-out infinite;
}

/* ================= NAV ================= */

.footer-nav {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    padding: 40px;
}

/* ================= BRAND ================= */

.footer-brand {
    animation: fadeUp 1s ease;
}

.status {
    font-size: 10px;
    opacity: 0.7;
    display: flex;
    align-items: center;
    gap: 6px;
}

.dot {
    width: 8px;
    height: 8px;
    background: #00ff88;
    border-radius: 50%;
    animation: blink 1.5s infinite;
}

.brand-title {
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
    animation: glow 3s infinite alternate;
}

.brand-sub {
    opacity: 0.6;
    margin-top: 10px;
}

.mini-chart {
    width: 120px;
    margin-top: 10px;
    stroke-dasharray: 200;
    stroke-dashoffset: 200;
    animation: draw 3s ease forwards;
}

/* ================= LINKS ================= */

.footer-col a {
    display: block;
    margin-top: 10px;
    opacity: 0.7;
    transition: 0.3s;
}

.footer-col a:hover {
    opacity: 1;
    transform: translateX(6px);
}

/* ================= SECURITY ================= */

.security-strip {
    text-align: center;
    padding: 15px;
    font-size: 11px;
    opacity: 0.7;
    border-top: 1px solid rgba(255,255,255,0.05);
}

/* ================= ANIMATIONS ================= */

@keyframes tickerMove {
    from { transform: translateX(100%); }
    to { transform: translateX(-100%); }
}

@keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes glow {
    from { text-shadow: 0 0 10px rgba(54,113,233,0.3); }
    to { text-shadow: 0 0 20px rgba(54,113,233,0.7); }
}

@keyframes blink {
    0%,100% { opacity: 1; }
    50% { opacity: 0.3; }
}

@keyframes pulse {
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
}

@keyframes gridMove {
    from { transform: translateY(0); }
    to { transform: translateY(60px); }
}

@keyframes floatOrb {
    0% { transform: translate(0,0); }
    50% { transform: translate(50px,40px); }
    100% { transform: translate(0,0); }
}

@keyframes draw {
    to { stroke-dashoffset: 0; }
}

</style>