import { mount } from "@vue/test-utils";
import Watchers from "@/components/Watchers";

describe("Watchers tests", () => {
  it("should have a `myFavoriteFlavor` watcher implemented", async () => {
    expect(Watchers.watch.myFavoriteFlavor).toBeDefined();
  });

  it("should append a new entry on the logs every time the value of `myFavoriteFlavor` changes", async () => {
    const wrapper = mount(Watchers);
    await wrapper.find("#fav-b-Chocolate").trigger("click");
    await wrapper.find("#fav-b-Vanilla").trigger("click");
    const logs = wrapper.findAll(".log-entry");
    expect(logs.length).toBe(2);
  });

  it("should display the old value as well as the new value on each entry", async () => {
    const wrapper = mount(Watchers);
    await wrapper.find("#fav-b-Chocolate").trigger("click");
    await wrapper.find("#fav-b-Vanilla").trigger("click");
    const logs = wrapper.findAll(".log-entry");
    const expectedLogs = [
      "Old value:  | New value: Chocolate",
      "Old value: Chocolate | New value: Vanilla",
    ];
    expect(logs.wrappers.map((log) => log.text())).toEqual(expectedLogs);
  });
});
