<template>
  <div>
    <h2>Hello World</h2>
    <!-- We want to show the value from the input within the `{{name}}` -->
    <div>Hello {{ name }}!</div>

    <label for="username">Your name: </label>
    <!--
        We are missing a Vue directive which will bind the value of the input
        to the `name` variable
     -->
    <input id="username" type="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // We also want to declare the reactive `name` variable and set an initial state to the string "world"
    };
  }
};
</script>
