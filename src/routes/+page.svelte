<script lang="ts">
	import './style.scss';
	import FlexColumn from '@components/FlexColumn.svelte';
	import Text from '@components/Text.svelte';
	import { BeanGenerator } from '@lib/components/Jellybean';
</script>

<!-- Inject to head -->
<svelte:head>
	<title>Jellybean</title>
	<meta name="author" content="Richard Grandt" />
	<meta name="description" content="Ace Minor Project" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<FlexColumn class="root">

    <!-- Top Section -->
	<FlexColumn style="gap: 10px" class="fill_width">
		<h2 class="hug_hcenter">All About Jelly Beans (and more!)</h2>
		<Text color="#009"
			>Jelly beans take six to ten days to make. there are two varieties -- <strong
				>traditional beans</strong
			>
			and <strong>gourmet</strong>, The gourmet beans are typically softer and smaller. Gourmet,
			unlike traditional, have flavor in both the the center and the shell.</Text
		>
		<Text color="#009" class="hug_right"
			>Not everyone likes jellybeans. You have to have a certain taste for it. Some quite enjoy
			these special candies!</Text
		>
	</FlexColumn>
	<hr />

    <!-- Middle Section -->
	<FlexColumn style="gap: 0px">
		<Text color="#009">for the most part, a jelly bean contains:</Text>

		<!-- Box Point List -->
		<ul class="square">
			<li>Sugar</li>
			<li>Corn Syrup</li>
			<li>Food Starch</li>
		</ul>
	</FlexColumn>

	<Text color="#009">The steps for jelly bean making include:</Text>

	<!-- Number List -->
	<ol class="spaced">
		<li>Cooking and chemistry</li>
		<li>Starch casting</li>
		<li>Panning</li>
		<li>Sugar coating</li>
		<li>Packaging</li>
	</ol>

	<hr />

	<!-- Last Section -->
	<h3><em>Where to Buy</em></h3>
	<h3 class="hug_right">Yummy...Yummy...Yummy!</h3>
	<FlexColumn style="gap: 10px">
		<!-- This hurts to look at :I -->
		<Text color="#009">
			You can buy jelly beans online at lots of places! You can go to the <a
				target="_blank"
				href="http://jellybelly.com">Jelly Belly</a
			>
			website. Or, one can really nice variety is
			<a target="_blank" href="http://www.gimbalscandy.com">Gimbal's Fine Candies</a>. Or, If you
			are not into jelly beans, how about gourmet candy, like
			<a target="_blank" href="http://jellybelly.com">Amy's Gourmet Chocolate</a>
			or <a target="_blank" href="http://fanniemay.com/">Fanny May Candies</a>?
		</Text>
		<Text color="#009">Some Interesting candy gift ideas include:</Text>
		<ol class="alpha spaced">
			<li>
				Chocolate Specialties
				<ul class="empty">
					<li>Chocolate covered cherries</li>
					<li>Dark pixies</li>
					<li>Mint meltaways</li>
				</ul>
			</li>
			<li>
				Nut Specialties
				<ul class="square">
					<li>Peanut brittle</li>
					<li>Cashews</li>
					<li>Assorted nuts</li>
				</ul>
			</li>
			<li>
				Fudge
				<ul class="empty">
					<li>Peanut butter</li>
					<li>Maple nut</li>
					<li>Vanilla</li>
				</ul>
			</li>
		</ol>
	</FlexColumn>
	<hr />
	<Text color="#009" class="hug_hcenter"
		><em
			>This page created by Richard Grandt * Visit <a target="_blank" href="http://google.com"
				>Google</a
			></em
		></Text
	>
</FlexColumn>

<!-- Funni Name -->
<BeanGenerator/>
