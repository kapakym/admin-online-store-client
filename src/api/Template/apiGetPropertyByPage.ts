import { ref } from "vue";
import router from "@/router/router";
import $api from "@/api/http";

export default async function apiGetProperetyByPage(
  page: number,
  limit: number,
  templateId: number
): Promise<{}> {
  const response: any = ref({});
  try {
    response.value = await $api.get("/template/property/page", {
      params: { limit: limit, page: page - 1, id: templateId },
    });
  } catch (error: any) {
    await router.push(`/error/${error.response.data.message}`);
  }
  return response;
}
