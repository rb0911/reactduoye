import React from 'react';
import { connect } from 'react-redux';
import {Row, Col } from 'antd';
import './index.scss';
import '../../css/common/common.less';
import HeaderComponent from '../header/headerComponent'


function IndexComponent(props){
    const { dispatch, name, like } = props;

    return <div className="inner page">
            <Row>
                <Col>
                <div>
                    <HeaderComponent name={ name} dispatch = { dispatch} />
                </div>
                </Col>
            </Row>
            <Row>
                <Col span={4}>{ name }</Col>
                <Col span={20}>content</Col>
            </Row>
        </div>
}

export default connect(
    function mapStateToProps(state){
        return state;
    },
    function mapDispatchToprops(dispatch){
        return { dispatch };
    }
)(IndexComponent);