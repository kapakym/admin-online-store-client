import axios from "axios";
import { ref, onMounted } from "vue";

export default function useCategory() {
  const catproducts = ref({});
  const catresponse: any = ref([]);
  const isCategoryLoading = ref(true);
  // Получение всего списка пользователей с сервера
  async function fetchCategory() {
    try {
      const response = await axios.get("http://localhost:7000/product-type");
      const treeProduct: any = [];
      response.data.forEach((element: any) => {
        if (!element.parentId) {
          treeProduct.push(addNode(element, response.data));
        }
      });
      catproducts.value = {
        id: 0,
        name: "Каталог товаров",
        picture: "/node",
        childrens: treeProduct,
      };
      catresponse.value = response.data;
      catresponse.value = [{ id: 0, name: "Корень" }, ...catresponse.value];
      console.log(catresponse.value);
      // console.log("aaaaa", treeProduct, catresponse);
    } catch (error) {
      alert("Ошибка");
      console.log(error);
    } finally {
      isCategoryLoading.value = false;
    }
  }

  function addNode(parent: any, data: any) {
    if (!parent) return;
    const result = data.filter((element: any) => element.parentId == parent.id);
    parent.childrens = result;
    parent.childrens.forEach((element: any) => {
      element.childrens = [];
      element.childrens.push(addNode(element, data));
    });
    return parent;
  }

  onMounted(fetchCategory);
  console.log("aaaaa", catresponse);
  return {
    catproducts,
    catresponse,
    isCategoryLoading,
  };
}
