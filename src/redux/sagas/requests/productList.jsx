import { commerce } from "../../../lib/Commerce";

export function requestGetProductsList(){
    // console.log(commerce.products.list())
    return  commerce.products.list()
}