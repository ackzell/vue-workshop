import { render, fireEvent } from "@testing-library/vue";
import HelloWorld from "@/components/HelloWorld.vue";

xit("should bind the `name` properly", async () => {
  const { getByLabelText, getByText } = render(HelloWorld);

  // Asserts initial state.
  getByText("Hello world!");

  // Get the input DOM node by querying the associated label.
  const usernameInput = getByLabelText(/name/i);

  // Updates the <input> value and triggers an `input` event.
  await fireEvent.update(usernameInput, "Ringo");

  // The rendered value for the `name` variable should be properly updated
  getByText("Hello Ringo!");
});
