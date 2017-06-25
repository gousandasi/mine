import React,{Component} from "react"
import {Icon ,NavBar,Popover,Flex, WhiteSpace} from 'antd-mobile';
import ReactDOM from 'react-dom';
import {Link} from "react-router";
import mychawoStyle from "./mine.css"
const Item = Popover.Item;
class Mychawo_header extends Component{
    state = {
        visible: false,
        selected: '',
    };
    onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };
    render() {
        let offsetX = -10; // just for pc demo
        if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
            offsetX = -26;
        }
        return (<div>
            <NavBar iconName={false}
                    mode="light"
                    leftContent="设置"
                    rightContent={
                        <Popover
                            overlayClassName="fortest"
                            overlayStyle={{ color: 'currentColor' }}
                            visible={this.state.visible}
                            overlay={[
                                (<Item key="4" value="scan" icon={<Icon type="up" size="xs" />} data-seed="logId">首页</Item>),
                                (<Item key="5" value="special" icon={<Icon type="up" size="xs" />} style={{ whiteSpace: 'nowrap' }}>购物车</Item>),
                                (<Item key="6" value="button ct" icon={<Icon type="up" size="xs" />}>
                                    <span style={{ marginRight: 5 }}>消息</span>
                                </Item>),
                            ]}
                            align={{
                                overflow: { adjustY: 0, adjustX: 0 },
                                offset: [offsetX, 15],
                            }}
                            onVisibleChange={this.handleVisibleChange}
                            onSelect={this.onSelect}
                        >
                            <div style={{
                                height: '100%',
                                padding: '0 0.3rem',
                                marginRight: '-0.3rem',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            >
                                <Icon type="ellipsis" />
                            </div>
                        </Popover>
                    }
            >
                我的商城
            </NavBar>
        </div>);
    }

}
//头部底下的信息 商品收藏 店铺收藏 我的足迹

