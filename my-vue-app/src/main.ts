import { createApp } from "vue";
import "./reset.css";
import "./style.css";
import App from "./App.vue";

import { vfmPlugin } from "vue-final-modal";

// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init({
  duration: 1200,
});

const app = createApp(App);

app.use(
  vfmPlugin({
    key: "$vfm",
    componentName: "VueFinalModal",
    dynamicContainerName: "ModalsContainer",
  })
);

app.mount("#app");
