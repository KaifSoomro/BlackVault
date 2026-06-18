import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const VerifyEmail = () => {
  const { token } = useParams();

  const { data: verifyEmail } = useQuery({
    queryKey: ["verifyEmail"],
    queryFn: async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/verify/${token}`, {
            method: "POST"
        });

        const data = await res.json();
        if(!res.ok){
            throw new Error(data.message || "Something went wrong.")
        }else {
            toast.success(data.message)
        }

        return data;
      } catch (error) {
        console.log(error.message)
        throw error;
      }
    }
  });

  const isSuccess = verifyEmail?.success;

  return (
    <div className="w-full h-screen flex items-center justify-center bg-neutral-950">
      <div className="w-[90%] max-w-md p-8 rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.6)] flex flex-col items-center text-center">
        {/* Icon */}
        <div
          className={`w-20 h-20 flex items-center justify-center rounded-full mb-5 
          ${isSuccess ? "bg-green-500/10" : "bg-red-500/10"}`}
        >
          {isSuccess ? (
            <CheckCircle size={50} className="text-green-400" />
          ) : (
            <XCircle size={50} className="text-red-400" />
          )}
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-white">
          {isSuccess ? "Verification Successful" : "Verification Failed"}
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-neutral-400 mt-2">
          {isSuccess
            ? "Your account has been successfully verified. You can now login."
            : "Verification link is invalid or expired. Please try again."}
        </p>

        {/* Button */}
        <button
          className={`mt-6 px-6 py-2 rounded-lg font-semibold transition-all duration-300
          ${
            isSuccess
              ? "bg-green-500 text-black hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
              : "bg-red-500 text-black hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
          }`}
        >
          {isSuccess ? "Go to Login" : "Try Again"}
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
