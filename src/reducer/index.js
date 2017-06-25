/**
 * Created by Administrator on 2017/6/12.
 */

const indexReducer = (state={indexData:[]},action)=>{
    switch(action.type){
        case "getIndexInitData":
            //先把state拷贝到空对象中，然后再把拷贝的state里面的indexData变成action.indexData
            var newState = Object.assign({},state,{indexData:action.indexData})
            return newState;
        default: return state
    }
}
const classReducer = (state={goodsData:[],brandlistData:[]},action)=>{
    switch(action.type){
        case "getGoodsInitData":
            var newState = Object.assign({},state,{goodsData:action.goodsData})
            return newState;
        case "getBrandListInitData":
            var newState = Object.assign({},state,{brandlistData:action.brandlistData})
            return newState;
        default: return state
    }
}
const ListReducer =(state={listData:[],total:1000},action)=> {
    switch (action.type) {
        case "getProductListData":
            return Object.assign({}, state, {
                listData: action.payload.listData,
                total: action.payload.total
            })
        case "getProductListDataMore":
            return Object.assign({}, state, {
                listData: state.listData.concat(action.payload.listData)
            })
        default:
            return state;
    }
}
const DetailReducer =(state={detailData:[]},action)=>{
    switch(action.type){
        case "getDetailInitData":
            var newState = Object.assign({},state,{detailData:action.detailData})
            console.log(newState)
            return newState;
        default:
            return state;
    }
}
const CartReducer =(state={cartData:[],allSelected:false},action)=>{
    switch(action.type){
        case "CART_INIT_DATA":
            return Object.assign({},state,action.payload)

        case "CART_CHANGE_NUM":
        const {num,index} = action.payload;
        var newState = JSON.parse(JSON.stringify(state));
        newState.cartData[index].number = num;
        return newState;

        case "CART_Del_Item":
        var newState = JSON.parse(JSON.stringify(state));
        newState.cartData.splice(action.payload.index,1)
        return newState;

        case "CHANGE_ITEM_SELECTED" :     
           var  index = action.payload.index; 
           var newState = JSON.parse(JSON.stringify(state));
           var newSelected = !newState.cartData[index].selected           
           newState.cartData[index].selected=newSelected
           if(!newSelected){
                newState.allSelected=false
           }else{
               newState.allSelected=true
               newState.cartData.forEach(e=>{
                 if(!e.selected){
                      newState.allSelected=false
                 }
               })
           }
           return newState
           
        case "CHANGE_All_SELECTED" :     
            var newState = JSON.parse(JSON.stringify(state));
            newState.allSelected=!newState.allSelected;
            newState.cartData.forEach(e=>{
                e.selected = newState.allSelected
            })
           return newState
        default:
            return state;
    }
}

export {indexReducer,classReducer,ListReducer,DetailReducer,CartReducer}