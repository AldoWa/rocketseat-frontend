import { createContext, useCallback, useMemo, useState } from "react";

interface CartProviderProps {
  children: React.ReactNode;
}

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  qtd: number;
  imageUrl: string;
}

interface CartContextData {
  cart: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (id: number) => void;
  cartQtd: number;
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({children}: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartQtd, setCartQtd] = useState(0)

  function addQtdItemToCart(cartItem: CartItem, item: CartItem){
    if(cartItem.id === item.id) {
      return {
        ...cartItem,
        qtd: cartItem.qtd + 1
      }
    }
    return cartItem
  }

  const addItemToCart = useCallback((item: CartItem) => {
    const cartExist = cart.find(cartItem => cartItem.id === item.id)
    setCartQtd((cartQtd) => (cartQtd + 1))

    if(cartExist) {
      const newCart = cart.map((cartItem) => addQtdItemToCart(cartItem, item))
      setCart(() => [...newCart])
      return;
    }

    setCart((cart) => [...cart, item])
  }, [cart])

  const removeItemFromCart = useCallback((id: number) => {
    const newCart = cart.filter(cartItem => cartItem.id !== id)
    const newCartQtd = newCart.reduce((acc, item) => { return acc + item.qtd }, 0)
    setCartQtd(newCartQtd)
    setCart(() => [...newCart])
  }, [cart])

  const valueProviderMemo = useMemo(() => ({ addItemToCart, cart, removeItemFromCart, cartQtd }), [addItemToCart, cart, removeItemFromCart, cartQtd])

  return (
    <CartContext.Provider value={valueProviderMemo}>
      {children}
    </CartContext.Provider>
  )
}