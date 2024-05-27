import { Cart } from '../types/cart';
export const addToCart = async ( productId: number, quantity: number, price: number, image: string, name: string) => {
  const userId = 1;
  const cartData: Omit<Cart, 'id'> = {userId, productId, quantity, price, name, image };

  try {
    const response = await fetch('http://127.0.0.1:7777/api/cart', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartData),
    });

    if (response.ok) {
      const createdCart = await response.json();
      console.log('Товар добавлен в корзину:', createdCart);
      return createdCart;
    } else {
      const error = await response.json();
      console.error('Ошибка добавления в корзину:', error);
      throw new Error(error.message);
    }
  } catch (error) {
    console.error('Ошибка сервера:', error);
    throw error;
  }
};  