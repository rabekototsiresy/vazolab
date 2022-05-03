import { useQuery } from 'react-query';
import { getAllDio } from '../../core/services/diosezyService';

export const useQueryDioGET = (onSuccess:any,select:any)=>{
    return useQuery('dio-api',getAllDio,{onSuccess,select,refetchOnWindowFocus: false})
}
