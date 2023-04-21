import { 
    Button,
    Radio,
    Input,
    Space,
    Typography,
} from 'antd';

import {
    CheckCircleOutlined,
} from '@ant-design/icons';

const { Text } = Typography;

const divStyle = {
    padding: '20px 20px',
    border: '1px solid #91caff',
    background: '#e6f4ff',
    display: 'flex',
    columnGap: '10px',
}

const checkIconStyle = {
    color: 'green',
    fontSize: '21px',
}

const inputStyle = {
    width: 150,
    padding: 5,
    border: '1px solid grey',
    borderRadius: 0,
}

const buttonStyle = {
    padding: 0,
}

export default function CreditCard() {
    return (
        <div style={divStyle}>
            <div>
                <Radio style={{marginTop: 5}}/>
            </div>
            <div>
                <Space size={'middle'} align="start">
                    <img src={'/visa_icon.png'} style={{background: 'white', marginTop: 5}}/>
                    <Space direction="vertical" size={0}>
                        <Text strong>Visa - 9999</Text>
                        <Text type="secondary">User Name | exp. 00/11</Text>
                        <Text type="secondary">
                            <Button type="link" style={buttonStyle}>Edit</Button> | <Button type="link" style={buttonStyle}>Delete</Button>
                        </Text>
                    </Space>
                </Space>
                <p>Security Code</p>
                <Space size={'middle'}>
                    <Input
                        placeholder="..."
                        suffix={
                            <CheckCircleOutlined style={checkIconStyle} />
                        }
                        style={inputStyle}
                        />
                    <img src={'/payment-method.png'} style={{width: 40, marginTop: 5}} />
                    3-digits on back of card
                </Space>
            </div>
        </div>
    )
}