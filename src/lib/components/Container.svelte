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