class Mymsg extends Component{
    render(){
        return(
            <div className={mychawoStyle.mymsg}>
                <Flex>
                    <Flex.Item>
                        <span>0</span>
                        <p>商品收藏</p>
                    </Flex.Item>
                    <Flex.Item>
                        <span>0</span>
                        <p>店铺收藏</p>
                    </Flex.Item>

                        <Flex.Item>
                            <span>
                                <Link to="/history">
                                    <img className={mychawoStyle.jiao} src={require('../../svg/tab-bar/朋友.svg')}/>
                                </Link>
                            </span>
                            <p>我的足迹</p>
                        </Flex.Item>

                </Flex>
            </div>
        )
    }
}
//中间的类
class Main extends Component{
    render(){
        return(

            <div className={mychawoStyle.main}>
                <dl className={mychawoStyle["mid-Item"]}>
                    <dt className={mychawoStyle.myOrder}>
                        <h3>
                            <i></i>
                            我的订单
                        </h3>
                        <h5>
                            查看全部订单<i></i>
                        </h5>
                    </dt>
                    <dd>
                        <Flex>
                            <Flex.Item className={mychawoStyle.orderfunction}>
                                <img src={require('../../svg/title-bar/plus.svg')}/>
                                <p>待付款</p>
                            </Flex.Item>
                            <Flex.Item className={mychawoStyle.orderfunction}>
                                <img src={require('../../svg/title-bar/plus.svg')}/>
                                <p>待收货</p>
                            </Flex.Item>
                            <Flex.Item className={mychawoStyle.orderfunction}>
                                <img src={require('../../svg/title-bar/plus.svg')}/>
                                <p>待自提</p>
                            </Flex.Item>
                            <Flex.Item className={mychawoStyle.orderfunction}>
                                <img src={require('../../svg/title-bar/plus.svg')}/>
                                <p>待自提</p>
                            </Flex.Item>
                            <Flex.Item className={mychawoStyle.orderfunction}>
                                <img src={require('../../svg/title-bar/plus.svg')}/>
                                <p>退款/退货</p>
                            </Flex.Item>
                        </Flex>
                    </dd>
                </dl>

                <dl className={mychawoStyle["mid-Item"]}>
                    <dt className={mychawoStyle.myOrder}>
                        <h3>
                            <i></i>
                            我的财产
                        </h3>
                        <h5>
                            查看全部财产<i></i>
                        </h5>
                    </dt>
                    <dd>
                        <Flex>
                            <Flex.Item className={mychawoStyle.orderfunction}>
                                <img src={require('../../svg/title-bar/plus.svg')}/>
                                <p>预存款</p>
                            </Flex.Item>
                            <Flex.Item className={mychawoStyle.orderfunction}>
                                <img src={require('../../svg/title-bar/plus.svg')}/>
                                <p>充值卡</p>
                            </Flex.Item>
                            <Flex.Item className={mychawoStyle.orderfunction}>
                                <img src={require('../../svg/title-bar/plus.svg')}/>
                                <p>代金券</p>
                            </Flex.Item>
                            <Flex.Item className={mychawoStyle.orderfunction}>
                                <img src={require('../../svg/title-bar/plus.svg')}/>
                                <p>红包</p>
                            </Flex.Item>
                            <Flex.Item className={mychawoStyle.orderfunction}>
                                <img src={require('../../svg/title-bar/plus.svg')}/>
                                <p>积分</p>
                            </Flex.Item>
                        </Flex>
                    </dd>
                </dl>
                <dl className={mychawoStyle.Delivery}>
                    <dt className={mychawoStyle.address}>
                        <h3>
                            <i></i>
                            管理收货地址
                        </h3>
                        <h5>
                            <i></i>
                        </h5>
                    </dt>
                </dl>
                <dl className={mychawoStyle["mid-Item"]}>
                    <dt className={mychawoStyle.usersetting}>
                        <h3>
                            <i></i>
                            用户设置
                        </h3>
                        <h5>
                            <i></i>
                        </h5>
                    </dt>
                </dl>
            </div>

        )
    }
}
{/*底部上边的那块*/}
class Nctouch extends Component{
    render(){
        return(
            <div className={mychawoStyle["nctouch-footer"]}>
                <div className={mychawoStyle.nctouchTop}>
                    <Flex>
                        <Flex.Item>
                            <a href="#">个人中心</a>
                        </Flex.Item>
                        <Flex.Item>
                            <a href="#">注销</a>
                        </Flex.Item>
                        <Flex.Item>
                            <a href="#">反馈</a>
                        </Flex.Item>
                        <Flex.Item>
                            <a href="#">返回顶部</a>
                        </Flex.Item>
                    </Flex>
                </div>

                <div className={mychawoStyle.nctouchFoot}>
                    <Flex>
                        <Flex.Item>

                        </Flex.Item>
                        <Flex.Item className={mychawoStyle.displayequipment}>
                        <span>
                          <img src={require('../../svg/title-bar/plus.svg')} alt="" />
                        </span>
                        </Flex.Item>
                        <Flex.Item className={mychawoStyle.displayequipment}>
                         <span>
                          <img src={require('../../svg/title-bar/plus.svg')} alt="" />
                        </span>
                        </Flex.Item>
                        <Flex.Item>

                        </Flex.Item>
                    </Flex>
                </div>
            </div>
        )
    }
}
class Mychawo extends Component{
    render(){
        return(
            <div>
                {/*头部*/}
                <div className={mychawoStyle.header}>
                    <Mychawo_header/>
                    <div className={mychawoStyle.usernameimg}>
                        <img className={mychawoStyle["user-photo"]} src={require('../../svg/title-bar/user.svg')}/>
                        <p>MB0825</p>
                    </div>
                    <div className={mychawoStyle["msg-bg"]}>
                        <Mymsg/>
                    </div>
                </div>

                <Main/>
                <Nctouch/>

            </div>
        )
    }
}
export default Mychawo

