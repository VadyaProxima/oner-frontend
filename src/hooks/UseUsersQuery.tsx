'use client'

import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '../srvices/fetch';

const useUserQuery = () => {
    return useQuery({   
        // queryFn: () => fetchCategories(),
        queryFn: fetchUser,
        queryKey: ['User'],
        staleTime: 1000 * 5,
    });
};

export { useUserQuery };  