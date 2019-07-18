import React from 'react';
import {InputItem, Button,List} from 'antd-mobile'

const TodoListUI=(props)=>{
    return (
        <div style={{margin:'10px'}}>
            <div>
                <InputItem placeholder={props.inputValue} style={{width:'250px'}} onChange={props.changeInputValue}/>
                <Button type="primary" size="small" onClick={props.clickBtn}>增加</Button>
            </div>
            <div style={{margin:'10px',width:'300px'}}>
                <List>
                    {
                        props.list.map((item,index)=>{
                            return (
                                <List.Item key={index} onClick={()=>{props.deleteItem(index)}}>{item.title}</List.Item>
                            )
                        })
                    }
                    
                </List>    
            </div>
        </div>
    );
}
 
export default TodoListUI;