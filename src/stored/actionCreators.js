import {GET_SELECT,GET_LIKED,ADD_LIKED,DEL_LIKED} from './actionType'

export const getSelect=(data)=>({
    type:GET_SELECT,
    data
})
export const getLiked=(data)=>({
    type:GET_LIKED,
    data
})
export const addToLiked=(id,name)=>({
    type:ADD_LIKED,
    id,
    name
})

export const deleteLiked=(id)=>({
    type:DEL_LIKED,
    id
})