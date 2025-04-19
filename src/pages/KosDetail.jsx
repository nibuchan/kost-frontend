import useKos from "../hooks/useKos";
import { useParams } from "react-router-dom";

const DetailKos = () => {
    const { dataKos, loading, error } = useKos();
    const { id } = useParams();

    const kos = dataKos.find((item) => String(item.id) === id);

    if (loading) return <p className="p-6">Loading...</p>
    if (error) return <p className="p-6 text-orange-500">Terjadi kesalahan: {error.message}</p>
    if (!kos) return <p className="p-6 text-orange-500">Kos tidak ditemukan</p>

    return (
        <div className="p-6">
            <h2 className="text-4xl text-orange-500 font-bold">{kos.name}</h2>
            <p className="mt-2 text-black font-semibold">{kos.address}</p>
            <p className="mt-2 text-lg font-semibold text-gray-700">{kos.description}</p>
            <p className="mt-2 text-xl font-extrabold text-orange-500">Rp.{kos.price}</p>
        </div>
    )
}

export default DetailKos;