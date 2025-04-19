import React from "react";
import { useNavigate } from "react-router-dom";

const SearchDropdown = ({ results }) => {
    const navigate = useNavigate();

    return (
        <div className="absolute top-full left-0 w-full bg-white border border-orange-300 rounded-md shadow-lg z-50 mt-1 max-h-60 overflow-y-auto">
            {results.map((kos) => (
                <div
                    key={kos.id}
                    className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
                    onClick={() => navigate(`/kos/${kos.id}`)}
                >
                    {kos.nama}
                </div>
            ))}
        </div>
    )
};

export default SearchDropdown;