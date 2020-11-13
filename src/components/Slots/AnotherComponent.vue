<template>
  <div>
    <h3>Another component</h3>

    <!-- We are using this span for the test, not needed in real life code -->
    <span class="my-fallback-slot-content">
      <!-- Within this slot, provide some fallback content -->
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  padding: 10px;
  border: 2px dashed darkorange;
  margin-bottom: 10px;
}
</style>
