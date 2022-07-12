import axios from "axios";
import { ref } from "vue";

export default async function apiGetCategory(): Promise<{}> {
  const catproducts = ref({});
  const catresponse: any = ref([]);
  const isCategoryLoading = ref(true);
  // Получение всего списка пользователей с сервера

  try {
    const response = await axios.get("http://localhost:7000/product-type");
    const treeProduct: any = [];
    response.data.forEach((element: any) => {
      if (!element.parentId) {
        element.parentId = 0;
        treeProduct.push(addNode(element, response.data));
      }
    });
    catproducts.value = {
      id: 0,
      name: "Каталог товаров",
      picture: "notpicture.png",
      childrens: treeProduct,
      isActive: false,
    };
    catresponse.value = response.data;
    catresponse.value = [{ id: 0, name: "Корень" }, ...catresponse.value];
  } catch (error) {
    alert("Ошибка");
    console.log(error);
  } finally {
    isCategoryLoading.value = false;
  }

  return {
    catproducts,
    catresponse,
    isCategoryLoading,
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
