import { ITokenData } from "./ITokenData";

export interface IResponseToken{
    exp: number;
    iat: number;
    iss: string;
    sub: ITokenData
}