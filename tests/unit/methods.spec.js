import { render, fireEvent } from "@testing-library/vue";
import Methods from "@/components/Methods.vue";
import "@testing-library/jest-dom";

describe("Methods test cases", () => {
  xit("should execute the `greet` method", async () => {
    const { getByText } = render(Methods);
    global.alert = jest.fn();

    const button = getByText(/press me/i);
    await fireEvent.click(button);

    expect(global.alert).toHaveBeenCalled();
  });

  xit("should execute the `callMeMaybe` method", async () => {
    const { getByText } = render(Methods);
    global.alert = jest.fn();

    const button = getByText(/press me mabye/i);
    await fireEvent.click(button);

    expect(global.alert).toHaveBeenCalled();
  });
});
