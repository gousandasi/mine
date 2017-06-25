/**
 * Created by Administrator on 2017/6/13.
 */
import React,{Component} from "react";
import {connect} from "react-redux";
import fetchJsonp from "fetch-jsonp";
import {TabBar,Icon,NavBar,Flex,SwipeAction, Toast,List,Stepper,Checkbox} from "antd-mobile";
import "../../components/public/public.css";
import {Header,Content,Footer} from "../../components/public/public";
import style from "./cart.css";
const CartList = ({cartData,dispatch})=>{
    return <ul className={style['cart-list']}>
        {
            cartData.map((ele,index)=>{
                return <li className={style["cart-item"]} key={index}>
                <SwipeAction 
                    autoClose
                    right={[
                        {
                        text: '返回',
                        onPress: () => console.log('cancel'),
                        style: { backgroundColor: '#ddd', color: 'white' },
                        },
                        {
                        text: '删除',
                        onPress: () => {
                            dispatch(delItem(ele.goodsID,index))
                        },
                        style: { backgroundColor: '#F4333C', color: 'white' },
                        },
                    ]}
                    >
                    <Flex>
                         <Checkbox checked={ele.selected} onChange={()=>{
                                 dispatch({
                                     type:"CHANGE_ITEM_SELECTED",
                                     payload:{
                                         index:index
                                     }
                                 })
                             }}/>
                        <a className={style.pic}><img src={ele.goodsListImg} /></a>
                        <Flex.Item>
                            <p>{ele.goodsName}</p>
                            <p className={style['unit']}>单位</p>
                            <p><span className={style['fl']}>￥{ele.price}</span></p>
                           <div className={style['num-box']}>
                                <a  className={style['num-btn']} onClick={()=>{
                                    dispatch(changeNum(-1,ele.goodsID,index))}}>-</a>
                                <input type="text" className={style['num-text']} value={ele.number}/>
                                <a  className={style['num-btn']} onClick={()=>{
                                        dispatch(changeNum(1,ele.goodsID,index))
                                    }
                                    }>+</a>
                            </div>
                            </Flex.Item>
                    </Flex>
                </SwipeAction>

            </li>
            })
        }
    </ul>
}
class CartPage extends Component{
render(){
    const {cartData,allSelected,dispatch} = this.props
    const total = this.getTotal(cartData) 
 return <div className="page">
               <Header>
                <div className={style.header}>
                <NavBar 
                    style={{color:'#888'} }
                    mode="light"
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="1" type="ellipsis" style={{color:'#888'} }/>,
                    ]}
                    >购物车</NavBar>
                    </div>                               
               </Header>
               <Content>
                   <div className={style['title']}>
                        <p> 
                            <Checkbox checked={allSelected} onChange={()=>{
                                    dispatch({
                                        type:"CHANGE_All_SELECTED"
                                    })
                                }}
                            />
                            <img src={require('../../components/images/store_b.png')} alt=""/>
                        <span>茶窝网</span></p>
                        <p><span>免运费</span>满99元免运费</p>
                   </div>
                  <CartList cartData={cartData} dispatch={dispatch}/>
               </Content>
               <ul className={style['to-info']}>
                    <li>合计总金额：￥<span>{total.price}</span>元</li>
                    <li>确认信息</li>
                </ul>
           </div>
        }
        componentDidMount(){
            this.props.dispatch(getInitData())
            this.props.dispatch(changeNum())
            this.props.dispatch(delItem())
        }
        getTotal(data){
            var num = 0;
            var price = 0;
            console.log(data)
            data.forEach(e=>{
            if(e.selected){
                    num+=e.number*1;
                    price+=e.number*e.price
            }
            })
            return {num,price}
        }
}

const getInitData =()=>dispatch=>{
    Toast.loading('加载中...');
    var url = "http://datainfo.duapp.com/shopdata/getCar.php?userID=huazai"
    fetchJsonp(url,{timeout:20000})
    .then(res=>res.json())
    .then(data=>{
        data.forEach(function(ele) {
            ele.selected = false
        });
        Toast.hide()
        dispatch({type:"CART_INIT_DATA",payload:{cartData:data}})
    })
    .catch(e=>console.log(e));
}

const changeNum=(type,id,index)=>dispatch=>{
     Toast.loading('加载中...');
     var url = `http://datainfo.duapp.com/shopdata/getCar.php?userID=huazai&goodsID=${id}`
     fetchJsonp(url,{timeout:20000})
    .then(res=>res.json())
    .then(data=>{
        Toast.hide()
        dispatch({type:"CART_CHANGE_NUM",payload:{type,index}})
    })
    .catch(e=>console.log(e))
}
      
const delItem =(id,index)=>dispatch=>{
    Toast.loading('加载中...');
    var url = `http://datainfo.duapp.com/shopdata/getCar.php?userID=huazai&goodsID=${id}&number=${0}`
    return fetchJsonp(url,{timeout:20000})
    .then(res=>res.json())
    .then(data=>{
        Toast.hide()
        dispatch({type:"CART_DEL_ITEM",payload:{index}})
    })
    .catch(e=>console.log(e))
}
export default connect((state)=>{
    return {
        allSelected:state.CartReducer.allSelected,
        cartData:state.CartReducer.cartData
    }
})(CartPage)