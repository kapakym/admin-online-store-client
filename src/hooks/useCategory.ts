import apiGetCategory from "@/api/Category/apiGetCategory";
import {onMounted, ref} from "vue";

export default function useCategory() {
    const catproducts = ref({});
    const catresponse: any = ref([]);
    const isCategoryLoading = ref(true);

    onMounted(async () => {
        const result: any = await apiGetCategory();
        catproducts.value = result.catproducts.value;
        catresponse.value = result.catresponse.value;
        isCategoryLoading.value = result.isCategoryLoading.value;
    });

    return {
        catproducts,
        catresponse,
        isCategoryLoading,
    };
}
