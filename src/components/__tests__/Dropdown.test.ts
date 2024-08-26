/**
 * @vitest-environment happy-dom
 */

import { type DOMWrapper, type VueWrapper, mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import Dropdown from "../Dropdown.vue";
import DropdownContent from "../DropdownContent.vue";
import DropdownItem from "../DropdownItem.vue";

describe("Dropdown Component Integration", () => {
  let wrapper: VueWrapper;
  let button: DOMWrapper<HTMLButtonElement>;

  beforeEach(() => {
    wrapper = mount(Dropdown, {
      global: {
        components: {
          DropdownContent,
          DropdownItem,
        },
      },
      slots: {
        toggler: "<button>Open Dropdown</button>",
        content: `
            <template #default="{ close }">
            <DropdownContent :close="close">
            <DropdownItem @action="" :child-number="1">Some action 1</DropdownItem>
            <DropdownItem @action="" :child-number="2">Some action 2</DropdownItem>
            <DropdownItem @action="" :child-number="3">Some action 3</DropdownItem>
            </DropdownContent>
            </template>
            `,
      },
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

    expect(wrapper.find("ul").findAll("li").length).toBe(3);
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
    await button.trigger("click");

    const dropdownItems = wrapper.findAllComponents(DropdownItem);

    await dropdownItems[0].trigger("click");
    expect(dropdownItems[0].emitted().action[0]).toEqual([
      "Message from child nr.1",
    ]);

    await dropdownItems[1].trigger("click");
    expect(dropdownItems[1].emitted().action[0]).toEqual([
      "Message from child nr.2",
    ]);
  });
});
