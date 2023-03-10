//상태값을 저장하고 입력한값을 저장해서 보내야하기때문에 클래스형 컴포넌트로 작업하는게 좋다.

import {Component} from 'react';
import '../css/InputComp.css';

class InputComp extends Component{
    constructor(props){
        super(props)
        this.state={
            text:''
        }
    }

    addTodo=()=>{
        alert("추가!(InputComp)")
        const text=this.state.text
        this.props.addTodo(text) //App.js가 넘긴 함수.
    }

    inputChange=(e)=>{//매개변수 e에 이벤트 객체가 넘어온다.
        //console.log('input change!')
        console.log(e.target.value)
        this.setState({
            text:e.target.value
        })
    }
    
    render(){
        return(
            <div id="input-comp">
                <input type="text" placeholder="할일입력" onChange={this.inputChange}/>
                <button onClick={this.addTodo}>추가</button>
            </div>
        )
    }
}

export default InputComp;