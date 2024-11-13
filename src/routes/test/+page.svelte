<script lang="ts">
	import InteractiveEngine from "@lib/components/Interactive";
    import { interactiveEngine } from "@lib/stores/interactive";
    import type { Action } from "svelte/action";
    import Text from "@lib/components/Text.svelte";

    const initInteractive: Action<HTMLCanvasElement> = (node) => {
        $interactiveEngine = new InteractiveEngine(node);
        $interactiveEngine.start();
    }

</script>

<Text>Test Page</Text>
<canvas use:initInteractive/>
