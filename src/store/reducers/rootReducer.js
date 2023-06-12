const initState={
    users:[
        {id:1, name:'cuong'},
        {id:2, name:'batman'},
    ],
    posts:[]
}

const rootReducer =(state=initState,action)=>{

    switch (action.type) {
        case 'DELETE_USER':
           
             let users =state.users
             users= users.filter(item=> item.id !==action.payload.id)
             console.log('run into delete user', users)
           return{
            ...state,users
           }
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 100000)
           let user = {id:id,name:`Random - ${id}`}
           return{
            ...state,users:[...state.users, user]
           }
        default:
            return state;
    }

   
}

export default rootReducer;