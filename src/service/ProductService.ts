import { ApiObject } from "@/lib/utils";
import ApiService from "@/service/apiService";

export async function GetProducts() {

    const apiObject: ApiObject = {
        method: 'GET',
        authentication: false,
        urlencoded: false,
        isWithoutPrefix: false,
        endpoint: `stock`,
        body: null,
    }
    return await ApiService.callApi(apiObject);
}
export async function GetProductsBySlug({ slug }: { slug: string }) {

    const apiObject: ApiObject = {
        method: 'GET',
        authentication: false,
        urlencoded: false,
        isWithoutPrefix: false,
        endpoint: `stock/${slug}`,
        body: null,
    }
    return await ApiService.callApi(apiObject);
}
