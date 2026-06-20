import React from "react";
import Container from "../components/common/Container.jsx";
import ManagePassCard from "../components/common/ManagePassCard.jsx";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const ManagePass = () => {
  return (
    <Container>
      <div className="w-full mt-30 md:mt-40 flex md:flex-row flex-col items-center justify-between">
        <input
          type="text"
          placeholder="Search..."
          className="w-full md:w-80 h-12 md:h-10 border border-neutral-700/50 rounded-xl ps-4 outline-none focus:border-[#47f375] transition-all duration-200 ease"
        />

        <Link to="/add-new-password" className="mt-5 md:mt-0 w-full md:w-auto relative overflow-hidden rounded-xl border border-[#47f375]/20 bg-[#47f375]/10 px-4 py-3 md:py-2 text-[#47f375] backdrop-blur-xl transition-all duration-300 hover:border-[#47f375]/50 hover:bg-[#47f375]/20 hover:shadow-[0_0_30px_rgba(71,243,117,0.25)]">
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
        <ManagePassCard />
      </div>
    </Container>
  );
};

export default ManagePass;
