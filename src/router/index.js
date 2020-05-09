import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: "/",
            name: "HelloWorld",
            meta: {
                title: "首页"
            },
            component: resolve => {
                require(["@/views/components/HelloWorld"], resolve);
            }
        }
    ]
});

// 动态生成页面title
router.afterEach((to, from) => {
    // console.log('to:', to);
    document.title = to.meta.title;
});

export default router;