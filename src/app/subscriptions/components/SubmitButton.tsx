import { FunctionComponent } from "react";

type SubmitButtonProps = {
  pending: boolean;
};

export const SubmitButton: FunctionComponent<SubmitButtonProps> = ({
  pending,
}) => {
  return (
    <button
      type="submit"
      disabled={pending}
      className="font-bold mt-6 inline-block text-white py-3 px-6 bg-blue-900 hover:bg-blue-700 rounded-full shadow-md border border-blue-700 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {pending ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Inscription en cours...
        </span>
      ) : (
        "Je m'inscris gratuitement 🚀"
      )}
    </button>
  );
};

SubmitButton.displayName = "SubmitButton";
