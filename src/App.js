import './App.css';
import {Component} from 'react';
import Todo from './components/Todo.js';
import InputComp from './components/InputComp.js';


class App extends Component{
  constructor(props){
    super(props)
    this.state={
      todoList:[
        {id:1, text:'공부하기'},
        {id:2, text:'청소하기'},
        {id:3, text:'요리하기'}
      ],
      id:4
    }
  }

  addTodo=(input)=>{
    alert("추가!(App)")
    alert(input)//InputComp에서 입력한 데이터

    const todoObj={id:this.state.id,text:input}
    //{id:4, text:'input'에 내가 친 text}
    const concatList = this.state.todoList.concat(todoObj)
    //concat은 배열에 항목 추가하고 그 추가된 배열이 return
    this.setState({
      todoList:concatList//추가된 배열을 setState로 배열 상태 변경했음.
    })
  }

  delTodo=(id)=>{
    alert('삭제!(app)')
    alert(id)
    //push concat 차이 모르면 알아봐라.
    //삭제 - filter < - 배열 메서드
    const filteredList= this.state.todoList.filter(
      (data)=>(data.id !== id)
    ) 
    //todolist배열에 있는 id랑 함수 매개변수로 넘어온 id랑 일치하지 않는 배열 원소만 리턴해서, 새로운 배열 생성
    this.setState({
      todoList:filteredList
    })
    //setState 해야 render된다 ★
  }
 
  updateTodo=(id,text)=>{
    const updateTodoList = this.state.todoList.map(
      (data)=> (data.id === id)? ({id:id,text:text}):data
    )
    //({...datamtext:text}) 
    // ... : 삼점 연산자 (three dot operator)
    // ... : spread, rest
    
    //A? B:C 삼향연산자
    this.setState({
      todoList:updateTodoList
    })
  }
  
 //key값 안주면 경고뜸. 컴포넌트를 구분할수 있는 key값
  render(){
    const result = this.state.todoList.map(
      (data)=>(<Todo 
        key={data.id} 
        id={data.id}
        text={data.text} 
        delTodo={this.delTodo}
        updateTodo={this.updateTodo}
      />)
    )


  return(
      <div id="App">
        <InputComp addTodo={this.addTodo}/>
        {result}
      </div>
    )
  }  
}
export default App;