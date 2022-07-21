import apiGetCategory from "@/api/apiGetCategory";
import {onMounted, ref} from "vue";

export default function useCategory() {
    const allBrands = ref([]);
    const isBrandLoading = ref(true);

    onMounted(async () => {
        const result: any = await apiGetCategory();
        allBrands.value = result.catproducts.value;
        isBrandLoading.value = result.isCategoryLoading.value;
    });

    return {
        allBrands,
        isBrandLoading
    };
}
