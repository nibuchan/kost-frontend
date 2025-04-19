import { useEffect, useState } from "react";

const useKos = () => {
    const [dataKos, setDataKos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://kost-backend-production.up.railway.app/api/kos")
            .then((res) => {
                if (!res.ok) throw new Error("Gagal mengambil data kos");
                return res.json();
            })
            .then((data) => {
                setDataKos(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return { dataKos, loading, error }
}

export default useKos;