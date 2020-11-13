<template>
  <div class="component-wrapper">
    <h3>Named slots</h3>
    <div class="slot-component">
      <div class="__header">
        <!-- notice how we name the slots here -->
        <slot name="ns-header"></slot>
      </div>

      <p class="__body">
        <!-- default slot doesn't need a name -->
        <slot></slot>
      </p>

      <div class="__footer">
        <!-- notice how we name the slots here -->
        <slot name="ns-footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.component-wrapper {
  padding: 10px;
  border: 2px dashed darkolivegreen;
  margin-bottom: 10px;
}

.slot-component .__header {
  border: 2px solid green;
  min-height: 3em;
}
.slot-component .__body {
  border: 2px solid darkcyan;
  min-height: 3em;
}
.slot-component .__footer {
  border: 2px solid turquoise;
  min-height: 3em;
}
</style>
