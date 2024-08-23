/**
 * @vitest-environment happy-dom
 */

import { type VueWrapper, mount } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";
import Form from "../Form.vue";

describe("Form", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(Form);
  });

  it("Should render correct form and empty list", () => {
    expect(wrapper.find("form").exists()).toBeTruthy();
    expect(wrapper.findAll("input").length).toBe(2);
    expect(wrapper.find("button").exists()).toBeTruthy();

    const nameList = wrapper.find("ul");
    expect(nameList.exists()).toBeTruthy();
    expect(nameList.findAll("li").length).toBe(0);
  });

  it("Input should change text", async () => {
    const [firstNameInput, secondNameInput] = wrapper.findAll("input");

    await firstNameInput.setValue("John");
    await secondNameInput.setValue("Smith");

    expect(firstNameInput.element.value).toBe("John");
    expect(secondNameInput.element.value).toBe("Smith");
  });

  it("Should create a record in list when submitted and clear input values", async () => {
    const [firstNameInput, secondNameInput] = wrapper.findAll("input");

    await firstNameInput.setValue("John");
    await secondNameInput.setValue("Smith");

    expect(firstNameInput.element.value).toBe("John");
    expect(secondNameInput.element.value).toBe("Smith");

    await wrapper.find("form").trigger("submit.prevent");

    // console.log(wrapper.emitted());

    expect(firstNameInput.element.value).toBe("");
    expect(secondNameInput.element.value).toBe("");

    const listRecords = wrapper.find("ul").findAll("li");
    expect(listRecords.length).toBe(1);
    expect(listRecords[0].text()).toBe("John Smith");
  });
});
