/**
 * Created by Administrator on 2017/6/12.
 */
import React,{Component} from "react";
import {render} from "react-dom";

import style from "./server.css";

class Server extends Component {
    render(){
        return <div className={style['home-cnt-wp']}>
           <div className={style['contact']}>
               <h1>联系客服</h1>
               <div className={style.serve}>电话<a>0871-66666655</a></div>
               <div className={style.serve}>客服微信:476261</div>
               <div className={style.serve}>客服QQ:4001564001</div>
               <div className={style.serve}>
                   <img src="http://www.chawo.com/shop/templates/default/images/extra/chawo-weixin.jpg" alt=""/>
               </div>

           </div>
        </div>
    }
}
export default Server