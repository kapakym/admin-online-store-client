import {createApp} from "vue";
import App from "@/App.vue";
import components from "@/components/UI";
import router from "@/router/router";
import store from "@/store";
import "material-design-icons-iconfont"
import psPopup from "@/components/plugins/PsPopupPlugin"


// console.log(store);
// import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";
// Подключаем корневой компонент в точку входа в приложение
const app = createApp(App);


components.forEach((component) => {
    app.component(component.name, component);
});

app.use(router);
app.use(store);
app.use(psPopup);
app.mount("#app");
// app.use(Antd).mount("#app");
