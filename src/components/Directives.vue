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

    <!-- ========== Conditionally rendering ========== -->
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
    <div data-testid="answer-42">42</div>
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
      treasureRevealed: false
    };
  }
};
</script>
