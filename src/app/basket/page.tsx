'use client'
import styles from "./basket.module.scss"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/hooks/useCart';
import { Cart } from "../../types/cart";
import { deleteFromCart } from "@/hooks/deletefromCart";
import { updateQuantity } from "@/hooks/updateCart";
export default function Basket(){

  const { data, isLoading, refetch } = useCart();
  const [cartData, setCartData] = useState<Cart[]>(data || []);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalWithDelivery, setTotalWithDelivery] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cartData.length);
  }, [cartData]);

  useEffect(() => {
    let sum = 0;
    for (const cart of cartData) {
      sum += cart.price * cart.quantity;
    }
    setTotalPrice(sum);

  }, [cartData]);

  useEffect(() => {
    setCartData(data || []);
  }, [data]);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (!data) {
    return <div>Корзина пуста</div>;
  }

  const handleDelete = async (id: number) => {
    await deleteFromCart(id);
    refetch();
  };

  const handleQuantityChange = async (id: number, quantity: number) => {
   if (quantity < 1) return;
   const updatedCartData = cartData.map((cart) => {
     if (cart.id === id) {
       return {...cart, quantity };
     }
     return cart;
   });
   setCartData(updatedCartData);
   await updateQuantity(id, quantity);
 };
 
        
    return (
        <div className={styles.basket}>
            <div className={styles.container}>
                <h2>Корзина</h2>
                
                <div className={styles.sector}>
                    <div className={styles.products}>
                        <div className={styles.checkbox1}>
                            <input type="checkbox" name="" id="" />
                            <span>Отметить/снять все товары</span>
                        </div>
                        <div className={styles.cards}>
                           <div>
                            
                            {cartData.map((cart) => (
                            <>
                             {/* КЕЙ */}
                            <div key={`${cart.id}-${cart.quantity}`}
                            
                             style={{display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center'}}
                             >
                                <div className={styles.impimgtit}>
                                <input type="checkbox" name="" id="" />
                                <Image src={cart.image.includes('http') ? cart.image : `/assets/${cart.image}`} height={80} width={80} alt="product_image" className={styles.tableImg} />

                                <div className={styles.cardinf}>
                                    <span className={styles.card_name}>{cart.name}</span>
                                    <br />
                                    <span className={styles.card_name}> доп инфа товара инфа товара доп инфа товара
                                        инфа товара</span>

                                </div>

                            </div><div className={styles.dayscountprice}>
                                    <span className={styles.days}>5 дней</span>
                                    <div className={styles.pricecounter}>
                                        <div className={styles.counter}>
                                            <button onClick={() => handleQuantityChange(cart.id, cart.quantity - 1)}><Image className={styles.incrdecr} width={20} height={20} src="/assets/minus.svg" alt="logo" /></button>
                                            <span className={styles.count}>{cart.quantity}</span>
                                            <button onClick={() => handleQuantityChange(cart.id, cart.quantity + 1)}><Image className={styles.incrdecr} width={20} height={20} src="/assets/plus.svg" alt="logo" /></button>
                                        </div>
                                        <span className={styles.priceofine}>1шт={cart.price}</span>
                                    </div>
                                    <h2 className={styles.price}>{cart.price * cart.quantity}</h2>

                                </div>
                                
                                {/* КНОПКА ДЛЯ УДАЛЕНИЯ */}
                                <button  onClick={() => handleDelete(cart.id)} className={styles.deletebutton}>  
                                    <Image className={styles.img2} width={20} height={20} src="/assets/deleteitem.svg" alt="logo" />
                                </button>
                            </div>
                                
                                </>
                         ))}
                            </div> 
                            
                          
                        
                        </div>
                        
                    </div>
                    <div className={styles.sector2}>
                        <div className={styles.container22}>

                         <div className={styles.vashzakaz}>
                            <h2>Ваш заказ</h2> 
                            </div>
                            
                            <div className={styles.sector22}>
                                <div className={styles.tovari}>
                                <h2>Товары</h2>
                                <h2>6</h2> 
                                </div>
                                
                                <div className={styles.input_with_arrow_button}>
                                <input className={styles.input_text} placeholder='Промокод ' type="text" name="dsadasd" id=""/> 
                                <button className={styles.arrow_button}>
                                    <Image className={styles.img2} width={20} height={20} src="/assets/strelka.svg" alt="logo" />
                                </button>
                                </div>
                                
                            </div>

                            <div className={styles.sector22}>
                                <div className={styles.tovari}>
                                <h2>Итого</h2>
                                <h2>{totalPrice}</h2> 
                                </div>
                                
                                <button className={styles.oformbtn}>
                                    Оформление заказа
                                </button>
                                
                            </div>
                        </div>
                       
                        
                    </div>
                </div>
            </div>
        </div>

    )

}
