import React, { useContext } from 'react';
import { ItineraryContext } from '../context/ItineraryContext';

const PaymentPlanForm = () => {
  const { itinerary, updateItinerary } = useContext(ItineraryContext);
  const { paymentPlan } = itinerary;

  const addInstallment = () => {
    updateItinerary('paymentPlan', {...paymentPlan, installments: [...paymentPlan.installments, { installment: '', amount: '', dueDate: '' }]});
  };

  const removeInstallment = (index) => {
    const newInstallments = paymentPlan.installments.filter((_, i) => i !== index);
    updateItinerary('paymentPlan', {...paymentPlan, installments: newInstallments});
  };

  const handleInstallmentChange = (index, e) => {
    const newInstallments = [...paymentPlan.installments];
    newInstallments[index][e.target.name] = e.target.value;
    updateItinerary('paymentPlan', {...paymentPlan, installments: newInstallments});
  };

  const handleChange = (e) => {
    updateItinerary('paymentPlan', {...paymentPlan, [e.target.name]: e.target.value});
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label>Total Amount</label>
          <input
            name="totalAmount"
            value={paymentPlan.totalAmount}
            onChange={handleChange}
            className="border p-2 w-full"
            placeholder="e.g. ₹ 9,00,000 for 3 pax (inclusive of GST)"
          />
        </div>
        <div>
          <label>TCS</label>
          <input
            name="tcs"
            value={paymentPlan.tcs}
            onChange={handleChange}
            className="border p-2 w-full"
            placeholder="e.g. not collected"
          />
        </div>
      </div>
      {paymentPlan.installments.map((installment, index) => (
        <div key={index} className="mb-4 border p-4 rounded relative">
          <button onClick={() => removeInstallment(index)} className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded">Remove</button>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label>Installment</label>
              <input
                name="installment"
                value={installment.installment}
                onChange={(e) => handleInstallmentChange(index, e)}
                className="border p-2 w-full"
                placeholder="e.g. Installment 1"
              />
            </div>
            <div>
              <label>Amount</label>
              <input
                name="amount"
                value={installment.amount}
                onChange={(e) => handleInstallmentChange(index, e)}
                className="border p-2 w-full"
                placeholder="e.g. ₹3,50,000"
              />
            </div>
            <div>
              <label>Due Date</label>
              <input
                name="dueDate"
                value={installment.dueDate}
                onChange={(e) => handleInstallmentChange(index, e)}
                className="border p-2 w-full"
                placeholder="e.g. Initial Payment"
              />
            </div>
          </div>
        </div>
      ))}
      <button onClick={addInstallment} className="bg-blue-900 text-white px-4 py-2 rounded">+ Add Payment Installment</button>
    </div>
  );
};

export default PaymentPlanForm;