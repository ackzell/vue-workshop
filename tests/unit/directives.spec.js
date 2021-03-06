import { render, fireEvent } from "@testing-library/vue";
import Directives from "@/components/Directives.vue";
import "@testing-library/jest-dom";

/**
 * Calling render() on every test seems weird, and like beforeEach / beforeAll could be a better approach,
 * but the lib it self nudges you toward it by design
 * https://github.com/testing-library/react-testing-library/issues/497#issuecomment-538995327
 */

describe("Directives test cases", () => {
  xit("should loop through The Beatles names", async () => {
    const { getByText } = render(Directives);
    getByText(/John$/i);
    getByText(/Paul$/i);
    getByText(/George$/i);
    getByText(/Ringo$/i);
  });

  xit("should show the treasure when checked", async () => {
    const { getByLabelText, getByTestId } = render(Directives);
    const answerInput = getByLabelText(/show the answer/i);
    expect(getByTestId("answer-42").style.display).toBe("none");
    await fireEvent.click(answerInput);
    expect(getByTestId("answer-42").style.display).toBe("");
  });

  describe("should remove and add elements on the DOM", () => {
    xit('should ONLY show "Pick one" by default', async () => {
      const { getByText, queryByText } = render(Directives);
      // Initial state, no selection being made
      getByText(/Pick one/i);
      expect(
        queryByText(/Okay, okay... cool cool cool cool cool/i)
      ).not.toBeInTheDocument();
      expect(queryByText(/No judging here/i)).not.toBeInTheDocument();
    });

    xit('should ONLY show "Okay, okay..." when picking Tabs', async () => {
      const { getByText, getByLabelText, queryByText } = render(Directives);
      // Picking tabs
      const tabsRadio = getByLabelText(/tabs/i);
      await fireEvent.click(tabsRadio);
      getByText(/Okay, okay... cool cool cool cool cool/i);
      expect(queryByText(/Pick one/i)).not.toBeInTheDocument();
      expect(queryByText(/No judging here/i)).not.toBeInTheDocument();
    });

    xit('should ONLY show "No judging here" when picking Spaces', async () => {
      const { getByText, getByLabelText, queryByText } = render(Directives);
      // Picking tabs
      const spacesRadio = getByLabelText(/spaces/i);
      await fireEvent.click(spacesRadio);
      getByText(/No judging here/i);
      expect(queryByText(/Pick one/i)).not.toBeInTheDocument();
      expect(
        queryByText(/Okay, okay... cool cool cool cool cool/i)
      ).not.toBeInTheDocument();
    });
  });

  describe("Dynamic bindings", () => {
    xit("should dynamically apply and remove the class from the element", async () => {
      const { getByText, getByLabelText } = render(Directives);

      // no value for `indent` has been set, so no class should be present
      expect(getByText(/Color me surprised/i)).not.toHaveClass("colored");

      const spacesRadio = getByLabelText(/spaces/i);
      await fireEvent.click(spacesRadio);

      expect(getByText(/Color me surprised/i)).toHaveClass("colored");
    });

    xit("should dynamically set the disabled value on the button", async () => {
      const { getByText, getByLabelText } = render(Directives);

      expect(getByText(/Click me if you can/i)).not.toBeDisabled();

      const answerInput = getByLabelText(/show the answer/i);
      await fireEvent.click(answerInput);

      expect(getByText(/Click me if you can/i)).toBeDisabled();
    });
  });

  describe("Event bindigns", () => {
    xit("should increment the count properly", async () => {
      const { getByText } = render(Directives);

      const button = getByText(/Don't push!/i);
      await fireEvent.click(button);
      await fireEvent.click(button);

      getByText(/times clicked: 2/i);
    });
  });
});
