import { useEffect } from "react"
import { useState } from "react"
import "../../css/tokobuah.css"
import axios from "axios"

export function TokoBuahList() {
  const [products, setProducts] = useState([])
  const [product , setProduct] = useState({
    id: 0,
    product : "" ,
    img_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWc7g5DWDOAp7pqzkLV6tSclMjZz8NSN7S9a2GzQnN5AVbDn8ohRBWV2CjnkyJSjk6tS4&usqp=CAU",
    price : 0
  })

  const [search, setSearch] = useState("")

  function clearProduct() {
    let newData = {
      id: 0,
      product : "" ,
      img_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWc7g5DWDOAp7pqzkLV6tSclMjZz8NSN7S9a2GzQnN5AVbDn8ohRBWV2CjnkyJSjk6tS4&usqp=CAU",
      price : 0
    }
    
    setProduct({...newData})
  }


  function inputHandler(event) {
   
    const { value, name } = event.target;

    //event = input 
     name === "search" ? 
     setSearch(value) 
     :
    //  product : "anggur" ,
    //  img_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWc7g5DWDOAp7pqzkLV6tSclMjZz8NSN7S9a2GzQnN5AVbDn8ohRBWV2CjnkyJSjk6tS4&usqp=CAU",
    //  price : 0 ,

    setProduct({
      ...product,
      [name]: value,
    })
  }

  function fetchProducts() {
    axios.get("http://localhost:2000/products").then((res) => {
      // console.log(res.data);
      if(res.data.length) {
        setProducts([...res.data])
      }
      else {
        setProducts([res.data])

      }
      console.log(products);
    })

  }

  useEffect(()=> {
    fetchProducts();
  },[])

  function editProduct(data){
    setProduct({...data})
    console.log(data);

  }

  function deleteProduct(id) {
   let answer =  window.confirm("are you sure you want to delete this product?")
   alert(answer)
  if(answer) {
    axios.delete("http://localhost:2000/products/"+id ).then(() => {
      fetchProducts();
      alert("data has been deleted")

    })
  } 
  }

  //componentDidUpdate
  useEffect(() => {
    if(product.img_url === "")
    setProduct({
        ...product,
        ["img_url"]: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWc7g5DWDOAp7pqzkLV6tSclMjZz8NSN7S9a2GzQnN5AVbDn8ohRBWV2CjnkyJSjk6tS4&usqp=CAU",
      })
  },[product.img_url])


  function addproductItem() {
    if(!product.product || !product.img_url || !product.price) return alert("please fill the data")
    else if(products.find((val)=> val.id === product.id)) {
    return  axios.patch("http://localhost:2000/products/" + product.id, product ).then(() => {
        fetchProducts();
        alert("product updated")
    })
    }
    
  return  axios.post("http://localhost:2000/products", product ).then(() => {
      fetchProducts();
      alert("new product added")

  })  }


return (
    <>
    <div className="product-list">
        <div className="input-product"  > <input className="product-search" placeholder="Search" name="search"  onChange={inputHandler} ></input> <hr/>  
    </div>
          <div className="content-product-list">

{
products?.map((val,idx) => {
    if(val.product.toLowerCase().includes(search.toLocaleLowerCase()))
    return (
      <div className="product" key={idx}>
    <BuahCard data={val} idx={idx} />
    <div className="product-edit-delete" >
    <button onClick={() => editProduct(val)}> edit </button> 
    <button onClick={()=> deleteProduct(val.id)}> delete </button> </div>

    </div>
 
    )
  })
}
            
</div>
      </div>
      <div className="product-add">
      <div style={{ textAlign: "left", fontWeight: "600", cursor: "pointer"}} onClick={ ()=> clearProduct() }>new</div>

        <input name="product" className="input-product" type={"text"} placeholder="Product Name"  onChange={inputHandler} value={product.product}></input>
        <img src={product.img_url} alt="product_img" style={{ width:"100%", height: "300px" }}  />
        <input name="img_url" className="input-product" type={"text"} placeholder="Image URL"  onChange={inputHandler}  ></input>
        <input name="price" className="input-product" type={"number"} placeholder="Price"  onChange={inputHandler} value={product.price}></input>
        <button className="button-add-product"   onClick={addproductItem}>Add </button>
    </div>
    </>
  
)

}


export function BuahCard(props) {

  return ( 
    <> 
      <div className="product-img "> <img src={props.data.img_url}  alt="product img"/> </div>
      <div className="product-title" >{props.data.product} </div>
      <div className="product-price" >Rp.{Number(props.data.price).toLocaleString()}</div>

   
   </>

  )
}


//mengirim data/value dari component a ke component b 
//menggunakan props 

// import si component b

// function A(){
//  return ( 
//     <div>
//         this is component a
//     <B/ name="udin" >
//     </div>

//  )    
// }

// function B(props) {
//     return (
//         <div>
//             {props.name}
//         </div>
//     )
// }