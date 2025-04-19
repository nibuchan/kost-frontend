import { useNavigate } from "react-router-dom";

const KosCard = ({ kos }) => {
    const navigate = useNavigate();

    return (
        <div 
            onClick={() => navigate(`/kos/${kos.id}`)}
            className="cursor-pointer bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
        >
            {kos.image_url && (
                <img
                    src={kos.image_url}
                    alt={kos.name}
                    className="w-full h-40 object-cover rounded mb-3"
                />
            )}
            <h2 className="text-lg font-semibold text-black">{kos.name}</h2>
            <p className="text-sm text-gray-600">{kos.city || kos.address}</p>

            <p className="text-orange-500 font-bold mt-1">
                Rp {kos.price?.toLocaleString() || 'N/A'}
            </p>

            <p className="text-sm text-gray-500 capitalize">
                {kos.gender === "campur"
                    ? "Campur"
                    : kos.gender === "pria"
                    ? "Khusus Pria"
                    : kos.gender === "wanita"
                    ? "Khusus Wanita"
                    : "Tidak Diketahui"}
            </p>
        </div>
    );
};

export default KosCard;
