'use client';

import { useState } from 'react';
import ProgressBar from './ProgressBar';
import InputNameStep from './input/InputNameStep';
import SelectGenderStep from './select/SelectGenderStep';
import InputBirthDateStep from './input/InputBirthDateStep';
import RoutingButton from '../button/RoutingButton';
export default function OnboardingContainer() {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const renderStep = () => {
    switch(step) {
        case 1:
            return <InputNameStep onNext={handleNext} onBack={handleBack} />;
        case 2:
            return <SelectGenderStep onNext={handleNext} onBack={handleBack} />;
        case 3:
            return <InputBirthDateStep onNext={handleNext} onBack={handleBack} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main content area */}
      <div className="flex-1 px-5">
        {step <= 4 && (
          <div className="pt-3">
            <ProgressBar currentStep={step} totalSteps={8} />
          </div>
        )}
        <div className="mt-6">
          {renderStep()}
        </div>
      </div>

      {/* Fixed bottom button */}
      <div className="px-5 pb-14">
        <RoutingButton
          onClick={handleNext}
          className="w-full"
        >
          다음
        </RoutingButton>
      </div>
    </div>
  );
}