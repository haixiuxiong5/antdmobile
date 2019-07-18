import React, { Component } from 'react';
import TodoListUI from './TodoListUI'
import store from '../store'
import {changeInputAction,addItemAction,deleteItemAction,getListAction} from '../store/actionCreators'
import axios from 'axios'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeInputValue=this.changeInputValue.bind(this)
        this.clickBtn=this.clickBtn.bind(this)
        this.storeChange=this.storeChange.bind(this)
        this.deleteItem=this.deleteItem.bind(this)
        store.subscribe(this.storeChange)
        
    }
    changeInputValue(e){
        const action=changeInputAction(e)
        store.dispatch(action)
    }
    clickBtn(){
        const action=addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        const action=deleteItemAction(index)
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
    render() { 
        return (
            <TodoListUI 
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
            ></TodoListUI>
        )
    }
    componentDidMount(){
        axios.get('/api/movie/in_theaters?start=0&count=10').then((res)=>{
            
            const data=res.data.subjects
            console.log(data)
            const action=getListAction(data)
            store.dispatch(action)
        })
    }
}
 
export default TodoList;