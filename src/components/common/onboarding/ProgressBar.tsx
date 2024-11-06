interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
  }
  
  export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
    return (
      <div className="w-full">
        <div className="h-2 bg-gray-200 rounded">
          <div 
            className="h-full bg-blue-500 rounded transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
        <div className="mt-2 text-sm text-gray-600">
          {currentStep} / {totalSteps}
        </div>
      </div>
    );
  }