const todoListData = {
    inputValue:'请输入待办事件',
    list: [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.'
    ]
}
export default (state = todoListData , actions) => {
    console.log(state,actions);
    if(actions.type=='todoInput'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = actions.value;
        return newState
    }
    if(actions.type=='addItem'){
        console.log('添加');
        let newState = JSON.parse(JSON.stringify(state));
        console.log(newState);
        newState.list.push(state.inputValue)
        return newState
    }
    if(actions.type=='delItem'){
        console.log('删除');
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(actions.value,1)
        console.log(newState);
        return newState
    }
    return state
}