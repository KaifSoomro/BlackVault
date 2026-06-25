import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Copy, Check, MoreHorizontal, User } from "lucide-react";
import toast from "react-hot-toast";
import useFormateDate from "../../utils/useFormatDate.js";
import { Link } from "react-router-dom";

const ManagePassCard = ({ value }) => {
  const pass = value?.password;
  const [copied, setCopied] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const extractedLetter = value?.email.slice(0, 1);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(pass);

    setCopied(true);
    toast.success("Password Copied.");

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-neutral-800 bg-linear-to-br from-neutral-950 via-black to-neutral-900 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#47f375]/30 hover:shadow-[0_0_35px_rgba(71,243,117,0.15)]">
      <div className="absolute -top-10 right-0 h-24 w-24 rounded-full bg-[#47f375]/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#47f375]/20 bg-[#47f375]/10 text-[#47f375]">
            <span className="text-xl uppercase">{ extractedLetter }</span>
          </div>

          <div>
            <h3 className="font-semibold text-white">{ value?.websiteName }</h3>
            <p className="text-sm text-neutral-500">{ value?.email }</p>
          </div>
        </div>

        <div>
          <button className="text-neutral-500 transition hover:text-white">
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between rounded-2xl border border-neutral-800 bg-white/2 px-4 py-3">
        <input type={showPass ? "text" : "password"} value={pass} className="border-none outline-none"/>

        <div className="flex items-center gap-3">
          <button onClick={handleCopy} className="cursor-pointer">
            {copied ? (
              <Check
                size={18}
                className="text-[#47f375] transition-all duration-200"
              />
            ) : (
              <Copy
                size={18}
                className="text-neutral-500 hover:text-[#47f375] transition-all duration-200"
              />
            )}
          </button>
          <button onClick={() => setShowPass(!showPass)} className="cursor-pointer">
            { showPass ? <FaEyeSlash size={18} className="text-neutral-500"/> : <FaEye size={18} className="text-neutral-500 hover:text-[#47f375] transition-all duration-200" /> }
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-[#47f375]">Created on { useFormateDate(value?.createdAt) }</span>

       <div className="flex items-center gap-4">
         <Link to={value?.websiteUrl} target="_blank" className="flex items-center gap-1 rounded-full border border-red-500/20 px-3 py-1 text-xs">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div> Live
        </Link>
         <div className="rounded-full border border-[#47f375]/20 bg-[#47f375]/10 px-3 py-1 text-xs text-[#47f375]">
          Secure
        </div>
       </div>
      </div>
    </div>
  );
};

export default ManagePassCard;
