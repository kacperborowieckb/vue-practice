/**
 * @vitest-environment happy-dom
 */

import { type DOMWrapper, type VueWrapper, mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";
import AutomatedDropdown from "../AutomatedDropdown.vue";

describe("Dropdown Component Integration", () => {
  let wrapper: VueWrapper;
  let button: DOMWrapper<HTMLButtonElement>;

  beforeEach(() => {
    wrapper = mount(AutomatedDropdown, {
      props: {
        items: [
          { content: "First item", actionData: "Message From First Item" },
          { content: "Second item", actionData: "Message From Second Item" },
        ],
      },
      provide: { alert: vi.fn() },
    });
    button = wrapper.find("button");
  });

  it("Should render toggle button", () => {
    expect(button.exists()).toBeTruthy();
  });

  it("Should not render dropdown list", () => {
    expect(wrapper.find("ul").exists()).not.toBeTruthy();
  });

  it("Should render dropdown list after button click", async () => {
    await button.trigger("click");

    expect(wrapper.find("ul").exists()).toBeTruthy();
  });

  it("Rendered list should has 3 items", async () => {
    await button.trigger("click");

    expect(wrapper.find("ul").findAll("li").length).toBe(2);
  });

  it("Opened dropdown should close after clicking outside", async () => {
    await button.trigger("click");

    expect(wrapper.find("ul").exists()).toBeTruthy();
    document.body.click();
    await wrapper.vm.$nextTick();
    expect(wrapper.find("ul").exists()).not.toBeTruthy();
  });

  it("Opened dropdown should not close after clicking on the list", async () => {
    await button.trigger("click");

    expect(wrapper.find("ul").exists()).toBeTruthy();
    wrapper.trigger("click");
    expect(wrapper.find("ul").exists()).toBeTruthy();
  });

  it("It should return correct number on dropdown item click", async () => {
    const alertSpy = vi.spyOn(window, "alert");

    await button.trigger("click");
    const dropdownItems = wrapper.findAll("li");

    await dropdownItems[0].trigger("click");
    expect(alertSpy).toHaveBeenCalledWith("Message From First Item");

    await dropdownItems[1].trigger("click");
    expect(alertSpy).toHaveBeenCalledWith("Message From Second Item");

    expect(alertSpy).toHaveBeenCalledTimes(2);

    vi.restoreAllMocks();
  });
});
