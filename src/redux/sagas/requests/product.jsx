import { commerce } from "../../../lib/Commerce";

export function requestGetProducts(){
    // console.log(commerce.products.list())
    return  commerce.products.list()
}