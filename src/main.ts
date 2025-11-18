import "./assets/main.css";

import App from "./App.vue";

import KButton from "./components/KButton.vue";
import KTextInput from "./components/KTextInput.vue";
import router from "./router";
import { createApp } from "vue";

const app = createApp(App);

app.use(router);
app.component("KTextInput", KTextInput);
app.component("KButton", KButton);

app.mount("#app");