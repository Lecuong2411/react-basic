import { useState, useEffect} from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";

const DetailUser = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null)

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`)
          .then(post => {
            setPost(post)
          });
      }, [])
      const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'Black'
    }

    return (
      
      <div>
        {post !==null?
        (       
            <>
            
            <div>
                <img src={post.data.data.avatar}/>
            </div>
            
            <div>User's name: {post.data.data.first_name} - {post.data.data.last_name}</div>
            <div>User'email : {post.data.data.email}</div>
           <button>
           <Link style={linkStyle} to={"/User"}>Bank</Link>
           </button>
          
           </>           
        ):
        ( <div>Loading post...</div>)}
      </div>
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