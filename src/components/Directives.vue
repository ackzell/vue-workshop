<template>
  <div>
    <h2>Directives</h2>

    <!-- ========== Looping through data ========== -->
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

    <!-- ========== Conditionally rendering (hiding elements) ========== -->
    <!--
        When the following checkbox is checked,
        we want the answer to be displayed,
        otherwise it should remain hidden.
     -->
    <hr />
    <label>
      <!-- hint: we already bound the `treasureRevealed` reactive variable on the checkbox -->
      <input type="checkbox" v-model="treasureRevealed" />
      Show <strong>the answer</strong>
    </label>
    <!-- don't worry about the `data-testid` attribute, we need it for the test -->
    <div data-testid="answer-42">42</div>

    <!-- ========== Conditionally rendering (unmounting elements on the DOM) ========== -->
    <hr />
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

    <br />
    <br />

    <div data-testid="tabs-vs-spaces-answer">
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
      indent: null
    };
  }
};
</script>
