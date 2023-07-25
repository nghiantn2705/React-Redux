import { useContext, useEffect } from "react"
import axios from "axios"
import ProductContext from "../context/products"
const List = () =>{
    const {state,dispatch}= useContext(ProductContext) as any
    useEffect(() => {
        const fetchProducts = async () => {
                try {
                    const { data } = await axios.get("http://localhost:3000/products");
                    dispatch( {type:"FETCH_PRODUCT", payload:data})
                } catch (error:any) {
                
                } finally {
                }
            };
            fetchProducts();
    }, []);
    const addProducts = async (product:any) => {
        try {
            const { data } = await axios.post("http://localhost:3000/products",product);
            dispatch( {type:"product/addproducts", payload:data})
        } catch (error:any) {
        
        } finally {
        }
    };
    const removeProducts = async (id:any) => {
        try {
           await axios.delete("http://localhost:3000/products/"+id);
            dispatch( {type:"product/removeproducts", payload:id})
        } catch (error:any) {
        
        } finally {
        }
    };
    const updateProducts = async (product:any) => {
        try {
            const { data } = await axios.put(`http://localhost:3000/products/` + product.id,product);
            dispatch( {type:"product/updateproducts", payload:data})
            
        } catch (error:any) {
        
        } finally {
        }
    
    };
    return (
      <div>
           {state?.products.map((item: any) => {
                return (
                    <div key={item.id}>
                        {item.name}

                    </div>
                );
            })}
            <button className="button" onClick={()=>{addProducts({name:"nghĩa"})}}>Add</button>
            <button className="button" onClick={()=>{removeProducts(5)}}>Remove</button>
            <button className="button" onClick={()=>{updateProducts({name:"nghĩa C",id:2})}}>update</button>
      </div>
    )
}
export default List


