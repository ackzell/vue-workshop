<template>
  <div>
    <h1>Events</h1>
    <div>
      This is the Parent Component

      <!--
            We want to implement the `Child` component in here
         -->
      <!--
             We also want to capture the `the-event` in the component
             so we can call our `onChildEventCaught` method, so
             keep that in mind
        -->
    </div>
  </div>
</template>

<script>
import Child from "@/components/Events/Child";
export default {
  components: {
    /**
     * Register the `Child` component in here
     */
  },
  methods: {
    /**
     * We want to use this method as the handler for the
     * listening on `the-event` being triggered
     */
    onChildEventCaught(payload) {
      console.log("I caught the event", payload);

      /**
       * Try doing something different in here, like
       * updating a value and rendering on the page.
       */
    }
  }
};
</script>

<style scoped>
div {
  padding: 10px;
  border: 2px dashed tomato;
}
</style>
