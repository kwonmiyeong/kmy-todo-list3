import '../css/Todo.css';
import {Component} from 'react';

class Todo extends Component{

    constructor(props){
        super(props)
        this.state={
            edit:false,
            text:this.props.text
        }
    }
    delTodo=()=>{
        alert('삭제!(todo)')
        const id=this.props.id
        this.props.delTodo(id) //app가 넘긴 함수
    }

    updateTodo=()=>{
        alert("수정(todo.js)")
        //수정누른다고 데이터를 무조건 보내는건 아님
        //수정불가능모드일때 수정버튼 누르면 수정가능모드로 화면 변경
        //수정가능모드일때 수정버튼 누르면 위로 보낸다.
        if(this.state.edit===true){
            //수정버튼 눌러 현재 수정가능상태다.
            this.props.updateTodo(this.props.id,this.state.text)
        }

        this.setState({
            edit:!this.state.edit
        })
    }

    textChange=(e)=>{
        //console.log("text change!")
        console.log(e.target.value)
        this.setState({
            text:e.target.value
        })
    }

    render(){//조건부 렌더링 (conditional rendering)
        if(this.state.edit===false){//시작할때 나오는 고정화면
            return(
                <div id="todo">
                    {this.props.text}
                    <button onClick={this.delTodo}>삭제</button>
                    <button onClick={this.updateTodo}>수정</button>
                </div>
            )        
        }else if(this.state.edit===true){
            return(
                <div id="todo">
                    <input type="text"  defaultValue={this.props.text} onChange={this.textChange}/>
                    <button onClick={this.delTodo}>삭제</button>
                    <button onClick={this.updateTodo}>수정</button>
                </div>
            )
        }
    }
}
export default Todo;