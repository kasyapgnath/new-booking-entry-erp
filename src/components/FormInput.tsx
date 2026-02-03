import type { UseFormRegisterReturn } from "react-hook-form";


interface FormInputProps {
  label: string;
  type?: string;
  error?: string;
  registration: UseFormRegisterReturn;
  textarea?: boolean;
  disabled?: boolean;
}

export default function FormInput({
  label,
  type = "text",
  error,
  registration,
  textarea = false,
  disabled = false,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
  {label}
</label>


      {textarea ? (
        <textarea
          {...registration}
          disabled={disabled}
          className="border rounded px-3 py-2"
        />
      ) : (
        <input
          {...registration}
          type={type}
          disabled={disabled}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"

        />
      )}

      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}
