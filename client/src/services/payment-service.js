import axios from 'axios';

const Pay = async (paymentForm, userid) => {
    const postData = JSON.stringify({
        userid,
        paymentForm
    });
    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    try {
        axios.post('http://localhost:4000/api/v1/users/pay', postData, axiosConfig)
          .then((res) => {
            console.log("Payment complete: ", res);
            localStorage.setItem('currentUserPayments', res.data.user.payments);
            window.location.reload(true);
          })
          .catch((err) => {
            console.log("Payment failed: ", err);
          })
    } catch(err) {}
}

export const paymentService = Pay