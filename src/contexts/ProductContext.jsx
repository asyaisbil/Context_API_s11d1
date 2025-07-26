import { createContext, useState } from 'react';
import { data } from '../data.js';

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
    const [products, setProducts] = useState(data);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
}
