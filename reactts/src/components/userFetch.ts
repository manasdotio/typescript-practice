import { useEffect,useState } from "react";

interface FetchState<T>{
    data:T | null;
    loading:boolean;
    error:string | null;
}

export function useFetch<T>(url:string):FetchStete<T>{
    const [state,setState]=useState<FetchState<T>>({
        data:null,
        loading:true,
        error:null
    });

    // useEffect to make fetch request



    return state
}
