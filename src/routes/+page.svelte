<script lang="ts">
    import "./style.scss"
	import FlexColumn from "@components/FlexColumn.svelte";
    import Text from "@components/Text.svelte";
</script>

<FlexColumn class="root">
    <Text color="white">Testing</Text>

    <h2>All About Jelly Beans (and more!)</h2>
    <Text color="white">Jelly beans take xix to ten days to make. there are two varieties -- <strong>traditional beans</strong> and <strong>gourmet</strong></Text>

    <hr/>

    <Text color="white">for the most part, a jelly bean contains:</Text>
    <ul>
        <li>Sugar</li>
        <li>Corn Syrup</li>
        <li>Food Starch</li>
    </ul>
    
    <Text color="white">The steps for jelly bean making include:</Text>
    <ol>
        <li>Cooking and chemistry</li>
        <li>Starch casting</li>
        <li>Panning</li>
        <li>Sugar coating</li>
        <li>Packaging</li>
    </ol>

    <hr/>

    <h3>Where to Buy</h3>
    <Text color="white">
        You can buy jelly beans online at lots of places! You can go to the <a href="http://jellybeam.com">Jellybean</a> website. 
        Or, one can really nice variety is <a href="http://www.gimbalscandy.com">Gimbal's Fine Candies</a>. 
        Or, If you are not into jelly beans, how about gourmet candy, like <a href="http://jellybelly.com">Amy's Gourmet Chocolate</a>
        or 
    </Text>
</FlexColumn>