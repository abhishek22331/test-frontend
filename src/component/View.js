import { Button } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    description: "Lorem ipsum dolor sit amet.",
    address: "123 Main St, Anytown, AT 12345",
    mobileNumber: "123-456-7890",
  },
];
const View = () => {
  const { id } = useParams();

  const stripePromise = loadStripe("Publishable key");

  return (
    <div className="body-cont">
      <Grid container spacing={2} style={{ padding: 40 ,justifyContent:"center"}}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card raised>
              <CardContent>
                <Typography variant="h5" component="div">
                  {user.name}
                </Typography>
                <Typography color="textSecondary">{user.email}</Typography>
                <Typography variant="body2">{user.description}</Typography>
                <Typography variant="body1">{user.address}</Typography>
                <Typography variant="body1">{user.mobileNumber}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Elements stripe={stripePromise}>
        <CheckoutForm id={id} />
      </Elements>
    </div>
  );
};

export default View;
