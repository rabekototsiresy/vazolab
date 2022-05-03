import { http } from "./http"

export const getAllDio = ()=>{
    return http.get('diosezy')
}
