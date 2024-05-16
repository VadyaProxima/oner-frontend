'use client'
import { useMutation } from '@tanstack/react-query';
import { addToCart } from '../srvices/fetch';

const useAddToCartMutation = () => {
  return useMutation({
      mutationKey: ['addToCart'],
      mutationFn: addToCart,
  });
};

export default useAddToCartMutation;
