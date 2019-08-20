import React,{ Component } from 'react';
import { connect } from 'react-redux';


class Input extends Component {
    constructor(props) {
       // console.log(props)
        super(props)
        this.state = {
          value4: '',
          value5:'',
          flag:true
          
        }
      }

      handleChange(event) {


        this.setState({ [event.target.name]: event.target.value })
    }
    keypress(event){
       // console.log(this.state.value4)
        if(event.key==='Enter'){

        this.setState({
            value5:this.state.value4,

            
            
        })
        }
    }

    clicked(){
        this.setState({flag:this.props.data.deleted,
        value4:''})
    }
    render() {
      //  console.log(this.props.data.deleted)
        return(
            
            <div>
                <h1>enter the valueee</h1>
                <input name="value4" type="text" value={this.state.value4}  onChange={(e)=>this.handleChange(e)}  onKeyPress={(e)=>this.keypress(e)}/>
                {this.state.value5 ? 
                <li  onClick={(e)=>this.clicked(e)} style={{display: this.state.flag===true  ? 'block' : 'none'}} > {this.state.value5}</li>
                :null}
            </div>
        )
    }
}
   

export default Input;
