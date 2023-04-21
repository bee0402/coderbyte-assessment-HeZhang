import { 
    Col, 
    Row,
} from 'antd';

import Delivery from './delivery';
import Payment from './payment';
import Total from './total';

const colStyle = {
    background: 'white',
    paddingTop: '8px',
    paddingRight: '30px',
    paddingBottom: '8px',
    paddingLeft: '30px',
    border: '1px solid grey',
    borderRadius: '5px',
};

const rowStyle = {
    marginTop: '0px',
    marginRight: '0px',
    marginBottom: '0px',
    marginLeft: '0px',
    padding: '30px 30px 30px 30px',
}

export default function LandingPage() {
    return (
        <>
            <Row gutter={[24, 24]} style={rowStyle}>
                <Col span={14}>
                    <Row gutter={[16, 16]}>
                        <Col className="gutter-row" span={24}>
                            <div style={colStyle}>
                                <Delivery></Delivery>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={24}>
                            <div style={colStyle}>
                                <Payment></Payment>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col span={10}>
                    <div style={colStyle}>
                        <Total></Total>
                    </div>
                </Col>
            </Row>
        </>
    )
}