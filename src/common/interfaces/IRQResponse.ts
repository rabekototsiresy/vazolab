import { IResponse } from "./IResponse";

export interface IRQResponse{
    config: {[key:string]:string};
    data: IResponse;
    headers:{[key:string]:string};
    status: number;
    statusText: string
}