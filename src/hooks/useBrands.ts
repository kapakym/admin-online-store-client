import {onMounted, ref} from "vue";
import apiGetBrand from "@/api/Brand/apiGetBrand";

export default function useCategory() {
    const allBrands = ref([]);
    const isBrandLoading = ref(true);

    onMounted(async () => {
        const {responseBrand}: any = await apiGetBrand();
        console.log(responseBrand.value);
        allBrands.value = responseBrand.value;
        isBrandLoading.value = true;
    });

    return {
        allBrands,
        isBrandLoading
    };
}
