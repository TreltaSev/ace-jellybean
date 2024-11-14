<script lang="ts">
  // Add Default Text Styling if needed
  export let font = "Lato";
  export let size = "1em";
  export let stretch = "normal";
  export let fontStyle = "normal";
  export let style = "";
  export let variant = "normal";
  export let weight = "normal";
  export let lineHeight = "normal";
  export let color = "white";

  const InjectFont = `;color: ${color}; font-family: ${font}; font-size: ${size}; font-stretch: ${stretch}; font-style: ${style}; font-weight: ${weight}; line-height: ${lineHeight}`;
  $$restProps.style = $$restProps.style
    ? $$restProps.style + InjectFont
    : InjectFont;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<span
  on:click
  on:mouseenter
  on:mouseleave
  on:mousedown
  on:mouseup
  {...$$restProps}
>
  <slot></slot>
</span>
