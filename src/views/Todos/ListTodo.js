import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
import Color from "../HOC/Color";


class ListTodo extends React.Component {

    state = {
        ListTodos: [
            { id: '123', title: 'Doing homework' },
            { id: '124', title: 'Making videos' },
            { id: '125', title: 'Fixing bugs' }
        ],
        edittodo: {}
    }
    addNewTodo = (todo) => {
        // let currentListTodo  =this.state.ListTodos
        // currentListTodo.push(todo);
        this.setState({
            ListTodos: [...this.state.ListTodos, todo],
            // ListTodos : currentListTodo
        })
        toast.success("Thêm thành công!");
    }


    handleEditTodo = (todo) => {
        this.setState({
            edittodo: todo
        })

    }

    handleOnchageEditTodo = (event) => {

        console.log({ ...this.state })
        var editTodoCoppy = { ...this.state.edittodo };
        editTodoCoppy.title = event.target.value;
        this.setState({
            edittodo: editTodoCoppy
        })
    }

    handleSaveTodo = () =>{
        let listTodosCoppy= [...this.state.ListTodos];
        let edittodoCoppy= {...this.state.edittodo}
        let objIndex= listTodosCoppy.findIndex(item=> item.id === edittodoCoppy.id )
         listTodosCoppy[objIndex].title= edittodoCoppy.title;
         this.setState({
            ListTodos : listTodosCoppy,
            edittodo :{}
         })
         toast.success("Sửa thành công!");
    }

    handleDelete = (todo) => {
        let currentTodos = this.state.ListTodos
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            ListTodos: currentTodos
        })
        toast.success("Xóa thành công!");
    }

    render() {
        let listTodos = this.state.ListTodos;
        let edittodo = this.state.edittodo
        let isEntyObj = Object.keys(edittodo).length === 0
        console.log(isEntyObj)
        return (
            <>
            <div>Todo App</div>
            <div className="list-todo-container">
                <AddTodo addNewTodo={this.addNewTodo} />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (

                                <div className="todo-child" key={item.id}>

                                    {item.id === edittodo.id && isEntyObj ===false ? <span> {index + 1} - <input onChange={(event) => this.handleOnchageEditTodo(event)} value={edittodo.title} /></span> :
                                        <span> {index + 1} - {item.title}</span>
                                    }
                                       {item.id === edittodo.id && isEntyObj ===false  ? <button className="save" onClick={() => this.handleSaveTodo()}>Save</button>:
                                        <button className="edit" onClick={() => this.handleEditTodo(item)}>Edit</button>
                                    }
                                   
                                    <button className="delete"
                                        onClick={() => this.handleDelete(item)}
                                    >Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            </>
        )
    }
}

export default Color(ListTodo);