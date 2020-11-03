<template>
  <div>
    <h2>Methods</h2>
    <!--
        We want to execute the `greet` method when we click on the button
        Remember: an alternative syntax to `@click` is `v-on:click`
    -->
    <button @click="greet">Press me</button>
    <button @click="callMeMaybe">Press me mabye</button>
  </div>
</template>

<script>
/**
 * We want to declare the `greet` and `callMeMaybe` methods
 * within the options of the Vue instance.
 *
 * The `greet` method should trigger an alert (this is important)
 * with a message of your choice.
 *
 * The `callMeMaybe` method should in turn call the `greet` method,
 * effectively displaying the same alert with the same message.
 */
export default {};
</script>
