<template>
  <div>
    <h2>Computed Properties</h2>
    <label for="user-name">What's your name again? </label>
    <input type="text" v-model="userName" id="user-name" />
    <!--
        Here is an example of how you could implement the reversal of the string you provide on the input
    -->
    <div>
      {{
        userName
          .split("")
          .reverse()
          .join("")
      }}
    </div>

    <!--
        We want to do the same, but in a computed property so that
        the templates aren't so busy
     -->
    <div data-testid="test-output">
      <!-- add an interpolation here to render the computed propertiy `reversed` -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: ""
    };
  },
  computed: {
    // declare the `reversed` computed property here
    // it should reverse the characters in the string provided
    // from the input above
  }
};
</script>
