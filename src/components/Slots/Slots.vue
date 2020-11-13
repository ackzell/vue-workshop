<template>
  <div>
    <h2>Slots</h2>

    <!--
        Up until now, our components have been self closing tags.
        But what if we wanted to pass in formatted content?
    -->
    <MyComponent>
      <strong>Hello</strong>
    </MyComponent>

    <!--
        What if we don't provide default content for our slot?
        We want fallback content to be rendered on the browser between
        these `<AnotherComponent></AnotherComponent>` tags
    -->
    <AnotherComponent></AnotherComponent>

    <!--
        Now let's see if we can get the named slots working
     -->
    <NamedSlots>
      <!--
          We should provide some content in here,
          this will go straight into the default slot
       -->
    </NamedSlots>

    <NamedSlots>
      <!--
        We want to provide content for the the `ns-header` slot
        -->
    </NamedSlots>

    <NamedSlots>
      <!--
            We want to provide content for all 3 slots in here,
            remember you can use whichever syntax you feel more comfortable with
        -->
    </NamedSlots>
  </div>
</template>

<script>
import MyComponent from "@/components/Slots/MyComponent";
import AnotherComponent from "@/components/Slots/AnotherComponent";
import NamedSlots from "@/components/Slots/NamedSlots";
export default {
  components: {
    MyComponent,
    AnotherComponent,
    NamedSlots
  }
};
</script>
