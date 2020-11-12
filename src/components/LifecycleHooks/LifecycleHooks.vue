<template>
  <div>
    <h2>Lifecycle Hooks</h2>

    <label>
      <input type="checkbox" @click="isVisible = !isVisible" />
      {{ isVisible ? "Hide MyCopmponent" : "Show MyComponent" }}
    </label>
    <button @click="theTime = new Date()">Update the component</button>

    <MyComponent v-if="isVisible" :my-time="theTime" />
  </div>
</template>

<script>
import MyComponent from "@/components/LifecycleHooks/MyComponent";
export default {
  components: {
    MyComponent
  },
  data() {
    return {
      isVisible: true,
      theTime: new Date()
    };
  }
};
</script>

<style scoped>
button {
  line-height: 2em;
  margin: 1em;
}
</style>
