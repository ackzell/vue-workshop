import MyComponent from "@/components/LifecycleHooks/MyComponent";

xdescribe("Lifecycle Hooks tests", () => {
  it("should have the `beforeCreate` hook", async () => {
    expect(MyComponent.beforeCreate).toBeDefined();
  });

  it("should have the `created` hook", async () => {
    expect(MyComponent.created).toBeDefined();
  });

  it("should have the `beforeMount` hook", async () => {
    expect(MyComponent.beforeMount).toBeDefined();
  });

  it("should have the `mounted` hook", async () => {
    expect(MyComponent.mounted).toBeDefined();
  });

  it("should have the `beforeUpdate` hook", async () => {
    expect(MyComponent.beforeUpdate).toBeDefined();
  });

  it("should have the `updated` hook", async () => {
    expect(MyComponent.updated).toBeDefined();
  });

  it("should have the `beforeDestroy` hook", async () => {
    expect(MyComponent.beforeDestroy).toBeDefined();
  });

  it("should have the `destroyed` hook", async () => {
    expect(MyComponent.destroyed).toBeDefined();
  });
});
