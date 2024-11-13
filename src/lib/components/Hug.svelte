<script lang="ts">
  import { onMount } from "svelte";

  export let direction: string = "left";

  onMount(() => {
    const directions = direction.split(" ");
    let v = "";
    directions.forEach((_d) => {
      v += `hug_${_d} `;
    });
    direction = v;
  });
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click
  on:auxclick
  on:mouseenter
  on:mouseleave
  on:mousedown
  on:mouseup
  class={direction}
>
  <slot></slot>
</div>
