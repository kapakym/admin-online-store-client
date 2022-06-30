import axios from "axios";

export default async function apiDeleteCategory(params: any) {
  try {
    const response = await axios.post(
      "http://localhost:7000/product-type/delete",
      {
        id: Number(params.id),
      }
    );
  } catch (error) {
    console.log(error);
  }
  return "ok";
}
