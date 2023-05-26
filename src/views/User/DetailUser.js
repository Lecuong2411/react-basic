import React from "react";
import {useParams ,Link} from "react-router-dom"
import axios from "axios";

const DetailUser=()=>{
    const {id} =useParams();
    console.log(id)
    
    let data1;
     const getdata= async()=>{
        const response = await  axios.get(`https://reqres.in/api/users/${id}`)
        .then(res =>  res.status === 200 ? res.data :[])
       data1=response.data;
        console.log('data>>>>',response.data)
        console.log('data1>>>',data1)
     }


     console.log(getdata())
     console.log('ngon',data1)
   

    return(
        
        <section className="section product">
            <h2>Detail User id {id}</h2>
            <Link to='User'>Bank to List User</Link>
        </section>
    )
}




// class DetailUser extends React.Component{
 
//     async componentDidMount(){
//         let id= GetidUser();
//         let res= await axios.get(`https://reqres.in/api/users/${id}`) 
//         console.log(res);
//     }

//     render (){
//         console.log(GetidUser)
//        return(
//         <div>33</div>
//        )
//     }


// }






export default DetailUser;