import { useState } from "react";
import useKos from "../hooks/useKos";
import KosCard from "../components/KosCard";
import Navbar from "../components/Navbar";

const Home = () => {
    const { dataKos, loading } = useKos();
    const [query, setQuery] = useState("");

    const filteredKos = dataKos.filter((kos) =>
        kos.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <Navbar query={query} setQuery={setQuery} results={filteredKos} />

            <div className="p-6">
                {loading ? (
                    <p className="text-center text-gray-500">Loading...</p>
                ) : filteredKos.length === 0 ? (
                    <p className="text-center text-gray-500">Tidak ada kos yang cocok.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {filteredKos.map((kos) => (
                            <KosCard key={kos.id} kos={kos} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
