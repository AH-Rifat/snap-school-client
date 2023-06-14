import { Card, CardContent, Container } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'className', headerName: 'Class Name', width: 130 },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 90,
    },
    { field: 'status', headerName: 'Status', width: 180 },
];



const MyEnrolledClass = () => {
    const { user } = useAuth();
    const [showEnrolledStudents, setshowEnrolledStudents] = useState([]);

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
                setshowEnrolledStudents(rows);
            } catch (error) {
                console.error('Error fetching payment history:', error);
            }
        };

        fetchPaymentHistory();
    }, [user]);


    return (
        <Container>
            <Card>
                <CardContent>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={showEnrolledStudents}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                        // checkboxSelection
                        />
                    </div>
                </CardContent>
            </Card>
        </Container>
    );
};

export default MyEnrolledClass;