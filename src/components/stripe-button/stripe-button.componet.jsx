import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;

    const publishableKey = 'pk_test_51HtbPdCnK8tRy3Zp8aBcSmwWpyqpWtVaFvFpl4zI5CLeltcrKHbaEBcaACfk1P8TsVpOqst2pvjsai1rxUStMQLw00FtaNuW15';

    const onToken = token => {
        console.log(token);
        alert('Payment is successful')
    }

    return(
        <StripeCheckout 
            name="CRWN"
            description={`Total Price is $${price}`}
            image="https://sendeyo.com/up/d/f3eb2117da"
            panelLabel="Panel Label"
            amount={priceForStripe}
            stripeKey={publishableKey}
            label="Pay Now"
            billingAddress
            shippingAddress
            token={onToken}
        />
    )
}

export default StripeCheckoutButton