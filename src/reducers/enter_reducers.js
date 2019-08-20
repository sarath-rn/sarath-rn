 export default function(state={},action){
     
    switch(action.type){
         case 'DELETE': 
            // let arr=state.entervalue?state.entervalue:[]
            // let ind=action.payload.value         
            // return {...state,entervalue:arr.splice(ind,1)}

            // return{...state,entervalue:action.payload.name.filter(function(value,arr,index) {
            //      return index !== action.payload.value})}
            // console.log(action.payload.value)

            // return{...state,entervalue:action.payload.name.filter(index => index !== action.payload.value)}

            return {...state,flag:action.payload}

           

            // case 'ADD_MESSAGE':
            //     return {...state,succes:action.payload}

                case 'ADD_VALUE':
                return {...state,entervalue:action.payload}

                // return {...state,entervalue:[action.payload]}
        
            default:
                return state;
    }
}