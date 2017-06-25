/*
/!**
 * Created by Administrator on 2017/6/13.
 *!/

import React,{Component} from "react";
import {connect} from "react-redux";
import fetchJsonp from "fetch-jsonp";
import {TabBar,Icon,NavBar} from "antd-mobile";

import listStyle from "./list.css";
import "../../components/public/public.css";
import {Header,Content,Footer} from "../../components/public/public";

class ProductList extends Component{
render(){
 return <div className="page">
               <Header>
                    <div>
                    <NavBar leftContent="back"
                        mode="light"
                        onLeftClick={() => console.log('onLeftClick')}
                        rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
                        <Icon key="1" type="ellipsis" />,
                        ]}
                    >商品列表</NavBar>
                    </div>        
               </Header>
               <Content>
                   <ul className={listStyle.class}>
                        <li>综合排序</li>
                        <li>新上架</li>
                        <li>人气</li>
                        <li>筛选</li>
                        <li>分类</li>
                   </ul>
                   <ul className={listStyle.pro}> 
                    {
                    this.props.listData.map((ele,index)=>{
                    return <li key={index} className={listStyle.item}>
                                <img src={ele.goods_image_url} alt=""/>
                                <p>{ele.goods_name}</p>
                                <p>{ele.goods_jingle}</p>
                                <p>￥{ele.goods_price}</p>
                                <p>销量<span>{ele.goods_salenum}</span></p>
                            </li>  
                        })
                    }                                                                                                           
                   </ul>
               </Content>
               <Footer/>
           </div>
        }
        componentDidMount(){
               this.props.getInitData()
        }                
}
function mapStateToProps(state){
    return{
        listData:state.ListReducer.listData
    }
}
function mapDispatchToProps(dispatch){
        return{
            getInitData(){
                 fetchJsonp("http://www.chawo.com/mobile/index.php?act=goods&op=goods_list&gc_id=1&page=10&curpage=1&gc_id=1&_=1497347918977&callback=jsonp1")
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    dispatch({
                        type:"getProductInitData",
                        listData:data.datas.goods_list
                    })
                })
            }
        }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductList)*/
/**
 * Created by Administrator on 2017/6/13.
 */

import React,{Component} from "react";
import {connect} from "react-redux";
import fetchJsonp from "fetch-jsonp";
import {TabBar,Icon,NavBar,ListView,RefreshControl,SearchBar,Tabs,WhiteSpace,Popover} from "antd-mobile";
import {Link} from "react-router";
import listStyle from "./list.css";
import "../../components/public/public.css";
import {Header} from "../../components/public/public";
const TabPane = Tabs.TabPane;
const Item = Popover.Item;
const RenderRow=(rowData)=>{
    return  <div>
        <ul className={listStyle.pro}>
            <li className={listStyle.item}>
                <Link to={`/detail/${rowData.goods_id}`}>
                    <img src={rowData.goods_image_url} alt=""/>
                </Link>
                <p>{rowData.goods_name}</p>
                <p>{rowData.goods_jingle}</p>
                <p>￥{rowData.goods_price}</p>
                <p>销量<span>{rowData.goods_salenum}</span></p>

            </li>

        </ul>
    </div>
}
class Content extends Component{
    render(){
        return (
            <div className={listStyle['content']}>
                {this.props.children}
            </div>
        )
    }
}
class ProductList extends Component {
    state={
        pageNum:1
    }
    render(){

        let offsetX = -10; // just for pc demo
        if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
            offsetX = -26;
        }

