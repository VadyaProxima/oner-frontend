'use client'

import { useQuery } from '@tanstack/react-query';
import { fetchCards } from '../srvices/fetch';

const useCardsQuery = () => {
    return useQuery({   
        // queryFn: () => fetchCategories(),
        queryFn: fetchCards,
        queryKey: ['product'],
        staleTime: 1000 * 5,
    });
};

export { useCardsQuery };  