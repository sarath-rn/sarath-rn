import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from "redux";

class Form extends Component{
    
//PRISTINE //DIRTY //TOUCHED //ERROR


componentWillMount(){
    this.props.addMessage();

}

    renderInputFeild(field){
        const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error':''}`
       return(
           <div className={className}>
               <label>{field.mylabel}</label>
               <input type="text"{...field.input}/>
               <div className="error">
                   {field.meta.touched ? field.meta.error: ''}

               </div>
           </div>
       )
    }

    onSubmit(values){
        this.props.addMessage(values)
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <h3>enter valuee</h3>
                <form onSubmit={this.props.handleSubmit((event)=>this.onSubmit(event))}>
                    <Field
                    mylabel="enter name"
                       name="name"
                       component={this.renderInputFeild}
                    
                    />

                    <Field
                    mylabel="enter title"
                       name="title"
                       component={this.renderInputFeild}

                    
                    />
                    <button type="submit">submit</button>
                       
                </form>

                {/* this.props.data.succes.map((item) =>(
                    <div>
                        {item}
                    </div>
            
                )) */}

                {this.props.data.succes?
               
                        <div>
                            {this.props.data.succes.name} {this.props.data.succes.title}
                        </div>
    
                :null}


            
            </div>
        )
    }
}
function validate(values){
    const errors = {};
    if(!values.title){
        errors.title="**the title is empty"
    }
    if(!values.name){
        errors.name="**the title is empty"
    }
   // console.log(values)
    return errors;
}


const mapStateToProps = (state) =>{
    console.log(state.datas)
    return {
        // succes:state.datas
        data:state.datas
    }
}
const mapDispatchToProps = (dispatch) =>{        
    return bindActionCreators({
       addMessage
    },dispatch)
}




export default reduxForm({
    validate,
    form:'PostMessage'
})(
    connect(mapStateToProps, mapDispatchToProps)(Form)
);

// {addMessage}