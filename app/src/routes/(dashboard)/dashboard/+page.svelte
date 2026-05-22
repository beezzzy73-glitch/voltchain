<script>
	import ActivityFeed from "../../../components/dashboard/ActivityFeed.svelte";
	import AIInsightPanel from "../../../components/dashboard/AIInsightPanel.svelte";
	import DashboardHeader from "../../../components/dashboard/DashboardHeader.svelte";
	import MarketTicker from "../../../components/dashboard/MarketTicker.svelte";
	import PortfolioChart from "../../../components/dashboard/PortfolioChart.svelte";
	import QuickActions from "../../../components/dashboard/QuickActions.svelte";
	import WalletOverview from "../../../components/dashboard/WalletOverview.svelte";

</script>
<DashboardHeader />
<QuickActions />
<MarketTicker />
<AIInsightPanel />
<WalletOverview />
<ActivityFeed />
<PortfolioChart />