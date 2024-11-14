<script lang="ts">
    import './style.scss';
    import Container from '@components/Container.svelte';
    import Bean from "./Bean.svelte"

    import { beanHandler } from "@lib/stores/bean";
	import type { beanMeta } from './BeanHandler';
	import { onMount } from 'svelte';

    let beans: beanMeta[] = []

    beanHandler.beans$.subscribe((v) => {
        beans = v
    })

    onMount(() => {
        // Generate looping beans
        for (let i = 0; i < 50; i++) {
            beanHandler.generateBean()
        }
    })

</script>

<!-- -->
<Container class="before_pa_fa_tl no_event">
    {#each beans as bean}
        <Bean size={bean.size} x={bean.x} y={bean.y}>

        </Bean>
    {/each}
</Container>