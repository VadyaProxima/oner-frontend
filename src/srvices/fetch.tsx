
import { Promo } from '../types/promo'
import { Card } from '../types/card'
import { Category } from '../types/category'
import { Cart } from '@/types/cart'
import { User } from '@/types/user'

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
    let authToken = localStorage.getItem("user");
    if (authToken && authToken.startsWith('"') && authToken.endsWith('"')) {
        authToken = authToken.slice(1, -1); // Удаление первого и последнего символов (кавычек)
    }
    const response = await fetch(`${BASE}/cart`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': authToken ? authToken : '',
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


export async function RegisterUser(newUser: User): Promise<User> {
    const res = await fetch(`${BASE}/auth/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: newUser.username,
            password: newUser.password,
        })
    });

    if (!res.ok) {
        throw new Error("Ошибка во время выполнения запроса на регистрацию пользователя");
    }

    const token = await res.json(); // Разбираем JSON-ответ
    const tokenId = token.token.replace(/"/g, ''); // Обрабатываем sessionId
    localStorage.setItem("user", tokenId);

    console.log(tokenId)

    return token; // Возвращаем разобранный JSON-объект
   
}

export async function LoginUser(credentials: { username: string, password: string }): Promise<User> {
    const res = await fetch(`${BASE}/auth/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: credentials.username,
            password: credentials.password,
        })
    });

    if (!res.ok) {
        throw new Error("Ошибка во время выполнения запроса на регистрацию пользователя");
    }

    const token = await res.json(); // Разбираем JSON-ответ
    const tokenId = token.token.replace(/"/g, ''); // Обрабатываем sessionId
    localStorage.setItem("user", tokenId);

    console.log(tokenId)

    return token;
}

