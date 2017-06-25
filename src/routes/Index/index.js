import React,{Component} from "react";
import {render} from "react-dom";
import { NavBar, Icon } from 'antd-mobile';
import { Carousel, WhiteSpace, WingBlank, Grid  } from 'antd-mobile';
import {Link} from "react-router"
import {connect} from "react-redux";
import style from "./index.css";
/*const LunBo = function(props){
    return <div>
    </div>
}*/
class LunBo extends Component{
    state = {
        data: ["http://www.chawo.com/data/upload/mobile/special/s0/s0_05493649448946398.jpg","http://www.chawo.com/data/upload/mobile/special/s0/s0_05493649685253219.jpg"],
        initialHeight: 200,
    }
    render() {
        const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
        return (
                <Carousel
                    className={style['my-carousel']}
                    autoplay={false}
                    infinite
                    selectedIndex={1}
                    swipeSpeed={35}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(ii => (
                        <a href="http://www.baidu.com" key={ii} style={hProp}>
                            <img
                                src={`${ii}`}
                                alt="icon"
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({
                                        initialHeight: null,
                                    });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
        )
    }
}
const data = ["分类","购物车","个人中心","每日签到"].map((_val, i) => ({
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: <Link to="/signin">{_val}</Link>,
}));
const GridExample = () => (
    <div>
        <Grid data={data} onClick={(_el, index) => <Link to="/signin" /> } />
    </div>
);
const IndexCont = (props)=>{
   if( props.indexData[0]){
        return <div className={style.maincontent}>
                    <GridExample />
                    <img className={style['title-img']} src={props.indexData[1].home1.image} alt=""/>
                    <ul className={style['product-list']}>
                        {
                            props.indexData.map((e,i)=>{
                                return i>1?<li className={style['product-list-all']} key={i}>
                                    <div className={style['product-title']}>{e.goods.title}</div>
                                    <ul className={style['product-list-item']}>
                                        {
                                            e.goods.item&&e.goods.item.map((ele,index)=><li className={style['product-list-tea']} key={index}>
                                                <Link to={`/detail/${ele.goods_id}`}>
                                                    <img src={ele.goods_image}/>
                                                </Link>
                                                <dl className={style['goods-info']}>
                                                    <dt className={style['ovfl-e']}>{ele.goods_name}</dt>
                                                    <dd className={style['goods-price']}>$<em>{ele.goods_promotion_price}</em></dd>
                                                </dl>
                                            </li>)
                                        }
                                    </ul>
                                </li>:''
                            })
                        }
                    </ul>
                </div>
   }else  {
       return <div>...</div>
   }
};
const Footer = ()=>{
    return <div className={style.footer}>
            <div className={style['footer-nav-text']}>
                <a href="">登录</a>
                <a href="">注册</a>
                <a href="">反馈</a>
                <a href="">返回顶部</a>
            </div>
            <div className={style['footer-nav-pic']}>
                <a href="">
                    <span>
                        <Icon key="0" type={require("../../svg/title-bar/ellipsis.svg")} />
                    </span>
                    <p>触屏版</p>
                </a>
                <a href="">
                    <span>
                        <Icon key="0" type={require("../../svg/title-bar/ellipsis.svg")} />
                    </span>
                    <p>电脑版</p>
                </a>
            </div>
            <div className={style.copyright}></div>
    </div>
}
class Index extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {indexData} = this.props;
        return <div  className={style.content}>
                  {/*header*/}
                  <LunBo indexData={indexData} />
                  <IndexCont indexData={indexData} />
                  <Footer />
                </div>
    }
   componentDidMount() {
       //获取页面的初始数据
        this.props.getIndexData()
    }
}
//把store里面的数据传递给组件的（props）
function mapStateToProps(state){
    return {
        indexData:state.indexReducer.indexData
    }
}
//把组件需要的方法传递给组件的props
function mapDispatchToProps(dispatch){
    return {
        getIndexData(){
            fetch("http://www.chawo.com/mobile/index.php?act=index",{timeout:20000})
                .then(res=>res.json())
                .then(data=>{
                    dispatch({type:"getIndexInitData",indexData:data.datas})
                })
        }
    }
}
//把组件和map连接起来 ，在组件中就能使用
export default connect(mapStateToProps,mapDispatchToProps)(Index)