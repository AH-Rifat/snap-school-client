import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import { Card, CardContent, Container } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY}`);

const PaymentPage = () => {
    const { price, classId } = useParams()
    const [availableSeat, setAvailableSeat] = useState(null)
    const [enrolledStudent, setenrolledStudent] = useState(null)
    const [className, setClassName] = useState(null)
    const price1 = parseFloat(price)

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/classInfo/${classId}`)
            .then((res) => {
                setAvailableSeat(res.data[0].availableSeats)
                setenrolledStudent(res.data[0].totalEnrolled)
                setClassName(res.data[0].className)
            })
    }, [classId])

    const updatedAvailableSeat = parseInt(availableSeat) - 1
    const updatedEnrolledStudent = parseInt(enrolledStudent) + 1

    return (
        <Container>
            <Card sx={{ width: '50%' }}>
                <CardContent>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm price={price1}
                            classId={classId}
                            className={className}
                            updatedAvailableSeat={updatedAvailableSeat}
                            updatedEnrolledStudent={updatedEnrolledStudent} />
                    </Elements>
                </CardContent>
            </Card>
        </Container>
    );
};

export default PaymentPage;