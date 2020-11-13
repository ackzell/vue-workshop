import { mount } from "@vue/test-utils";
import Slots from "@/components/Slots/Slots";

describe("Slots tests", () => {
  xdescribe("MyComponent tests ", () => {
    it("should implement the default slot", async () => {
      const wrapper = mount(Slots);
      expect(wrapper.find(".my-default-slot-content").text()).toBe("Hello");
    });
  });

  xdescribe("AnotherComponent tests", () => {
    it("should implement fallback content for the default slot", async () => {
      const wrapper = mount(Slots);
      expect(wrapper.find(".my-fallback-slot-content").text()).not.toBe("");
    });
  });

  xdescribe("NamedSlots tests", () => {
    it("should provide content for the default slot on the first instance of the `NamedSlots` component", async () => {
      const wrapper = mount(Slots);
      expect(wrapper.vm.$children[2].$slots.default).toBeDefined();
    });

    it("should provide content for the `ns-header` slot on the second instance of the `NamedSlots` component", async () => {
      const wrapper = mount(Slots);
      expect(wrapper.vm.$children[3].$slots["ns-header"]).toBeDefined();
    });

    it("should provide content for all of the slots in the third instance of the `NamedSlots` component", async () => {
      const wrapper = mount(Slots);
      expect(wrapper.vm.$children[4].$slots["ns-header"]).toBeDefined();
      expect(wrapper.vm.$children[4].$slots["default"]).toBeDefined();
      expect(wrapper.vm.$children[4].$slots["ns-footer"]).toBeDefined();
    });
  });
});
