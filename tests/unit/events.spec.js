import { mount } from "@vue/test-utils";
import Parent from "@/components/Events/Parent";
import Child from "@/components/Events/Child";

describe("Events tests", () => {
  describe("Parent component tests", () => {
    xit("should have the `Child` component registered", async () => {
      expect(Parent.components.Child).toBeDefined();
    });

    xit("should implement the `Child` component", async () => {
      const wrapper = mount(Parent);
      const childComponent = wrapper.findComponent(Child);
      expect(childComponent.exists()).toBe(true);
    });
  });

  describe("Child component tests", () => {
    xit("should emit an event `the-event` when clicking on the button", async () => {
      const wrapper = mount(Child);
      await wrapper.find("button").trigger("click");
      expect(wrapper.emitted()["the-event"]).toBeTruthy();
    });

    xit("should emit an event `the-event` and send a payload when clicking on the button", async () => {
      const wrapper = mount(Child);
      await wrapper.find("button").trigger("click");
      expect(wrapper.emitted()["the-event"][0]).not.toEqual([]);
    });
  });

  describe("Parent AND Child component tests", () => {
    xit("should capture the event from the Child in the Parent", async () => {
      const spy = jest.spyOn(Parent.methods, "onChildEventCaught");
      const wrapper = mount(Parent);
      const childComponent = wrapper.findComponent(Child);
      expect(childComponent.exists()).toBe(true);
      await childComponent.find("button").trigger("click");
      expect(spy).toHaveBeenCalled();
    });
  });
});
