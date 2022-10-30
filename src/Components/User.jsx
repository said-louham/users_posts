import React,{useState} from 'react'
import Product from './product';
const User=({userinfo,allPosts})=>{
    const [adress,setAdress]=useState(userinfo.address)
 const [userProducts,SetuserProducts]=useState([]);
    const showproduct=()=>{
        const ALLuserProducts=allPosts.filter((post)=>post.userId===userinfo.id);
        SetuserProducts(ALLuserProducts);

    }


    return(
       <div className='user'>
                <h3> {userinfo.name}</h3>
                <p>email:{userinfo.email}</p>
                <p>ville:{adress.city}</p>
                <p>rue:{adress.street}</p>
                <button onClick={showproduct}>Details Posts</button>
                {userProducts.length>0?
           
           
                    ( 
                   <div>

                <h4 style={{marginBottom:'20px'}}> nombre des post {userProducts.length} </h4>
                      { userProducts.map((product)=>(
                              <Product productInfo={product} key={product.id}/>
                        ))}
                   </div>
                    ):
                    null 
                }
       </div>
    )

}
export default User;