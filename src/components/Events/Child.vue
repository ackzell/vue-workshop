<template>
  <div>
    <p>This is the child component</p>

    <button
      @click="
        /* emit `the-event` from here, you can use a method if you want */
      "
    >
      Emit the event!
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  border: 1px dashed navy;
}
</style>
