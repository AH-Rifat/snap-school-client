import { Card, CardContent, Container } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const columns = [
    { field: 'transactionId', headerName: 'Transaction ID', width: 300 },
    { field: 'className', headerName: 'Class Name', width: 130 },
    { field: 'price', headerName: 'Price', type: 'number', width: 90 },
    {
        field: 'date',
        headerName: 'Date',
        type: 'date',
        width: 180,
        valueFormatter: (params) => {
            const date = new Date(params.value);
            const options = { day: 'numeric', month: 'short', year: 'numeric', weekday: 'short' };
            return date.toLocaleDateString(undefined, options);
        },
        align: 'center',
    },
    
];

const PaymentHistory = () => {
    const { user } = useAuth();
    const [paymentHistorys, setPaymentHistorys] = useState([]);

    useEffect(() => {
        const fetchPaymentHistory = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_SERVER_URL}/payment/${user?.email}`
                );
                const rows = response.data.map((payment, index) => ({
                    id: index + 1,
                    ...payment,
                }));
                setPaymentHistorys(rows);
            } catch (error) {
                console.error('Error fetching payment history:', error);
            }
        };

        fetchPaymentHistory();
    }, [user]);

    console.log(paymentHistorys);

    return (
        <Container>
            <Card>
                <CardContent>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid rows={paymentHistorys} columns={columns} pagination pageSize={5} />
                    </div>
                </CardContent>
            </Card>
        </Container>
    );
};

export default PaymentHistory;
