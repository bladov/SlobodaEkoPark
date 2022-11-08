import { createApp } from "vue";
import "./reset.css";
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");

// @ts-ignore
import AOS from "aos";

import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1200,
});
