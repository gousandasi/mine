import React,{Component} from "react";
import style from "./public.css"
/*


import React,{Component} from "react";
import {TabBar,Icon,NavBar} from "antd-mobile";
import {hashHistory} from "react-router";
import "./public.css";
class Header extends Component{
    render(){
        return (
            <div className="Header">
                {this.props.children}
            </div>
        )
    }
}
class Content extends Component{
    render(){
        return (
            <div className="content">
                {this.props.children}
            </div>
        )
    }
}
class Footer extends Component{
    constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
    };
  }
  renderContent(pageText) {
  }
  render() {
    return (
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
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            //window.location.hash = "#/"
            hashHistory.push("#/")
          }}
          data-seed="logId"
        >
          {this.props.children}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon type="koubei-o" size="md" />}
          selectedIcon={<Icon type="koubei" size="md" />}
          title="分类"
          key="分类"
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            //window.location.hash = "#/list"
            hashHistory.push("#/list")
          }}
          data-seed="logId1"
        >
          {this.props.children}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon type="koubei-o" size="md" />}
          selectedIcon={<Icon type="koubei" size="md" />}
          title="客服"
          key="客服"
          selected={this.state.selectedTab === 'blackTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blackTab',
            });
          }}
          data-seed="logId1"
        >
          {this.props.children}
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
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            //window.location.hash = "#/cart"
            hashHistory.push("#/cart")
          }}
        >
          {this.props.children}
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
          title="我的"
          key="我的"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
           //window.location.hash = "#/mine"
           hashHistory.push("#/mine")
          }}
        >
          {this.props.children}
        </TabBar.Item>
      </TabBar>
    );
  }
}
export {Header,Content,Footer}

*/

class Header extends Component{
    render(){
        return (
            <div className="Header">
                {this.props.children}
            </div>
        )
    }
}
class Content extends Component{
    render(){
        return (
            <div className={style['content']}>
                {this.props.children}
            </div>
        )
    }
}
export {Header,Content}