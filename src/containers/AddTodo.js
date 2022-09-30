import React from "react";
import {connect} from 'react-redux';
import "./AddTodo.css"
//import the actions
import {addTodo} from '../actions'

const AddTodo = ({dispatch}) => {
    
    let input;
  return (
    <div>
        <form
        onSubmit={
            e => {e.preventDefault();
            if (!input.value.trim()) {
                return               
            }
            dispatch(addTodo(input.value))
            input.value='';
        }
        }
        
        
        className="form">
            <input type='text' ref={el=>(input=el)}/>
            <button type="submit"> Add Todo </button>
        </form>
        
        
    </div>
  )
}

export default connect()(AddTodo);