import {
    CheckCircleOutlined,
} from '@ant-design/icons';

import { Space } from 'antd';

const checkIconStyle = {
    color: 'green',
    fontSize: '21px',
    margin: '5px 0 0 0',
}

export default function Delivery() {
    return (
        <>
            <Space>
                <h2>Delivery</h2>
                <CheckCircleOutlined style={checkIconStyle} />
            </Space>
            <h3>Mobile Entry - Free</h3>
            <p>
                Tickets Available by Sun Apr 3, 2022 <br />
                These mobile tickets will be transferred directly to you from a trusted seller, We'll email you instructions on how to accept them on the original tickets provider's mobile app.
            </p>
        </>
    )
}