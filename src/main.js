// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import {
    Row,
    Col,
    NavBar,
    Cell,
    CellGroup,
    Icon,
    Button,
    Field,
    NumberKeyboard,
    Stepper,
    Popup,
    Picker,
    Toast,
    Panel,
    Dialog,
    CellSwipe,
    List,
    Checkbox,
    CheckboxGroup,
    Tab,
    Tabs,
    SubmitBar
} from "vant";
import "vant/lib/vant-css/index.css";
import { isDevelopment } from "./config/url";

Vue.config.productionTip = false;

Vue.use(Row)
    .use(Col)
    .use(NavBar)
    .use(Cell)
    .use(Button)
    .use(Picker)
    .use(CellGroup)
    .use(Icon)
    .use(NumberKeyboard)
    .use(Field)
    .use(Stepper)
    .use(Popup)
    .use(Panel)
    .use(Dialog)
    .use(CellSwipe)
    .use(List)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(Tab)
    .use(Tabs)
    .use(SubmitBar);

window.Dialog = Dialog;
window.Toast = Toast;

if (isDevelopment) {
    // require('./libs/mock'); // 告诉程序，使用了mockjs，来进行数据模拟
}

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>"
});
