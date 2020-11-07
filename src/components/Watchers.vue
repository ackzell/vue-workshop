<template>
  <div>
    <h2>Watchers</h2>

    <p>Your favorite is: {{ myFavoriteFlavor }}</p>

    <section class="flavors">
      <!--
          In this section we prepare the app:
          A group of radio buttons from which the user can pick a favorite flavor
       -->
      <div v-for="(flavor, index) in flavors" :key="index">
        <input
          type="radio"
          v-model="myFavoriteFlavor"
          :id="`fav-b-${flavor}`"
          name="my-favorite-flavor"
          :value="flavor"
        />
        <!--
            Note how we bind the `for` attribute value
            to a string we build on each iteration
        -->
        <label :for="`fav-b-${flavor}`">{{ flavor }}</label>
      </div>
    </section>

    <!--
        This section we use to log the changes that have happened
        to the selections from the user
    -->
    <section class="log">
      <div class="log-entry" v-for="(entry, idx) in logs" :key="idx">
        Old value: {{ entry.oldVal }} | New value: {{ entry.newVal }}
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flavors: ["Chocolate", "Vanilla", "Strawberry", "Cookies n Creme"],
      myFavoriteFlavor: null,
      logs: []
    };
  },
  /*
    Implement a watcher that appends a new entry
    on the "log" we have on the markup everytime the user selects a flavor.

    Important: it must display the previous value as well as the new one
    like this:

    "Old value: Chocolate | New value: Vanilla"
  */
  watch: {}
};
</script>

<style scoped>
/*
    Note the `scoped` keyword here.
    This will prevent the styles from "bleeding" outside this component
*/
.flavors {
  margin: 0 auto;
  width: 200px;
  text-align: left;
}

.log {
  background: #7a7a7a;
  color: whitesmoke;
  padding: 12px;
  font-family: monospace;
}

.log-entry {
  padding: 3px;
}
</style>
