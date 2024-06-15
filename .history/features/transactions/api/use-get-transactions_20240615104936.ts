import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import { client } from "@/lib/hono";

export const useGetTransactions = () => {
    const params = useSearchParams();

    const query = useQuery({
        queryKey: ["accounts"],
        queryFn: async () => {
            const response = await client.api.accounts.$get();

            if(!response.ok) {
                throw new Error("Failed to fetch accounts");
            }

            const { data } = await response.json();

            return data;
        }
    })

    return query;
}