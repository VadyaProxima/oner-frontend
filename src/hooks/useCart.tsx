import { useQuery } from '@tanstack/react-query';
import { fetchCart } from '../srvices/fetch';

const useCart = () => {
    return useQuery({
        // queryFn: () => fetchCategories(),
        queryFn: fetchCart,
        queryKey: ['cart'],
        staleTime: 1000 * 5,
    });
};

export { useCart };