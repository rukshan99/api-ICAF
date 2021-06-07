import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import ErrorModal from '../../Shared/UIElements/ErrorModal';
import LoadingSpinner from '../../Shared/UIElements/LoadingSpinner';

import { useHttpClient } from '../../Shared/hooks/http-hook';

let paymentForm;

const BankForm = () => {

    const { isLoading, error, clearError } = useHttpClient();

    const [ cardNo, setCardNo ] = useState('');
    const [ expDate, setExpDate ] = useState('');
    const [ cvv, setCvv ] = useState('');
    const [ payment, setPayment ] = useState({
        amount: 1000,
        cardNo,
        expDate,
        cvv
    });

    return (
        <React.Fragment>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="undefined" crossorigin="anonymous"></script>
        <ErrorModal error={error} onClear={clearError}/>  
        {isLoading && <LoadingSpinner asOverlay/>}  
            <form>
                <h5>Card Details</h5>
                <small class="form-text text-muted">Fee is LKR 1000.00</small>
                <div class="form-group">
                    <input 
                        class="form-control"
                        id="cardNo"
                        type="number"
                        placeholder="card no"
                        onChange={e => {
                            setCardNo(e.target.value);
                            setPayment({...payment, cardNo});
                            paymentForm = payment;
                        }}
                    />
                </div>
                <div class="form-group">
                    <input
                        class="form-control" 
                        id="expDate"
                        type="date"
                        placeholder="exp date" 
                        onChange={e => {
                            setExpDate(e.target.value);
                            setPayment({...payment, expDate});
                            paymentForm = payment;
                        }}
                    />
                </div>
                <div class="form-group">
                    <input
                        class="form-control" 
                        id="cvv"
                        type="number"
                        placeholder="cvv" 
                        onChange={e => {
                            setCvv(e.target.value);
                            setPayment({...payment, cvv});
                            paymentForm = payment;
                        }}
                    />
                </div>
            </form>
        </React.Fragment>
    );
};

export { paymentForm };

export default BankForm;