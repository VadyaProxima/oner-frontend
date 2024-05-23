import type { NextApiRequest, NextApiResponse } from 'next';
import { Cart } from '../../types/cart';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const userId = -1;
    const cartData: Cart = req.body;

    try {
      const response = await fetch(`${req.url}`, {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartData),
      });

      if (response.ok) {
        const data = await response.json();
        res.status(201).json(data);
      } else {
        const error = await response.json();
        res.status(response.status).json(error);
      }
    } catch (error) {
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  } else {
    res.status(405).end();
  }
}