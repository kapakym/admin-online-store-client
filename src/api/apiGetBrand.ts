import axios from "axios";
import { ref } from "vue";

export default async function apiGetBrand() {
  const responseBrand: any = ref([]);
  try {
    responseBrand.value = axios.get("http://localhost:7000/product-type");
    console.log(responseBrand.value);
    return {};
  } catch (error) {
    console.log(error);
  }
}
