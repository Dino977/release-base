import Component from "../package/index.js";

// Automatically register this component for direct use in the browser
if (typeof window !== "undefined" && window.Vue) {
  Component.install(window.Vue);
}

export default Component;
