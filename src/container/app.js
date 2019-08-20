import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Input from "../components/input"
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from "redux";
import { deleted,addValue} from "../actions"



class App extends Component {

    componentWillMount(){
        this.props.deleted();
        this.props.addValue();

    }

    renderInputFeild(field){
       
       return(
           <div>
               <label>{field.mylabel}</label>
               <input type="text"{...field.input}/>
               
           </div>
       )
    }
    onSubmit(values){
       
        this.props.addValue(values)
        
    }
    clicked(e){
        this.props.deleted(e)        
    }


    render(){
    //    console.log(this.props.data.entervalue)
         console.log(this.props.data)
        return(
            <div>
              
            
               <h3>enter valuee</h3>
                <form onSubmit={this.props.handleSubmit((event)=>this.onSubmit(event))}>
                    <Field
                    mylabel="enter value"
                       name="name"
                       component={this.renderInputFeild}
                    
                    />
                     {/* <button type="submit">submit</button> */}
                    </form>

                            {this.props.data.entervalue?
                                        
                                <div>
                                    {
                                      

                                    this.props.data.entervalue.map((item,id)=>(

                                                <li  onClick={(e)=>this.clicked(item.id) }>
                                                    
                                                    {item.name}
                                                    
                                                </li> 
                                    ))
                                        
                                    
                                    }

                                </div>

                            :null}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        data: state.datas
    }
}


const mapDispatchToProps = (dispatch) =>{        
    return bindActionCreators({
       deleted,
       addValue
    },dispatch)
}

export default reduxForm({
   
    form:'PostMessage1'
})(
    connect(mapStateToProps, mapDispatchToProps)(App)
);