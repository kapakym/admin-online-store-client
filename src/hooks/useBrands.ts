import {onMounted, ref} from "vue";
import apiGetBrand from "@/api/apiGetBrand";

export default function useCategory() {
    const allBrands = ref([]);
    const isBrandLoading = ref(true);

    onMounted(async () => {
        const result: any = await apiGetBrand();
        console.log(result.value);
        allBrands.value = result.value;
        isBrandLoading.value = true;
    });

    return {
        allBrands,
        isBrandLoading
    };
}
