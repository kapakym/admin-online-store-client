import axios from "axios";
import { ref } from "vue";

export default async function apiGetBrand() {
  const responseBrand: any = ref([]);
  try {
    const response = await axios.get("http://localhost:7000/product-type");
    console.log(response.data);
    responseBrand.value = response.data;
    return responseBrand;
  } catch (error) {
    console.log(error);
  }
}
