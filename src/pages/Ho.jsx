import { useEffect, useState } from "react";

export default function Ho() {
  const [kosList, setKosList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchKos();
  }, []);

  const fetchKos = async (query = "") => {
    const res = await fetch(`http://localhost:3000/api/kos?search=${query}`);
    const data = await res.json();
    setKosList(data);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchKos(search);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-black p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-orange-500">Daftar Kos</h1>

      <form onSubmit={handleSearch} className="mb-6 flex gap-2">
        <input
          type="text"
          className="border border-gray-300 px-3 py-2 flex-1 bg-white rounded text-black"
          placeholder="Cari kos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
        >
          Cari
        </button>
      </form>

      {kosList.length === 0 ? (
        <p className="text-gray-600">Tidak ada kos ditemukan.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {kosList.map((kos) => (
            <div
              key={kos.id}
              className="bg-white border border-gray-200 rounded p-4 shadow-sm hover:shadow-md transition"
            >
              {kos.image_url && (
                <img
                  src={kos.image_url}
                  alt={kos.name}
                  className="w-full h-40 object-cover rounded mb-3"
                />
              )}
              <h2 className="text-lg font-semibold text-black">{kos.name}</h2>
              <p className="text-sm text-gray-600">{kos.city}</p>
              <p className="text-orange-500 font-bold mt-1">
                Rp {kos.price.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">
                {kos.gender === "campur"
                  ? "Campur"
                  : kos.gender === "pria"
                  ? "Khusus Pria"
                  : "Khusus Wanita"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
