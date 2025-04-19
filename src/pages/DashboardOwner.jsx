// src/pages/DashboardOwner.jsx
import { useEffect, useState } from "react";

const DashboardOwner = () => {
  const [boardingHouses, setBoardingHouses] = useState([]);
  const userId = 1;

  useEffect(() => {
    const fetchKos = async () => {
      try {
        const res = await fetch(`http://localhost:5173/api/kos/owner?user_id=1`);
        const data = await res.json();
        setBoardingHouses(data);
      } catch (err) {
        console.error("Gagal mengambil data kos", err);
      }
    };

    fetchKos();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Daftar Kos Anda</h1>

      {boardingHouses.length === 0 ? (
        <p>Tidak ada kos terdaftar.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {boardingHouses.map((kos) => (
            <div key={kos.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={kos.image_base64}
                alt={kos.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 space-y-1">
                <h2 className="text-lg font-bold">{kos.name}</h2>
                <p className="text-sm text-gray-600">{kos.description}</p>
                <p className="text-sm">Alamat: {kos.address}, {kos.city}</p>
                <p className="text-sm">Harga: Rp{kos.price.toLocaleString()}</p>
                <p className="text-sm">Gender: {kos.gender}</p>
                <div className="flex gap-2 text-sm mt-2">
                  {kos.has_wifi && <span className="bg-blue-100 px-2 py-1 rounded">WiFi</span>}
                  {kos.has_ac && <span className="bg-green-100 px-2 py-1 rounded">AC</span>}
                  {kos.has_private_bathroom && <span className="bg-yellow-100 px-2 py-1 rounded">KM Dalam</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardOwner;
