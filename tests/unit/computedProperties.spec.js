import { mount } from "@vue/test-utils";
import ComputedProperties from "@/components/ComputedProperties";

describe("Computed Properties tests", () => {
  xit("should have the `reversed` computed property declared", async () => {
    expect(ComputedProperties.computed.reversed).toBeDefined();
  });

  xit("should reverse the text provided on the input element", async () => {
    const wrapper = mount(ComputedProperties);
    const output = wrapper.find('[data-testid="test-output"]');
    const input = wrapper.find("#user-name");
    await input.setValue("Axel");
    expect(output.text()).toContain("lexA");
  });
});
