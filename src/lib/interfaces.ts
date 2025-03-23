export interface ProductProps {
    slug: string;
    name: string;
    ProductDetails: IndividualProductProps[],
    mainCategoryKey: string;
    subCategoryKey: string;
    description: string;
    isKokoAvailable: boolean;
}

interface IndividualProductProps {
    colorKey: {
        _id: string,
        key: string,
        name: string,
        hex: string,
        __v: number,
    },
    urls: UrlProps[],
    sizes: SizesProps[],
    price: number;
}

interface UrlProps {
    url: string;
    isCover: boolean;
}
interface SizesProps {
    size: string;
    qty: number;
}
