import axios from "axios";
import { ref } from "vue";

export default async function apiChangePictureCategory(params: any) {
  const result = ref({});
  const formData = new FormData();
  formData.append("id", params.id);
  formData.append("picture", params.file);
  try {
    result.value = await axios.post(
      "http://127.0.0.1:7000/product-type/change-picture",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }

  return result;
}
