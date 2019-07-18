import React, { Component } from 'react';
import SelectedBlock from './SelectedBlock'
import SelectListBlock from './SelectListBlock'
import store from '../stored'
import { getSelect,getLiked,addToLiked,deleteLiked } from '../stored/actionCreators';
import axios from 'axios'
import './demoApp.css'
class DemoApp extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.storeChange=this.storeChange.bind(this)
        store.subscribe(this.storeChange)
        this.addToLiked=this.addToLiked.bind(this)
        this.deleteLiked=this.deleteLiked.bind(this)
    }
    storeChange(){
        this.setState(store.getState())
    }
    addToLiked(id,name){
        const action=addToLiked(id,name)
        store.dispatch(action)
    }
    deleteLiked(id){
        const action=deleteLiked(id)
        store.dispatch(action)
    }
    render() { 
        return (
            <div className="demoapp">
                <SelectedBlock 
                    likedList={this.state.likedList}
                    deleteLiked={this.deleteLiked}
                >
            
                </SelectedBlock>
                <SelectListBlock
                    selectList={this.state.selectList}
                    likedList={this.state.likedList}
                    addToLiked={this.addToLiked}
                >

                </SelectListBlock>
            </div>
        );
    }
    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5d231b7f4ce38750a4fddb8b/example/foodslist').then((res)=>{
            const data=res.data
            const action =getSelect(data)
            store.dispatch(action)
        })
        axios.get('https://www.easy-mock.com/mock/5d231b7f4ce38750a4fddb8b/example/foodslist').then((res)=>{
            console.log(res.data)
            const data =res.data
            const action=getLiked(data)
            store.dispatch(action)
        })
    }
}
 
export default DemoApp;