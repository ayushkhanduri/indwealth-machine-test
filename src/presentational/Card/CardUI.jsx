import React from 'react';

import {Card,Col,Row,Rate,Tag} from 'antd';


import './card.css';

const tags= ["Debt", "Moderately Low Risk", "Direct"];

const CardUI = ({data,deleteCard = () => {}}) => (
    <Row gutter={16} className='card-container'>
        {
            data.map(item => 
                (<Col key={item.id} md={12} lg= {12} xl ={12} xs={24} sm={24} className="card-instance"  >
                    <Card title={<span> <b> {item.name} </b></span>} bordered={true} hoverable={true} extra={<Rate count={5} defaultValue={item.rating} disabled={true} />} style={{borderRadius: "5px"}}>
                    <div style={{padding:"0 10px"}}>
                        <Row >
                            {tags.map((tagText,index) => 
                                <Tag key={index}> {tagText}</Tag>
                                )}
                        </Row>
                        <Row style={{padding:"30px 0px 10px "}}>
                            <Col xs={24} sm={24} md={8} lg={8} xl={8} className="center">
                                <div >
                                    1yr Returns
                                </div>
                                <div className="yearReturn bigFont">
                                    +{item.returns.oneYear}%
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={8} lg={8} xl={8} className="center">
                                <div>
                                    AUM
                                </div>
                                <div className="bigFont">
                                    <b>&#8377; {item.aum.toLocaleString()} Cr</b>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={8} lg={8} xl={8} className="center">
                                <div>
                                    Expense Ratio
                                </div>
                                <div className="bigFont">
                                    <b>{item.expenseRatio} %</b>
                                </div>
                            </Col>
                        </Row>
                        </div>
                    </Card>
                </Col>
                )
                
            )
        }
        
    </Row>
);

export default CardUI;