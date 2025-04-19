import React, { useState } from "react";
import useKos from "../hooks/useKos";

const Navbar = () => {
    const { dataKos } = useKos();
    const [query, setQuery] = useState("");
    const [filteredKos, setFilteredKos] = useState([]);


    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim() === "") {
            setFilteredKos([]);
            return;
        }

        const results = dataKos.filter((kos) =>
            kos.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredKos(results);
    };

    return (
        <nav className="w-screen bg-white shadow-md">
            <div className="max-w-screen mx-auto px-6 py-4 flex items-center justify-between">
                <h1 className="text-2xl font-extrabold text-orange-600">BaCariKos</h1>

                {/* Kolom search */}
                <div className="flex-1 mx-6 relative">
                    <input
                        type="text"
                        value={query}
                        onChange={handleSearch}
                        placeholder="Cari kos..."
                        className="text-black w-full px-4 py-2 rounded-md focus:outline-none border border-orange-500 focus:ring-2 focus:ring-orange-400"
                    />

                    {/* Dropdown hasil pencarian */}
                    {query && (
                        <div className="absolute z-50 mt-1 w-full bg-white border border-orange-400 rounded-md shadow-lg max-h-64 overflow-auto">
                            {filteredKos.length === 0 ? (
                                <div className="px-4 py-2 text-gray-500">Kos tidak ditemukan</div>
                            ) : (
                                filteredKos.map((kos) => (
                                    <a
                                        href={`/kos/${kos.id}`}
                                        key={kos.id}
                                        className="block px-4 py-2 hover:bg-orange-100"
                                    >
                                        {kos.image_url && (
                                            <img
                                                src={kos.image_url}
                                                alt={kos.name}
                                                className="w-16 h-16 object-cover rounded"
                                            />
                                        )}
                                        <div>
                                            <h4 className="text-sm font-semibold text-black">{kos.name}</h4>
                                            <p className="text-xs text-gray-500">{kos.city}</p>
                                            <p className="text-sm text-orange-500 font-bold">
                                                Rp {kos.price.toLocaleString()}
                                            </p>
                                        </div>
                                    </a>
                                ))
                            )}
                        </div>
                    )}
                </div>

                {/* tombol login dan register */}
                <div className="space-x-3">
                    <button className="px-4 py-2 bg-black text-white rounded-md">Login</button>
                    <button className="px-4 py-2 bg-black text-white rounded-md">Register</button>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;