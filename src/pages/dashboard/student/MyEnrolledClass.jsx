import { Card, CardContent, Container } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'className', headerName: 'Class Name', width: 130 },
    { field: 'instructorName', headerName: 'Instructor Name', width: 130 },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 90,
    },
];

const rows = [
    { id: 1, className: 'Snow', instructorName: 'Jon', price: 35 },
    { id: 2, className: 'Lannister', instructorName: 'Cersei', price: 42 },
    { id: 3, className: 'Lannister', instructorName: 'Jaime', price: 45 },
    { id: 4, className: 'Stark', instructorName: 'Arya', price: 16 },
    { id: 5, className: 'Targaryen', instructorName: 'Daenerys', price: null },
    { id: 6, className: 'Melisandre', instructorName: null, price: 150 },
    { id: 7, className: 'Clifford', instructorName: 'Ferrara', price: 44 },
    { id: 8, className: 'Frances', instructorName: 'Rossini', price: 36 },
    { id: 9, className: 'Roxie', instructorName: 'Harvey', price: 65 },
];

const MyEnrolledClass = () => {
    return (
        <Container>
            <Card>
                <CardContent>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
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