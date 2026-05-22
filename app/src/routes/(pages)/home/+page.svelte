<script>
	import Calculator from "../../../components/Calculator.svelte";
	import CoinInfo from "../../../components/CoinInfo.svelte";
import Hero from "../../../components/Hero.svelte";
	import Record from "../../../components/Record.svelte";
	import Testimonies from "../../../components/Testimonies.svelte";
	import ButtonLink from "../../../components/ui/ButtonLink.svelte";

</script>
<Hero />
<Record />


<Calculator />

<CoinInfo /> 	

<section class="bg-purple mt-32 pt-10 space-y-20 px-5 @3xl:px-10">
    <p class="text-xl text-center font-bold">Market sentiments, portfolio, and run the infrastructure of your choice</p>
	<div class="grid @3xl:grid-cols-2 gap-10">
		<div class="space-y-5">
			<p class="font-bold text-2xl">Invest Smart</p>
			<p>Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </p>
			<ButtonLink href = '' />
		</div>
		<div>
			<img src="/illustrations/Chart.svg" alt="">
		</div>
	</div>
</section>

<section class="bg-purple grid @3xl:grid-cols-2 gap-10 pt-32 items-center">
	<div>
		<img src="/illustrations/Statistic.svg" alt="">
	</div>
	<div class="space-y-7 @3xl:pr-10">
		<p class="font-bold text-2xl">Detailed Statistics</p>
		<p>View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.</p>
		<ButtonLink href = '' />
	</div>
</section>


<section class="bg-purple grid gap-10 @3xl:grid-cols-2 items-center">
	<div class="pl-5 space-y-7">
		<p class="text-2xl font-bold">Grow your profit and track your investments</p>
		<p>Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.</p>
		<ButtonLink href = '' />
	</div>
	<div>
		<img src="/illustrations/Table.svg" alt="">
	</div>
</section>


<!-- <Banner /> -->

<Testimonies />