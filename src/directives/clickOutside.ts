import { DirectiveBinding } from "vue";

interface HTMLElementWithClickOutside extends HTMLElement {
  clickOutsideEvent: (e: MouseEvent) => void;
}

export const vClickOutside = {
  mounted: (
    element: HTMLElementWithClickOutside,
    binding: DirectiveBinding
  ) => {
    element.clickOutsideEvent = (e: MouseEvent) => {
      if (
        !(
          element === e.target ||
          element.contains(e.target as Node) ||
          e.target === element.previousSibling ||
          element.previousSibling?.contains(e.target as Node)
        )
      ) {
        binding.value instanceof Function && binding.value();
      }
    };

    document.addEventListener("click", element.clickOutsideEvent);
  },
  unmounted: (element: HTMLElementWithClickOutside) => {
    document.removeEventListener("click", element.clickOutsideEvent);
  },
};
