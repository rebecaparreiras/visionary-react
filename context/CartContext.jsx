import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const stored = localStorage.getItem('cartItems');
        return stored ? JSON.parse(stored) : [];
    });

    const addToCart = (product) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id);
            if (existingItem) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, amount) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === productId) {
                const newQuantity = item.quantity + amount;
                return {
                    ...item,
                    quantity: newQuantity > 1 ? newQuantity : 1
                };
            }
            return item;
        }));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);


    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, subtotal }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
