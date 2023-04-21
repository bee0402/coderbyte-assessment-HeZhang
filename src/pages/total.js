import { useState } from 'react';

import {
    UpOutlined,
    DownOutlined,
} from '@ant-design/icons';

import {
    Collapse,
    Checkbox,
    Button,
    Space,
} from 'antd';
const { Panel } = Collapse;

const collapseStyle = {
    background: 'white',
}

export default function Total() {

    const [status, setStatus] = useState(true);

    const Content = () => (
        <>
            <h3>Tickets</h3>
            Resale Tickets: $229.00 x 2 <span style={{float: 'right'}}>$458.00</span>

            <h3>Notes From Seller</h3>
            xfr XFER Proof of at least one dose of COVID-19 vaccination for ages 5 to 11 and&nbsp;
            guests ages 12 and up will be required to show proof of two COVID-19 vaccine doses
            or one dose of the Johnson & Johnson vaccine.<br />
            Masks must be worn.

            <h3>Fees</h3>
            Service Fee: $44.08 x 2 <span style={{float: 'right'}}>$88.16</span> <br />
            Order Processing Fee <span style={{float: 'right'}}>$2.95</span>

            <h3>Delivery</h3>
            Mobile Entry <span style={{float: 'right'}}>Free</span>

            <p>
                <Button type="link" size={'large'} style={{padding: 0}}>Cancel order</Button>
            </p>

            <h3>*All Sales Final - No Refunds</h3>
            <h4>
                <Checkbox></Checkbox>&nbsp;
                I have read and agree to the current&nbsp;
                <span style={{color: '#69b1ff'}}>&nbsp;Terms of Use</span>.
            </h4>

            <Button style={{width: '100%', background: '#389e0d', borderRadius: 0}} type="primary" size={'large'}>
                Place Order
            </Button>

            <h4>*Exceptions may apply, see our Terms of Use.</h4>
        </>
    )

    const panelTitle = () => (
        <h2>Total</h2>
    )

    const totalPrice = (total, value) => (
        <Space>
            <h2>${total}</h2>
            {
                value === true ? <UpOutlined /> : <DownOutlined />
            }
        </Space>
    )

    return (
        <>
            <Collapse 
                bordered={false} 
                defaultActiveKey={['1']}
                expandIcon={() => (<></>)}
                expandIconPosition={'end'}
                style={collapseStyle}
                >
                <Panel 
                    header={panelTitle()}
                    key="1"
                    extra={totalPrice('549.11', status)}>
                    <Content />
                </Panel>
            </Collapse>
        </>
    )
}