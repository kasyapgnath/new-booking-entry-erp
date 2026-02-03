import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import FormInput from "../components/FormInput";
import SectionWrapper from "../components/SectionWrapper";

interface BookingFormData {
  senderName: string;
  senderMobile: string;
  senderEmail?: string;
  receiverName: string;
  receiverAddress: string;
  weight: number | undefined;
  rate: number | undefined;
  total: number;
}

export default function BookingForm() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm<BookingFormData>({
    mode: "onChange",
    defaultValues: {
      senderName: "",
      senderMobile: "",
      senderEmail: "",
      receiverName: "",
      receiverAddress: "",
      weight: undefined,
      rate: undefined,
      total: 0,
    },
  });

  const weight = watch("weight");
  const rate = watch("rate");

  useEffect(() => {
    if (weight && rate) {
      setValue("total", weight * rate);
    } else {
      setValue("total", 0);
    }
  }, [weight, rate, setValue]);

  const onSubmit = (data: BookingFormData) => {
    console.log("Final Booking Data:", data);

    setSuccess(true);
    reset();

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <>
     {success && (
  <div className="fixed top-6 right-6 z-50 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg text-sm font-medium">
    Booking Successful
  </div>
)}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-5xl mx-auto mt-16 p-4 space-y-6"
      > 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionWrapper title="Sender Details">
            <FormInput
              label="Full Name"
              registration={register("senderName", { required: "Required" })}
              error={errors.senderName?.message}
            />

            <FormInput
              label="Mobile Number"
              registration={register("senderMobile", {
                required: "Required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Must be 10 digits",
                },
              })}
              error={errors.senderMobile?.message}
            />

            <FormInput
              label="Email"
              registration={register("senderEmail", {
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              })}
              error={errors.senderEmail?.message}
            />
          </SectionWrapper>

          <SectionWrapper title="Receiver Details">
            <FormInput
              label="Full Name"
              registration={register("receiverName", { required: "Required" })}
              error={errors.receiverName?.message}
            />

            <FormInput
              label="Full Address"
              textarea
              registration={register("receiverAddress", { required: "Required" })}
              error={errors.receiverAddress?.message}
            />
          </SectionWrapper>
        </div>

        <SectionWrapper title="Package Details">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormInput
              label="Weight (kg)"
              type="number"
              registration={register("weight", {
                required: "Required",
                min: { value: 0.1, message: "Must be > 0" },
                valueAsNumber: true,
              })}
              error={errors.weight?.message}
            />

            <FormInput
              label="Rate per kg (INR)"
              type="number"
              registration={register("rate", {
                required: "Required",
                valueAsNumber: true,
              })}
              error={errors.rate?.message}
            />

            <FormInput
              label="Total Shipping Cost"
              type="number"
              disabled
              registration={register("total")}
            />
          </div>
        </SectionWrapper>

        <button
          type="submit"
          disabled={!isValid}
          className={`px-6 py-2 rounded-lg text-sm font-medium text-white transition ${
            isValid
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Submit Booking
        </button>
      </form>
    </>
  );
}
