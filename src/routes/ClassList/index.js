/**
 * Created by Administrator on 2017/6/14.
 */
import React,{Component} from "react";
import {render} from "react-dom";
import { NavBar, Icon } from 'antd-mobile';
import {Link} from "react-router"
import {connect} from "react-redux"
import style from "./index.css"
import "../../svg/title-bar/ellipsis.svg"
import fetchJsonp from "fetch-jsonp"
const Header = ()=>{
    return  <div className={style.header}>
                <ul className={style['header-list']}>
                    <li className={style['header-btn']}>
                        <a href="/">
                            {'<'}
                        </a>
                    </li>
                    <li className={style['header-title']}>
                        <div className={style['text-box']}>
                            <input type="text"/>
                        </div>
                    </li>
                    <li className={style['header-btn']}>
                        <a className={style['Icon-ellipsis']}  href="javascript:;">
                            <Icon key="0" type={require("../../svg/title-bar/ellipsis.svg")} />
                        </a>
                    </li>
                </ul>
            </div>
}
const ContentLeft = (props)=>{
    console.log(props.goodsData)
    if(props.goodsData[0]){
        return <div className={style['class-box']}>
                <ul className={style['class-list']}>
                    <li className={style['class-item']}>
                        <div className={style['class-imgt']}>
                                <img src="http://www.chawo.com/wap/images/degault.png" alt=""/>
                        </div>
                        <div className={style['class-titlet']}>
                            品牌推荐
                        </div>
                    </li>
                    {
                        props.goodsData.map((ele,index)=><li className={style['class-item']} key={index}>
                            <div className={style['class-img']}>
                                <Link to={`/list/${ele.gc_id}`}>
                                    <img src="http://www.chawo.com/wap/images/degault.png" alt=""/>
                                </Link>    
                            </div>
                            <div className={style['class-title']}>{ele.gc_name}</div>
                        </li>)
                    }
                </ul>
            </div>
    }else {
        return <div>...</div>
    }
}
const ContentRight = (props)=>{
    console.log(props.brandlistData)
    if(props.brandlistData[0]){
        return <div className={style['brand-box']}>
                <ul className={style['brand-list']}>
                    {
                        props.brandlistData.map((ele,index)=>
                            <li className={style['brand-item']} key={index}>
                                    <div className={style['brand-img']}>
                                        <Link to={`/list/${ele.brand_id}`}>
                                            <img src={ele.brand_pic} alt=""/>
                                        </Link>    
                                    </div>
                                    <div className={style['brand-title']}>{ele.brand_name}</div>
                            </li>
                    }
                </ul>
            </div>
    }else{
        return <div>...</div>
    }
}
class ClassList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {goodsData,brandlistData} = this.props
        return <div className={style.content}>
                    <Header />
                    <ContentLeft className={style['con-left']} goodsData={goodsData} />
                    <ContentRight className={style['con-right']} brandlistData={brandlistData} />
                </div>
    }
    componentDidMount(){
        this.props.getGoodsData()
        this.props.getBrandListData()
    }
}
function mapStateToProps(state){
    return{
        goodsData:state.classReducer.goodsData,
        brandlistData:state.classReducer.brandlistData
    }
}
function mapDispatchToProps(dispatch){
    return{
        getGoodsData(){
            fetch("http://www.chawo.com/mobile/index.php?act=goods_class",{timeout:20000})
                .then(res=>res.json())
                .then(data=>{

                    dispatch({type:"getGoodsInitData",goodsData:data.datas.class_list})
                })
        },
        getBrandListData(){
            fetch("http://www.chawo.com/mobile/index.php?act=brand&op=recommend_list",{timeout:20000})
                .then(res=>res.json())
                .then(data=>{

                    dispatch({type:"getBrandListInitData",brandlistData:data.datas.brand_list})
                })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ClassList)