
import { Promo } from '../types/promo'
import { Card } from '../types/card'
import { Category } from '../types/category'
import { Cart } from '@/types/cart'

const BASE = 'http://localhost:7777/api'

export async function fetchPromos(): Promise<Promo[]> {
    
    const res = await fetch(`${BASE}/promo`,{}
    )
    if (!res.ok) throw new Error('Ошибка загрузки рекламы')
    return res.json()
}

export async function fetchCards(): Promise<Card[]> {
    
    const res = await fetch(`${BASE}/product`,{}
    )
    if (!res.ok) throw new Error('Ошибка загрузки карточки')
    return res.json()
}

export async function fetchCategory(): Promise<Category[]> {
    
    const res = await fetch(`${BASE}/category`,{}
    )
    if (!res.ok) throw new Error('Ошибка загрузки категрии')
    return res.json()
}



export async function addToCart(productId: number) {
    const response = await fetch(`${BASE}/cart`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
    });

    if (!response.ok) {
        throw new Error('Ошибка добавления товара в корзину');
    }
    return response.json();
}

export async function fetchCart(): Promise<Cart[]> {
    const res = await fetch(`${BASE}/cart`);
    if (!res.ok) throw new Error('Error fetching cart');
    return res.json();
  }