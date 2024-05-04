import { Promo } from '../types/promo'

const BASE = 'http://localhost:7777/api'

export async function fetchPromos(): Promise<Promo[]> {
    const res = await fetch(`${BASE}/promo`)
    if (!res.ok) throw new Error('Ошибка загрузки рекламы')
    return res.json()
}