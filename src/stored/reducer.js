import {GET_SELECT,GET_LIKED,ADD_LIKED,DEL_LIKED} from './actionType'
const defaultState={
    likedList:[],
    selectList:[]
}
export default (state=defaultState,action)=>{
    if(action.type===GET_SELECT){
        let newState=JSON.parse(JSON.stringify(state))
        newState.selectList=action.data.data.selectList
        return newState
    }
    if(action.type===GET_LIKED){
        let newState=JSON.parse(JSON.stringify(state))
        newState.likedList=action.data.data.likedList
        return newState
    }
    if(action.type===ADD_LIKED){
        let newState=JSON.parse(JSON.stringify(state))
        newState.likedList.push({id:action.id,name:action.name})
        return newState
    }
    if(action.type===DEL_LIKED){
        let newState=JSON.parse(JSON.stringify(state))
        let likedListKey=[]
        for (var i of newState.likedList) {
            likedListKey.push(i.id)
        }
        let index=likedListKey.indexOf(action.id)
        if(index>=0){
            newState.likedList.splice(index,1)
        }
        return newState
    }
    return state
}