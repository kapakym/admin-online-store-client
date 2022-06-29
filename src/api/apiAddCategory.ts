import axios from "axios";
import { ref } from "vue";

export default async function AddCategory(params: any) {
  const result = ref({});
  const formData = new FormData();
  formData.append("name", params.name);
  formData.append("parentId", params.parentId);
  formData.append("picture", params.file);
  try {
    result.value = await axios.post(
      "http://127.0.0.1:7000/product-type",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }

  return result;
}
