import axios from "axios";

export default async function apiDeleteCategory(params: any) {
  console.log("params", params);
  try {
    const response = await axios.post(
      "http://localhost:7000/product-type/delete",
      {
        id: Number(params),
      }
    );
  } catch (error) {
    console.log(error);
  }
  return true;
}
