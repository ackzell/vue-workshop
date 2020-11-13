<template>
  <div>
    <h3>My component</h3>

    <!-- We are using this span for the test, not needed in real life code -->
    <span class="my-default-slot-content">
      <!-- Within this span, implement the `<slot></slot>` tag -->
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  padding: 10px;
  border: 2px dashed rebeccapurple;
  margin-bottom: 10px;
}
</style>
