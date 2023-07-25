import { createContext,useReducer } from "react";
import {produce} from "immer"
const ProductContext = createContext([]);
const initiaState =  {
    products: [],
    loading: false,
    errorProduct: "",
}
const ProductReducer = (state:any,action:any)=>{
    switch(action.type){
        case "FETCH_PRODUCT":
            state.products = action.payload
            return
        case "product/addproducts":
            state.products.push(action.payload)
            return
        case "product/removeproducts":
            const id = action.payload
            state.product = state.products.filter((item:any)=>{item.id !== id})
            return 
        case "product/updateproducts":
            const product = action.payload
            state.product = state.products.map((item:any)=>{ item.id === product.id ? product : item})
            return 
        default: return state    
    }
}

const ProductProvider = ({ children }: any) => {
    const [state,dispatch] = useReducer(produce(ProductReducer),initiaState)
    return (
        <ProductContext.Provider value={{state,dispatch} as any}>{children}</ProductContext.Provider>
    );
};
export {ProductProvider};
export default ProductContext;