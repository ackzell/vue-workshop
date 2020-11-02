import { render, fireEvent, getByText } from "@testing-library/vue";
import Directives from "@/components/Directives.vue";

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
