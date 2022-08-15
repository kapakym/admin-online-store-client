import {ref} from "vue";
import router from "@/router/router";
import $api from "@/api/http";

export default async function apiGetCategory(): Promise<{}> {
    const categoryGraph = ref({});
    const categoryList: any = ref([]);
    // Получение всего списка пользователей с сервера

    try {
        const response = await $api.get("/category");
        const treeProduct: any = [];
        response.data.forEach((element: any) => {
            if (!element.parentId) {
                element.parentId = 0;
                treeProduct.push(addNode(element, response.data));
            }
        });
        categoryGraph.value = {
            id: 0,
            name: "Каталог товаров",
            picture: "notpicture.png",
            childrens: treeProduct,
            isActive: false,
        };
        categoryList.value = response.data;
        categoryList.value = [{id: 0, name: "Корень"}, ...categoryList.value];
    } catch (error: any) {
        await router.push(`/error/${error.response.data.message}`);
    }

    return {
        categoryGraph,
        categoryList
    };
}

function addNode(parent: any, data: any) {
    if (!parent) return;
    const result = data.filter((element: any) => element.parentId == parent.id);
    parent.childrens = result;
    parent.isActive = false;
    parent.childrens.forEach((element: any) => {
        element.childrens = [];
        element.childrens.push(addNode(element, data));
    });
    return parent;
}
