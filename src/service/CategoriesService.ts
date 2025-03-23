import { ApiObject } from "@/lib/utils";
import ApiService from "@/service/apiService";

export async function GetCategoryByType() {

    const apiObject: ApiObject = {
        method: 'GET',
        authentication: false,
        urlencoded: false,
        isWithoutPrefix: false,
        endpoint: `categories`,
        body: null,
    }
    return await ApiService.callApi(apiObject);
}
