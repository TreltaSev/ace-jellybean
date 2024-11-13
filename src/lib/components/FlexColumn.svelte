<script lang="ts" type="module">
  // Add "flex_col" to classes if nessacary
  $$restProps.class = $$restProps.class
    ? $$restProps.class + " flex_col"
    : "flex_col";
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:click
  on:auxclick
  on:mouseenter
  on:mouseleave
  on:mousedown
  on:mouseup
  on:message
  {...$$restProps}
>
  <slot></slot>
</div>
