let arr=[]
export function deleted(flagvalue) {
    // console.log(arr);
    // console.log(flagvalue)

    // let arr1 = arr.filter(function(value,arr,index) {
    //     return index !== flagvalue;

    //   });



    return {
        type: 'DELETE',
        // payload:arr1

        payload: {
            value: flagvalue
        }
    }

}
export function addMessage(values) {
    //console.log(values)


    return {

        type: 'ADD_MESSAGE',
        payload: values


    }



}
export function addValue(values) {

    if(values){
        arr.push(values)
    }


    return {
        type: 'ADD_VALUE',
        payload:arr
    }



}