import React, { useState, useCallback } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import CurrencyInput from '../components/CurrencyInput';
import PercentageInput from '../components/PercentageInput';
import MediaSection from '../components/MediaSection';

const HomeBuyingCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState('300000');
  const [downPayment, setDownPayment] = useState('20');
  const [closingCosts, setClosingCosts] = useState('3');
  const [lenderFees, setLenderFees] = useState('2500');
  const [inspectionCosts, setInspectionCosts] = useState('500');
  const [movingCosts, setMovingCosts] = useState('2000');
  const [renovationBudget, setRenovationBudget] = useState('5000');

  const calculateCosts = useCallback(() => {
    const price = Number(purchasePrice);
    const down = price * (Number(downPayment) / 100);
    const closing = price * (Number(closingCosts) / 100);
    const lender = Number(lenderFees);
    const inspection = Number(inspectionCosts);
    const moving = Number(movingCosts);
    const renovation = Number(renovationBudget);

    const totalUpfront = down + closing + lender + inspection;
    const totalOther = moving + renovation;
    const totalCosts = totalUpfront + totalOther;

    return {
      downPaymentAmount: down.toFixed(0),
      closingCostAmount: closing.toFixed(0),
      totalUpfrontCosts: totalUpfront.toFixed(0),
      totalOtherCosts: totalOther.toFixed(0),
      totalCosts: totalCosts.toFixed(0),
      loanAmount: (price - down).toFixed(0),
    };
  }, [purchasePrice, downPayment, closingCosts, lenderFees, inspectionCosts, movingCosts, renovationBudget]);

  const results = calculateCosts();

  const blogContent = `
    <h2>Understanding Home Buying Costs in Athens</h2>
    <p>As your local real estate expert, I help buyers understand all the costs involved in purchasing a home. This calculator provides a comprehensive breakdown of expenses you'll need to plan for.</p>

    <h2>Upfront Costs</h2>
    <ul>
      <li><strong>Down Payment:</strong> Typically 3.5% to 20% of purchase price</li>
      <li><strong>Closing Costs:</strong> Usually 2-5% of loan amount</li>
      <li><strong>Lender Fees:</strong> Application, origination, and processing fees</li>
      <li><strong>Inspection Costs:</strong> Home, pest, and specialty inspections</li>
    </ul>

    <h2>Additional Costs</h2>
    <ul>
      <li><strong>Moving Expenses:</strong> Professional movers or truck rental</li>
      <li><strong>Initial Repairs:</strong> Immediate fixes and updates</li>
      <li><strong>Furniture and Appliances:</strong> New items for your home</li>
      <li><strong>Utility Deposits:</strong> Setting up new services</li>
    </ul>

    <h2>Local Market Insights</h2>
    <p>In the Athens area:</p>
    <ul>
      <li>Average closing costs range from 2-4%</li>
      <li>Home inspection costs typically $350-600</li>
      <li>Moving costs vary by distance and volume</li>
      <li>Consider school district impact on value</li>
    </ul>

    <h2>Professional Guidance</h2>
    <p>As your real estate expert, I can help you:</p>
    <ul>
      <li>Negotiate seller concessions</li>
      <li>Find trusted service providers</li>
      <li>Compare lender offers</li>
      <li>Plan your buying timeline</li>
    </ul>
  `;

  return (
    <CalculatorLayout
      title="Home Buying Calculator"
      description="Calculate the total costs involved in buying a home"
      blogContent={blogContent}
    >
      <div className="space-y-6">
        {/* Top Media Section */}
        <div className="mb-8">
          <MediaSection
            imageSrc="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            altText="New home purchase"
            position="right"
          />
        </div>

        <CurrencyInput
          label="Purchase Price"
          value={purchasePrice}
          onChange={setPurchasePrice}
          placeholder="Enter purchase price"
          id="purchase-price"
        />
        <PercentageInput
          label="Down Payment"
          value={downPayment}
          onChange={setDownPayment}
          placeholder="Enter down payment percentage"
          id="down-payment"
        />
        <PercentageInput
          label="Closing Costs"
          value={closingCosts}
          onChange={setClosingCosts}
          placeholder="Enter closing costs percentage"
          id="closing-costs"
        />
        <CurrencyInput
          label="Lender Fees"
          value={lenderFees}
          onChange={setLenderFees}
          placeholder="Enter lender fees"
          id="lender-fees"
        />
        <CurrencyInput
          label="Inspection Costs"
          value={inspectionCosts}
          onChange={setInspectionCosts}
          placeholder="Enter inspection costs"
          id="inspection-costs"
        />
        <CurrencyInput
          label="Moving Costs"
          value={movingCosts}
          onChange={setMovingCosts}
          placeholder="Enter moving costs"
          id="moving-costs"
        />
        <CurrencyInput
          label="Renovation Budget"
          value={renovationBudget}
          onChange={setRenovationBudget}
          placeholder="Enter renovation budget"
          id="renovation-budget"
        />

        <div className="calculator-result">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-navy-600">Total Costs</h3>
              <p className="result-value text-3xl">${Number(results.totalCosts).toLocaleString()}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Down Payment</h3>
              <p className="result-value">${Number(results.downPaymentAmount).toLocaleString()}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Closing Costs</h3>
              <p className="result-value">${Number(results.closingCostAmount).toLocaleString()}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Total Upfront</h3>
              <p className="result-value">${Number(results.totalUpfrontCosts).toLocaleString()}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Additional Costs</h3>
              <p className="result-value">${Number(results.totalOtherCosts).toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Bottom Media Section */}
        <div className="mt-8">
          <MediaSection
            imageSrc="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            altText="Family moving into new home"
            position="left"
          />
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default HomeBuyingCalculator;