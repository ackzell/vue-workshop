<template>
  <div>
    <div>
      <h3>My component</h3>

      <strong>My time is: </strong>{{ myTime }}

      <!--
        This section we use to log the changes that have happened
        to the selections from the user
    -->
      <section class="log">
        <div class="log-entry" v-for="(entry, idx) in logs" :key="idx">
          {{ entry }}
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      someData: { my: "object" },
      logs: []
    };
  },
  props: ["myTime"],
  methods: {},
  /**
   * We want to implement every lifecycle hook
   * and add a `console.log('<hook name>', this.someData)`
   *
   * like the `beforeCreate` one
   */
  beforeCreate() {
    console.log("beforeCreate", this.someData);
  }
};
</script>
<style scoped>
div {
  border: 1px dotted tomato;
}
</style>
