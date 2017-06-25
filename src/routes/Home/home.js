import  React from "react"
import {render} from "react-dom"
import { TabBar, Icon } from 'antd-mobile';
import {hashHistory} from "react-router"
class TabBarExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
        };
    }
    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
            </div>
        );
    }
    render() {
        const {pathname} = this.props.location
        //设置二级路由
        //把TabBar.Item之间的renderContent ==> {this.props.children}
        //tabbar点击切换 做路由切换 setstate ==> hashHistory.push("/")
        //选中的效果 selected = {判断按钮的路径 和 当前的路径  是否相等}{pathname="/"}
        return (
            <div>
            {this.props.children}
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
            >
                <TabBar.Item
                    title="首页"
                    key="首页"
                    icon={<div style={{
                        width: '0.44rem',
                        height: '0.44rem',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }}
                    />
                    }
                    selectedIcon={<div style={{
                        width: '0.44rem',
                        height: '0.44rem',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}
                    />
                    }
                    selected={pathname=="/"}
                    badge={1}
                    onPress={() => {
                        {/*window.location.hash="#/"*/}
                        hashHistory.push("/")
                    }}
                    data-seed="logId"
                >

                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon type="koubei-o" size="md" />}
                    selectedIcon={<Icon type="koubei" size="md" />}
                    title="列表"
                    key="列表"
                    badge={'new'}
                    selected={pathname=="/index"}
                    onPress={() => {
                        hashHistory.push("/index")
                    }}
                    data-seed="logId1"
                >

                </TabBar.Item>
                <TabBar.Item
                    title="客服"
                    key="客服"
                    icon={<div style={{
                        width: '0.44rem',
                        height: '0.44rem',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }}
                    />
                    }
                    selectedIcon={<div style={{
                        width: '0.44rem',
                        height: '0.44rem',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}
                    />
                    }
                    selected={pathname=="/server"}
                    onPress={() => {
                        {/*window.location.hash="#/"*/}
                        hashHistory.push("/server")
                    }}
                    data-seed="logId"
                >

                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <div style={{
                            width: '0.44rem',
                            height: '0.44rem',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat' }}
                        />
                    }
                    selectedIcon={
                        <div style={{
                            width: '0.44rem',
                            height: '0.44rem',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat' }}
                        />
                    }
                    title="购物车"
                    key="购物车"
                    dot
                    selected={pathname=="/cart"}
                    onPress={() => {
                        hashHistory.push("/cart")
                    }}
                >

                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                    title="我的"
                    key="我的"
                    selected={pathname=="/mine"}
                    onPress={() => {
                        hashHistory.push("/mine")
                    }}
                >

                </TabBar.Item>
            </TabBar>
            </div>
        );
    }
}
export default TabBarExample