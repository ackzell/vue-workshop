<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld /> -->
    <!-- <Directives /> -->
    <!-- <Methods /> -->
    <!-- <ComputedProperties /> -->
    <!-- <Watchers /> -->
    <!-- <Parent /> -->
    <!-- <LifecycleHooks /> -->
    <!-- <Slots /> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Directives from "./components/Directives";
import Methods from "./components/Methods";
import ComputedProperties from "./components/ComputedProperties";
import Watchers from "./components/Watchers";
import Parent from "./components/Events/Parent";
import LifecycleHooks from "./components/LifecycleHooks/LifecycleHooks";
import Slots from "./components/Slots/Slots";

export default {
  name: "App",
  components: {
    HelloWorld,
    Directives,
    Methods,
    ComputedProperties,
    Watchers,
    Parent,
    LifecycleHooks,
    Slots
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app > :not(img) {
  border: 2px solid #34495e;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
