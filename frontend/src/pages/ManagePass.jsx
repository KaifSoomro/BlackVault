import React from "react";
import Container from "../components/common/Container.jsx";
import ManagePassCard from "../components/common/ManagePassCard.jsx";
import { MoveRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

const ManagePass = () => {
  const token = localStorage.getItem("token");
  const [error, setError] = useState("");
  const [masterPin, setMasterPin] = useState("");
  const queryClient = useQueryClient();

  const handleMasterPin = (e, number) => {
    setMasterPin((prev) => {
      if (prev.length >= 6) return prev;

      return prev + number;
    });
  };

  const { data, isLoading } = useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/accounts/all-accounts`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        const data = await res.json();

        if (!res.ok) {
          setError(data.message || "Something went wrong.");
          throw new Error(data.message || "Something went wrong.");
        }

        return data.accounts;
      } catch (error) {
        setError(error.message || "Something went wrong.");
        throw error;
      }
    },
  });

  const { mutate: handleUnlockVault, isPending } = useMutation({
    mutationFn: async (masterPin) => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/accounts/unlock`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              masterPin,
            }),
          },
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Something went wrong.");
        }

        return data;
      } catch (error) {
        throw error;
      }
    },
    onSuccess: (data) => {
      toast.success(data.message);
      setError("");
      queryClient.invalidateQueries({
        queryKey: ["accounts"],
      });
    },
    onError: (data) => {
      toast.error(data.message);
    },
  });

  return (
    <Container>
      {error ? (
        <div className="w-full h-180 flex items-center justify-center">
          <div className="w-100 h-100 text-center">
            <h1 className="text-4xl font-bold text-[#47f375]">
              Vault is Locked.
            </h1>
            <p className="text-neutral-300 mt-3">
              Enter your 6 Digits Master Pin to Unlock Vault
            </p>

            <div className="text-4xl text-center w-80 mt-3 border border-neutral-700/40 tracking-widest rounded-md outline-none mx-auto text-gray-300">
              {masterPin || "000000"}
            </div>

            <div className="w-80 grid grid-cols-3 gap-y-6 justify-center mx-auto mt-8">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number, index) => (
                <button
                  onClick={(e) => handleMasterPin(e, number)}
                  key={index}
                  className="w-15 h-15 rounded-full flex items-center justify-center text-3xl text-white cursor-pointer border border-white/20 bg-white/10 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white/15 active:scale-110 active:bg-white/20 active:shadow-[inset_0_4px_12px_rgba(0,0,0,0.35),inset_0_-2px_4px_rgba(255,255,255,0.1)]transition-all duration-200 select-none mx-auto"
                >
                  {number}
                </button>
              ))}
              <button
                onClick={() => handleUnlockVault(masterPin)}
                className="w-15 h-15 rounded-full flex items-center justify-center text-3xl text-white cursor-pointer border border-white/20 bg-white/10 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_20px_rgba(0,0,0,0.25)] hover:bg-white/15 active:scale-110 active:bg-white/20 active:shadow-[inset_0_4px_12px_rgba(0,0,0,0.35),inset_0_-2px_4px_rgba(255,255,255,0.1)]transition-all duration-200 select-none mx-auto"
              >
                {" "}
                <MoveRight />{" "}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <div className="w-full mt-30 md:mt-40 flex md:flex-row flex-col items-center justify-between">
            <input
              type="text"
              placeholder="Search..."
              className="w-full md:w-80 h-12 md:h-10 border border-neutral-700/50 rounded-xl ps-4 outline-none focus:border-[#47f375] transition-all duration-200 ease"
            />

            <Link
              to="/add-new-password"
              className="mt-5 md:mt-0 w-full md:w-auto relative overflow-hidden rounded-xl border border-[#47f375]/20 bg-[#47f375]/10 px-4 py-3 md:py-2 text-[#47f375] backdrop-blur-xl transition-all duration-300 hover:border-[#47f375]/50 hover:bg-[#47f375]/20 hover:shadow-[0_0_30px_rgba(71,243,117,0.25)]"
            >
              <span className="flex items-center justify-center md:justify-start gap-2">
                <Plus
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-90"
                />
                Add New Password
              </span>
            </Link>
          </div>
          <div className="w-full my-15 grid grid-cols-1 md:grid-cols-3">
            { data?.map((value, index) => (
              <ManagePassCard key={index} value={value}/>
            )) }
          </div>{" "}
        </>
      )}
    </Container>
  );
};

export default ManagePass;
