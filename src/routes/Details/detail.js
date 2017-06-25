/**
 * Created by Administrator on 2017/6/17.
 */
import React,{Component} from "react";
import {connect} from "react-redux";
import fetchJsonp from "fetch-jsonp";
import {TabBar,Icon,NavBar,Carousel, Popup,Card,Tag, Button, WhiteSpace, WingBlank,List,Popover,SearchBar} from "antd-mobile";
import { Grid } from 'antd-mobile';

import style from "./detail.css"
import "../../components/public/public.css";
import {Content} from "../../components/public/public";

const data = Array.from(new Array(8)).map((_val, i) => ({
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: `name${i}`,
}));
const Item = List.Item;
const Brief = Item.Brief;

class DetailPage extends Component{
    state = {
        data: ['', '', ''],
        initialHeight: 200,
    }
    render(){
        console.log(this.props.attributeData)
        const goodsInfo = this.props.detailData.goods_info
        const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
        return <div className="page">
            <Content>
                <div className={style['content']}>
                    <Carousel
                        className={style['my-carousel']}
                        autoplay={false}
                        infinite
                        selectedIndex={0}
                        swipeSpeed={35}
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {this.props.detailData.image_list&&this.props.detailData.image_list.map(ii => (
                            <a href="javascript:;" key={ii} style={hProp}>
                                <img
                                    src={ii._mid}
                                    alt="icon"
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({
                                            initialHeight: null,
                                        });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>

                    <div className={style['pro-info']}>
                        <p>{goodsInfo?goodsInfo.goods_name:""}</p>
                        <p>{goodsInfo?goodsInfo.goods_jingle:""}</p>
                        <p className={style['pro-price']}><span>￥<em>{goodsInfo?goodsInfo.goods_price:""}</em></span><span>销量：<em>{goodsInfo?goodsInfo.total_num:""}</em>克</span></p>
                        <p>
                            已选
                            <Test/>
                        </p>
                    </div>
                    <div className={style['pro-evaluation']}>

                    </div>
                    <div className={style['recommend']}>
                        <p>店铺推荐</p>
                        <ul className={style['re-list']}>
                            {
                                this.props.detailData.goods_commend_list&&this.props.detailData.goods_commend_list.map((ele)=>{
                                    return  <li>
                                        <img src={ele.goods_image_url} alt=""/>
                                        <p>{ele.goods_name}</p>
                                        <p>￥<span>{ele.goods_promotion_price}</span></p>
                                    </li>
                                })
                            }

                        </ul>
                    </div>
                    <div className={style['attribute']}>
                    </div>
                </div>
            </Content>
            <ToCart/>
        </div>
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
        this.props.getInitData(this.props.params.goods_id)
        this.props.getDetailInfo()
    }
}
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let maskProps;
if (isIPhone) {
    // Note: the popup content will not scroll.
    maskProps = {
        onTouchStart: e => e.preventDefault(),
    };
}

class Test extends React.Component {
    state = {
        sel: '',
    };
    onClick = () => {
        Popup.show(<div>
            <List renderHeader={() => (
                <div style={{ position: 'relative' }}>
                    点击此处返回
                    <span
                        style={{
                            position: 'absolute', right: 3, top: -5,
                        }}
                        onClick={() => this.onClose('cancel')}
                    >
            <Icon type="cross" />
          </span>
                </div>)}
                  className="popup-list"
            >
            </List>

            <div>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            title="商品名称"
                            thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
                            extra={<span>￥42.00</span>}
                        />
                        <Card.Body>
                            <div>
                                单位：
                                <Tag data-seed="logId">2盒</Tag>
                                <Tag data-seed="logId">4盒</Tag>
                            </div>
                        </Card.Body>
                        <Card.Footer content="数量" extra={<div>
                            <div className={style['num-box']}>
                                <a  className={style['num-btn']} >-</a>
                                <input type="text" className={style['num-text']} value={1}/>
                                <a  className={style['num-btn']} >+</a>
                            </div>
                        </div>} />
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
            </div>
        </div>, { animationType: 'slide-up', maskProps, maskClosable: false });
    };
    onClose = (sel) => {
        this.setState({ sel });
        Popup.hide();
    };
    render() {
        return (<div style={{ padding: '0.15rem' }}>
            <Button onClick={this.onClick}>
                5盒
            </Button>
        </div>);
    }
}
const ToCart=(props)=>{
    return <ul className={style['to-cart']}>
        <li>购物车</li>
        <li>立即购买</li>
        <li onClick={this.onClick} >加入购物车</li>
    </ul>

}
function mapStateToProps(state){
    return{
        detailData:state.DetailReducer.detailData,
    }
}
function mapDispatchToProps(dispatch){
    return {
        getInitData(id){
            var url = `http://www.chawo.com/mobile/index.php?act=goods&op=goods_detail&goods_id=${id}&key=&dis_id=`
            fetchJsonp(url,{timeout:20000})
                .then(res=>res.json())
                .then(data=>{
                    console.log(data.datas.image_list)
                    dispatch({
                        type:"getDetailInitData",
                        detailData:data.datas
                    })
                })

        },
        getDetailInfo(){
            var url = "http://www.chawo.com/mobile/index.php?act=goods&op=goods_body&goods_id=103573"
            fetchJsonp(url,{timeout:20000})
                .then(res=>{
                    console.log(data)
                })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailPage)