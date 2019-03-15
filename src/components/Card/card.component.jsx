import React,{Component} from 'react';
import CardUI from '../../presentational/Card/CardUI';
import { FundsListObj } from '../../utils/api-endpoints';

export default class CardComponent extends Component{


    render() {
        return (
            <CardUI data= {this.props.fundsList}/> 
        );
    }
}