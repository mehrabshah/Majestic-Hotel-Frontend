import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { createPaymentLink } from '../../../../User/Services/Services';

const useStripePayment = () => {
  const [error, setError] = useState(null);
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHED_KEY);

  const initializeStripe = async () => {
    try {
      await stripePromise;
    } catch (err) {
      setError('Error initializing Stripe');
    }
  };

  const handlePayment = async (cardElement, amount, currency, description) => {
    try {
      const stripe = await stripePromise;

      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        setError(error.message);
        return;
      }

      const { id } = paymentMethod;
      const response = await createPaymentLink({ amount, currency, source: id, description });

      if (!response.ok) {
        throw new Error('Failed to create payment link');
      }

      const data = await response.json();
      const { client_secret } = data;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: cardElement,
          billing_details: {},
        },
      });

      if (result.error) {
        setError(result.error.message);
        return;
      }

      // Payment successful
    } catch (err) {
      setError(err.message);
    }
  };

  return { initializeStripe, handlePayment, error };
};

export default useStripePayment;