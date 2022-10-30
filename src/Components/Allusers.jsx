import React ,{useState}from 'react';
import { useEffect } from 'react';
import ListUser from './ListUser';
import axios from 'axios';
import ReactLoading from "react-loading";
const Allusers=()=>{
const [isLoding,setisLoding]=useState(false)
const [error,setError]=useState('')
const [utilisateurs, setUtilisateurs] = useState([]);
const [allPosts,setAllposts]=useState([]);

useEffect(()=>{
    const getUsers =async()=>{
    try{
        setisLoding(true)
        const users =await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(users)
        setUtilisateurs(users.data);
        setError('')
        setisLoding(false)
    }catch(error){
        console.log(error.message);
        setError(error.message);
    }



    try{
        const posts =await axios.get('https://jsonplaceholder.typicode.com/posts');
        setAllposts(posts.data)
    }catch(error){
        console.log(error.message);
        setError(error.message);
    }
    }
    getUsers()
},[])


    return (
        <>   
        {error && 
       <div class="alert alert-danger" role="alert">
       {error}
        </div>
        }
        {
            isLoding &&  !error?
            (
                <div className='loading'>
                    <ReactLoading 
                    type={"spin"} color={"#8fcb7a"} 
                    height={100} width={100} 
                    />
                </div>
            )
            :
            (  
                    utilisateurs.length > 0 && !error?
                    <div className='allusers'>
                        <h2> Nombre des utilisateur {utilisateurs.length}</h2>
                        <ListUser utilisateurs={utilisateurs} allPosts={allPosts}/>
                    </div>:null 
            )
}     
        </>
    )
}
export default Allusers

