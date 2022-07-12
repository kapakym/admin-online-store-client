import axios from "axios";
interface paramsType {
  id: number;
  parentId: number;
  name: string;
}

export default async function apiUpdateCategory(params: paramsType) {
  console.log("params", params);
  // try {
  //   const response = await axios.post(
  //     "http://localhost:7000/product-type/update",
  //     {
  //       id: Number(params.id),
  //       parentId: Number(params.parentId),
  //       name: params.name,
  //     }
  //   );
  // } catch (error) {
  //   console.log(error);
  // }
  return true;
}
