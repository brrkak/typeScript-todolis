import React, { useState } from 'react';
import './App.css'

type Todo = {
    id: number,
    text : string,
    isChecked : boolean
}



const Todolist : React.FC = () => {
    const title : string = '오늘 할 일'
    //  구조 분해 할당
    const [todos, setTodos] = useState<Todo[]>([])
    const [newTodo, setNewTodos] = useState<string>('');
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [selectedTodo, setSelecetdTodo] = useState<Todo | null>(null)

    const handleCheckedChange = (itemId : number) => {
        setTodos((prevItems) => 
            prevItems.map((item) =>
                item.id === itemId ? {...item, isChecked : !item.isChecked} : item
            ))
    }

    const addTodo = () => {
        if(newTodo.trim() !== ''){
            setTodos([...todos, {id: Date.now(), text: newTodo, isChecked : false}])
            setNewTodos('');
        }
    }

    const removeTodo = (id:number) =>{
        setTodos(todos.filter((todo) => todo.id !== id))
    }   

    const handleTodoClick = (todo : Todo) => {
        setShowDetail(true);
        setSelecetdTodo(todo)
    }
    const handleCloseDetail = () => {
        setShowDetail(false)
    }

    return (
    <div>
        <h1>{title}</h1>
        <p></p>
        <div className='container'>
                <input type="text" placeholder='할일 입력'
                style={{
                    marginRight : '10px', writingMode : 'horizontal-tb'}}
                onChange={(e) => setNewTodos(e.target.value)} />

                <button onClick={addTodo}>추가</button>
    

        <div className='board'>
            <ul>
                {todos.map((todo, index) => 
                    <li key={todo.id}>
                    <input type="checkbox"
                    onChange={() => {
                        handleCheckedChange(todo.id)
                    }}
                    />
                    <span onClick={() => handleTodoClick(todo)}></span>
                    <span>
                        {
                        todo.isChecked ?                              
                        <del>{todo.text}</del>  
                        :  <span>{todo.text}</span>
                        }
                    </span>
                    <button className='delButton' onClick={() => removeTodo(todo.id)}>삭제</button>
                    </li>
                    )}
                    </ul>
        </div>
    </div>
</div>
    )
}

export default Todolist;