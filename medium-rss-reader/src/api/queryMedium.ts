import { useQuery } from "@tanstack/react-query";
import axios from "axios";




export function useFetchRss(accountName:string){

    
    async function fetchRss(){
        const data =  (await axios.get(`http://localhost:3000`)).data;
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'text/xml');
        console.log(xml)
       
        
        return data;
    }

    return useQuery({queryKey:['rss-feed', accountName], queryFn: fetchRss})
}

