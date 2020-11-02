<template>
  <div>
    <h2>Directives</h2>

    <h3>1. Looping through data</h3>
    <ul>
      <!--
          We want this li to repeat and to show the names of the band members,
          so that it ultimately renders the following:

        ```
            <li>Beatle: John</li>
            <li>Beatle: Paul</li>
            <li>Beatle: George</li>
            <li>Beatle: Ringo</li>
        ```
      -->

      <li>Beatle:</li>
    </ul>

    <hr />
    <!-- ======================================================================================== -->

    <h3>2. Conditionally rendering (hiding elements)</h3>
    <!--
        When the following checkbox is checked,
        we want the answer to be displayed,
        otherwise it should remain hidden.
     -->
    <label>
      <!-- hint: we already bound the `treasureRevealed` reactive variable on the checkbox -->
      <input type="checkbox" v-model="treasureRevealed" />
      Show <strong>the answer</strong>
    </label>
    <!-- don't worry about the `data-testid` attribute, we need it for the test -->
    <div data-testid="answer-42">42</div>

    <hr />
    <!-- ======================================================================================== -->

    <h3>3. Conditionally rendering (unmounting elements on the DOM)</h3>
    <label>
      <!--
            when choosing Tabs, we want  to render
            ```
                <span>
                    Okay, okay... cool cool cool cool cool
                </span>
            ```
        -->
      <input type="radio" name="indent" value="Tabs" v-model="indent" />
      Tabs
    </label>

    <label>
      <!--
            when choosing Spaces, we want  to render
            ```
                <span>
                    No judging here 👀
                </span>
            ```
        -->
      <input type="radio" name="indent" value="Spaces" v-model="indent" />
      Spaces
    </label>

    <div>
      <!--
        Conditionally add to the DOM the following spans:
        1. No `indent` value (falsy): "Pick one"
        2. `indent === "Tabs"` : "Okay, okay... cool cool cool cool cool"
        3. `indent === "Spaces"` : "No judging here 👀"

        Note that only 1 span should be present at any given time
     -->
      <span>Pick one</span>
      <span>Okay, okay... cool cool cool cool cool</span>
      <span>No judging here 👀</span>
    </div>

    <hr />
    <!-- ======================================================================================== -->

    <h3>4. Binding attributes to reactive variables</h3>
    <!--
        We want to apply a class `.colored` to this span when the value of `indent` is "Spaces". Otherwise no class should be added to the element.
    -->
    <span>Color me surprised</span>
    <br /><br />
    <!--
        We want to disable the button below when the `treasureRevealed` reactive variable is set to true.
    -->
    <button>Click me if you can</button>

    <hr />
    <!-- ======================================================================================== -->

    <h3>5. Event Binding</h3>
    <!--
        We want to increment the `count` reactive variable in 1 each time the button is clicked.
    -->
    <button>Don't push!</button>
    <div>Times clicked: {{ count }}</div>

    <!-- ======================================================================================== -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      beatles: [
        { name: "John" },
        { name: "Paul" },
        { name: "George" },
        { name: "Ringo" }
      ],
      treasureRevealed: false,
      indent: null,
      count: 0
    };
  }
};
</script>

<style scoped>
.colored {
  background: #34495e;
  color: whitesmoke;
}
</style>
