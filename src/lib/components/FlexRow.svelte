<script lang="ts">
  // Add "flex_col" to classes if nessacary
  $$restProps.class = $$restProps.class
    ? $$restProps.class + " flex_row"
    : "flex_row";
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:click
  on:auxclick
  on:mouseenter
  on:mouseleave
  on:mousedown
  on:mouseup
  {...$$restProps}
>
  <slot></slot>
</div>
