import { TODO_INPUT,ADD_ITEM,DEL_ITEM } from './actionTypeName'
const todoListData = {
    inputValue:'请输入待办事件',
    list: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.'
    ]
}
export default (state = todoListData , actions) => {
    if(actions.type==TODO_INPUT){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = actions.value;
        return newState
    }
    if(actions.type==ADD_ITEM){
        console.log('添加');
        let newState = JSON.parse(JSON.stringify(state));
        console.log(newState);
        newState.list.push(state.inputValue)
        return newState
    }
    if(actions.type==DEL_ITEM){
        console.log('删除');
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(actions.value,1)
        console.log(newState);
        return newState
    }
    return state
}