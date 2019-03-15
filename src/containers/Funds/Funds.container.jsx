import React, {Component} from 'react';
import {Layout,Spin,message} from 'antd';
import InfiniteScroll from 'react-infinite-scroller';



import { FundsListObj } from '../../utils/api-endpoints';
import CardComponent from '../../components/Card/card.component';
import HeaderUI from '../../presentational/Header/Header';

import './funds.css';

const {Content,Header} = Layout;

export default class FundsContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            fundsList : [],
            limit: 16,
            offset: 0,
            numOfFunds:0,
            fetchData: true,
        }

        this.getFundsListArray = this.getFundsList.bind(this);
    }
    
    componentDidMount() {
        //this.getFundsList();
    }

    getFundsList() {
        if(this.state.fetchData){
            FundsListObj.getFunds(this.state.limit, this.state.offset).then(result=> {
                console.log(result);
                if(result.data.length){
                    this.setState({
                        fundsList: [...this.state.fundsList,...result.data],
                        limit: 16,
                        offset: this.state.fundsList.length + result.data.length,
                        numOfFunds: result.count
                    })
                }
            }).catch(err => {
                this.setState( {
                    fetchData: false
                })
                console.error(err);
            })
        }else {
            message.info("Could not fetch more data!")
        }
    }


    render() {
        return (
            <div style={{backgroundColor:"#fff"}}>
                <Header style={{textAlign:"center"}}>
                    <span style={{color:"#eee" , textAlign:"center"}}> <b> INDWEALTH.IN </b> </span>
                </Header>
                <Content style={{ padding: '0 50px', marginTop: 30 }}> 
                    <HeaderUI numOfFunds={this.state.numOfFunds}/>  
                    <InfiniteScroll 
                        pageStart = {0}
                        loadMore = {this.getFundsListArray}
                        hasMore = {this.state.fetchData}
                        loader={<div className="loader" key={0}><Spin  tip="Loading..."  /></div>}
                    >
                        <CardComponent fundsList = {this.state.fundsList} /> 
                    </InfiniteScroll>
                </Content>
            </div>
            
        )
    }
}