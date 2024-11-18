import React, { useState, useCallback } from 'react';
import CalculatorLayout from '../components/CalculatorLayout';
import CurrencyInput from '../components/CurrencyInput';
import PercentageInput from '../components/PercentageInput';
import MediaSection from '../components/MediaSection';

// ... [Previous imports and component code remains exactly the same until the return statement]

  return (
    <CalculatorLayout
      title="Mortgage Affordability Calculator"
      description="Find out how much house you can afford based on your income and expenses"
      blogContent={blogContent}
    >
      <div className="space-y-6">
        {/* Media Section at the top */}
        <div className="mb-8">
          <MediaSection
            imageSrc="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            altText="Family planning their home purchase"
            position="right"
          />
        </div>

        {/* Existing calculator inputs and results */}
        <CurrencyInput
          label="Annual Income"
          value={annualIncome}
          onChange={setAnnualIncome}
          placeholder="Enter your annual income"
          id="annual-income"
        />
        {/* ... [Rest of the inputs remain exactly the same] ... */}

        <div className="calculator-result">
          {/* ... [Results section remains exactly the same] ... */}
        </div>

        {/* Additional Media Section */}
        <div className="mt-8">
          <MediaSection
            imageSrc="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
            altText="Modern home exterior representing affordable housing"
            position="left"
          />
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default MortgageAffordabilityCalculator;