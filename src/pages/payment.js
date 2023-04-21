import {
    CheckCircleOutlined,
    PlusOutlined,
} from '@ant-design/icons';

import { 
    Button,
    Space,
    Divider,
} from 'antd';

import CreditCard from 'components/card';

const checkIconStyle = {
    color: 'green',
    fontSize: '21px',
    margin: '5px 0 0 0',
}

const plusIconStyle = {
    color: '#69b1ff',
    fontSize: '21px'
}

export default function Payment() {
    return (
        <>
            <Space>
                <h2>Payment</h2>
                <CheckCircleOutlined style={checkIconStyle} />
                <span>h</span>
            </Space>

            <h3>Use Credit/Debit Card</h3>
            <CreditCard />

            <Space style={{padding: '0 10px 0 10px'}}>
                <Button type="link" size={'large'}>
                    <PlusOutlined style={plusIconStyle}/>
                </Button>
                <img src={'/credit-card.png'} style={{width: 40, marginTop: 5}}/>
                <Button type="link" size={'large'}>Add new card</Button>
            </Space>
                
            <Divider />
            <h3>Or Pay With</h3>
            <h4>
                By using a digital wallet and continuing past this page, you have read and are accepting the
                <span style={{color: '#69b1ff'}}>&nbsp;Terms of Use</span>.
            </h4>
        </>
    )
}