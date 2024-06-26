import { defineClientConfig } from "vuepress/client";
import DownLoadPage from "./components/DownLoadPage.vue";
import GitHubVerfiy from "./components/GitHubVerfiy.vue";
import GiteeVerfiy from "./components/GiteeVerfiy.vue";

export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        app.component('GiteeVerfiy',GiteeVerfiy);
        app.component('GitHubVerfiy',GitHubVerfiy);
        app.component('DownLoadPage',DownLoadPage);
    },
});
