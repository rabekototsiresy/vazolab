import { IFaritra } from "./IFaritra";

export interface IDiosezy {
    id: number,
    name: string;
    faritras: IFaritra[]
}