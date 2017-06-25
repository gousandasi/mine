/**
 * Created by Administrator on 2017/6/16.
 */
import React,{Component} from "react";
import {render} from "react-dom";
import { Popover, NavBar, Icon } from 'antd-mobile';
import style from "./signin.css"
/*import "../../svg/icon-core/adduser.svg";
import "../../svg/icon-core/cannel.svg";
import "../../svg/icon-core/trips.svg";
import "../../svg/icon-core/comment.svg";*/

const Item = Popover.Item;
class Header extends React.Component {
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
        return (<div className={style['top-box']}>
            <a className={style.back} href="/">{"<"}</a>
            <NavBar iconName={false}
                    mode="light"
                    rightContent={
                        <Popover mask
                                 overlayClassName="fortest"
                                 overlayStyle={{ color: 'currentColor' }}
                                 visible={this.state.visible}
                                 overlay={[
                                     (<Item key="4" value="scan" icon={<Icon type={require('../../svg/icon-core/adduser.svg')} size="xs" />} data-seed="logId">首页</Item>),
                                     (<Item key="5" value="special" icon={<Icon type={require('../../svg/icon-core/cannel.svg')} size="xs" />} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
                                     (<Item key="6" value="button ct" icon={<Icon type={require('../../svg/icon-core/trips.svg')} size="xs" />}>
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
                签到领积分
            </NavBar>
        </div>);
    }
}
const MemberTop =({modalShow,modalHide,modalStatus})=>{
    return <div className={style['member-top']}>
                <div className={style['my-pointnum']}>
                    {"我的积分"}
                    <span className={style.pointnum}>50</span>
                </div>
                <div className={style['sign-box']}>
                    <div className={style['sign-btn']}>
                        <h2>已签到</h2>
                        <h6>坚持哦</h6>
                    </div>
                </div>
                <div onClick={modalShow} className={style['description_link']}>
                    {"活动说明"}
                    <Icon type={require('../../svg/icon-core/adduser.svg')} />
                </div>
               <div className={style['discover']} style={{display:modalStatus?"block":"none"}}>
                   <div className={style['description_info']}>
                       <div className={style['s-dialog-content']}>
                           <h4>活动说明</h4>
                           <ul>
                               <li>1、每人每天最多签到一次，签到后有机会获得积分。</li>
                               <li>2、网站可根据活动举办的实际情况，在法律允许的范围内，对本活动规则变动或调整。</li>
                               <li>3、对不正当手段（包括但不限于作弊、扰乱系统、实施网络攻击等）参与活动的用户，网站有权禁止其参与活动，取消其获奖资格（如奖励已发放，网站有权追回）。</li>
                               <li>4、活动期间，如遭遇自然灾害、网络攻击或系统故障等不可抗拒因素导致活动暂停举办，网站无需承担赔偿责任或进行补偿。</li>
                           </ul>
                       </div>
                       <div className={style['s-dialog-btn-wapper']}>
                           <a onClick={modalHide} href="javascript:;">确定</a>
                       </div>
                   </div>
               </div>
           </div>
}
const SignList =(()=>{
    return <div className={style['signin-list']}>
        <h3>{"签到日志"}<a href="">查看我的积分</a></h3>
        <ul className={style['loglist']}>
            <li className={style['signin-item']}>
                {"会员积分"}
                <em>+5</em>
                <span>2017-06-16 10:18:01日签到获得</span>
            </li>
        </ul>
    </div>
})
class Signin extends Component{
    constructor(props){
        super(props)
        this.state={
           modalStatus:false
        };
    }
    render(){
        return <div>
            <Header />
            <MemberTop modalStatus={this.state.modalStatus} modalShow={()=>this.modalShow()}  modalHide={()=>this.modalHide()}  />
            <SignList />
        </div>
    }
    modalShow(){
        this.setState({
            modalStatus:true
        })
    }
    modalHide(){
        this.setState({
            modalStatus:false
        })
    }

}

export default Signin