        this.props.listData;
        const {listData} = this.props
        //创建一个ListView.DataSource的实例，为了生成dataSource数据
        const ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        // 定义列表的数据 需要用ds包装（不能直接使用一个数据需要包装）
        const dataSource = ds.cloneWithRows(listData)
        return (
            <div>
                <Header>
                    <NavBar
                        style={{color:'#888'} }
                        mode="light"
                        onLeftClick={() => console.log('onLeftClick')}
                        rightContent={
                            <Popover mask={false}
                                     overlayClassName="fortest"
                                     overlayStyle={{ color: 'currentColor' }}
                                     overlay={[
                                         (<Item key="4" value="scan" icon={<Icon type='search' size="xs" />} data-seed="logId">扫一扫</Item>),
                                         (<Item key="5" value="special" icon={<Icon type='search' size="xs" />} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
                                         (<Item key="6" value="button ct" icon={<Icon type='search' size="xs" />}>
                                             <span style={{ marginRight: 5 }}>帮助</span>
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
                    ><SearchBar placeholder="搜索" cancelText="" /></NavBar>
                </Header>
                <Content>
                    <div className={listStyle.content}>
                        <WhiteSpace />
                        <Tabs defaultActiveKey="3" animated={false}>
                            <TabPane tab="综合人气" key="1">
                            </TabPane>
                            <TabPane tab="新上架" key="2">
                            </TabPane>
                            <TabPane tab="人气" key="3">
                            </TabPane>
                            <TabPane tab="筛选" key="4">
                            </TabPane>
                            <TabPane tab="分类" key="5">
                            </TabPane>
                        </Tabs>
                        <WhiteSpace />
                    </div>
                    {/*<ul className={listStyle.class}>
                     <li>综合排序</li>
                     <li>新上架</li>
                     <li>人气</li>
                     <li>筛选</li>
                     <li>分类</li>
                     </ul>*/}
                    <ListView
                        style={{
                            height:document.documentElement.clientHeight-(190*window.devicePixelRatio/2)
                        }}
                        initialListSize={5}
                        pageSize={5}
                        dataSource={dataSource}
                        useZscroller={true}
                        renderRow={RenderRow}
                        scrollerOptions={{ scrollbars: true }}
                        /*renderHeader={()=><div>Header</div>}
                         renderFooter={()=><div>Footer</div>}*/
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onReftesh={()=>{this.refresh()}}
                            />
                        }
                        onEndReached={()=>{this.loadMore()}}
                        onEndReachedThreshold={10}
                    />
                </Content>
            </div>
        )
    }
    refresh (){
        this.setState({
            refreshing:true
        })
        this.props.dispatch(getProductData(()=>{
            this.setState({
                refreshing:false
            })
        }))
    }
    loadMore(){
        if(num*10>=(this.props.total)){
            return
        }
        if(this.loading){return}
        this.loading = true;
        var num = this.state.pageNum
        this.setState({
            pageNum:++num
        })
        this.props.dispatch(getProductMoreData(num,()=>{this.loading=false}))
    }
    componentDidMount(){
        console.log(this.props.params)
        this.props.dispatch(getProductData(this.props.params.brand_id))
    }
}
const getProductMoreData = (num,callback) =>{
    return function (dispatch){
        return fetchJsonp(`http://www.chawo.com/mobile/index.php?act=goods&op=goods_list&gc_id=1&page=10&curpage=${num}&gc_id=1&_=1497347918977&callback=jsonp1`,{timeout:20000})
            .then(res=>res.json())
            .then(data=>{
                callback()
                dispatch({
                    type:"getProductListDataMore",
                    payload:{
                        listData:data.datas,
                        total:data.page_total
                    }
                })
            })
    }
}
const getProductData = (id) =>{
    return function (dispatch){
        return fetchJsonp(`http://www.chawo.com/mobile/index.php?act=goods&op=goods_list&b_id=${id}&page=10&curpage=1&_=1497766206931&callback=jsonp1`,{timeout:20000})
            .then(res=>res.json())
            .then(data=>{
                dispatch({
                    type:"getProductListData",
                    payload:{
                        listData:data.datas.goods_list,
                        total:data.page_total
                    }
                })
            })
    }
}
var mapStateToProps = (state)=>{
    return {
        listData:state.ListReducer.listData,
        total:state.ListReducer.total
    }
}
export default connect(mapStateToProps)(ProductList)