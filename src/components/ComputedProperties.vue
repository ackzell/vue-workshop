<template>
  <div>
    <h2>Computed Properties</h2>
    <section>
      <label for="user-name">What's your name again? </label>
      <input type="text" v-model="userName" id="user-name" />
      <!--
            Here is an example of how you could implement the reversal of the string you provide on the input
        -->
      <pre>
            Directly on the template:
        </pre
      >
      <div>
        {{
          userName
            .split("")
            .reverse()
            .join("")
        }}
      </div>

      <pre>
            Implementing a computed property:
        </pre
      >
      <!--
            We want to do the same, but in a computed property so that
            the templates aren't so busy
         -->
      <div data-testid="test-output">
        <!-- add an interpolation here to render the computed propertiy `reversed` -->
      </div>
    </section>

    <section>
      <h3>Mutating data gotcha</h3>
      <p>Original array is mutated</p>
      myFood: {{ myFood }} ==> myReversedFood: {{ myReversedFood }}

      <p>
        Array reversed without mutating the original one:
      </p>
      myBeverages:
      <span data-testid="original-beverages"> {{ myBeverages }} </span> ==>
      myReversedBeverages:
      <span data-testid="reversed-beverages"> {{ myReversedBeverages }} </span>
    </section>

    <section></section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      myFood: ["🍌", "🍅", "🥝", "🥑"],
      myBeverages: ["🥤", "🧃", "🥛", "🧉"]
    };
  },
  computed: {
    // declare the `reversed` computed property here
    // it should reverse the characters in the string provided
    // from the input above

    myReversedFood() {
      return this.myFood.reverse();
    }

    /*
        We want a `myReversedBeverages` which doesn't mutate the
        reactive `myBeverages` property.
    */
  }
};
</script>
