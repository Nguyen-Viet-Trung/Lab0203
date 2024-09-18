import React,{useMemo, useRef, useState} from "react";

function ExUseMemo(){
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])

    const nameRef = useRef()
    const handleSubmit = () =>{
        setProducts([
            ...products,
            {
                name: name,
                price: price
            }
        ])
        setName('')
        setPrice('')
        nameRef.current.focus()
    }
    const total = useMemo(() =>{
    const result = products.reduce((result, product) =>{
       return parseInt(result)+ parseInt(product.price); 
    },0)
    return result;       
}, [products])

    return(
        <div className="alert alert-info">
            <input type="text"
            ref={nameRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhap name"/>
            <br></br>
            <input type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Nhap price"/>
            <br></br>
            <button onClick={handleSubmit}>Add</button>
            <br></br>
            <h3>Total: {total}</h3>
            <br></br>
            <ul>
                {products.map((product, index) =>{
                    <li key={index}>{product.name}-{product.price}</li>
                })}
            </ul>
            </div>
    )
        
    
}
export default ExUseMemo;