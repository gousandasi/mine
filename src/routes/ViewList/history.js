/**
 * Created by Administrator on 2017/6/15.
 */
import React,{Component} from "react";
import {render} from "react-dom";
import {Carousel, WhiteSpace, WingBlank} from "antd-mobile";
import style from "./history.css"
const Header = ()=>{
    return  <div className={style.header}>
        <ul className={style['header-list']}>
            <li className={style['header-btn']}>
                <a href="/">
                    {"<"}
                </a>
            </li>
            <li className={style['header-title']}>
                <div className={style['text-box']}>
                    浏览记录
                </div>
            </li>
            <li className={style['header-btn']}>
                <a className={style['Icon-ellipsis']}  href="javascript:;">
                    清空
                </a>
            </li>
        </ul>
    </div>
}

const Content = ()=>{
    return <ul className={style['view-list']}>
               <li className={style['view-item']}>
                   <div className={style['goods-show']}>
                       <a href="">
                           <img  className={style['goods-image']} src="http://www.chawo.com/data/upload/shop/store/goods/2/2017/06/2_05500821310381071_360.jpg" alt=""/>
                       </a>
                   </div>
                   <div className={style['goods-info']}>
                       <dl>
                           <dt>
                               <h4 className={style['goods-name']}>大益普洱茶</h4>
                           </dt>
                           <dd>
                               <span className={style['goods-price']}>￥<em>1654元</em></span>
                           </dd>
                       </dl>
                   </div>
               </li>
            </ul>
}
class ViewList extends Component {
    render(){
        return <div>
            <Header />
            <Content />
        </div>
    }
}
export default ViewList