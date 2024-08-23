/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect, beforeEach } from "vitest";
import { type VueWrapper, type DOMWrapper, mount } from "@vue/test-utils";
import Input from "../Input.vue";

describe("Input Component", () => {
  let wrapper: VueWrapper;
  let input: DOMWrapper<HTMLInputElement>;

  beforeEach(() => {
    wrapper = mount(Input, {
      propsData: {
        placeholder: "First Name",
        className: "form__input",
        modelValue: "",
        "onUpdate:modelValue": (e) => wrapper.setProps({ modelValue: e }),
      },
    });

    input = wrapper.find("input");
  });

  it("Should render correctly", () => {
    expect(input.exists()).toBeTruthy();
  });

  it("Should have correct placeholder and class", () => {
    expect(input.attributes("placeholder")).toEqual("First Name");
    expect(input.attributes("class")).toEqual("form__input");
  });

  it("Should be empty at first", () => {
    expect(input.element.value).toBe("");
  });

  it("Should update model value on change", async () => {
    await input.setValue("John");
    expect(wrapper.props("modelValue")).toBe("John");
  });
});
