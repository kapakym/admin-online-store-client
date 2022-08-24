interface ParamsProduct {
    name: string;
    price: number;
    count: number;
    barcode: string;
    categoryId: number;
    barandId: number;
    templateId: number;

    photos: Array<any>;
}

export {ParamsProduct}