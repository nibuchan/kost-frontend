import { useState } from "react";

const TambahKos = () => {
    const [form, setForm] = useState({
        name: "",
        description: "",
        address: "",
        city: "",
        price: "",
        gender: "campur",
        has_wifi: false,
        has_ac: false,
        has_private_bathroom: false,
        latitude: "",
        longitude: "",
        image_url: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleImage = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...form,
            user_id: 1
        };

        const formData = new FormData();
        formData.append("name", name);
        formData.append("city", city);
        formData.append("price", price);
        formData.append("gender", gender);
        formData.append("address", address);
        formData.append("description", description);
        formData.append("image", image);

        const res = await fetch("https://kost-backend-production.up.railway.app/api/kos", {
            method: "POST",
            body: formData
        });

        
        const data = await res.json();
        console.log(data);
    };

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8 mt-10">
            <h1 className="text-2xl font-bold text-center mb-6 text-orange-600">Tambah Kos</h1>
            <form onSubmit={handleSubmit} className="space-y-4 text-black">

                {/* Nama dan Deskripsi */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium">Nama Kos</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required
                            className="w-full mt-1 p-2 border rounded-md text-black" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Deskripsi</label>
                        <input type="text" name="description" value={form.description} onChange={handleChange} required
                            className="w-full mt-1 p-2 border rounded-md text-black" />
                    </div>
                </div>

                {/* Kota dan Alamat */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium">Kota</label>
                        <input type="text" name="city" value={form.city} onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded-md text-black" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Alamat</label>
                        <input type="text" name="address" value={form.address} onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded-md text-black" />
                    </div>
                </div>

                {/* Harga dan Gender */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium">Harga</label>
                        <input type="number" name="price" value={form.price} onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded-md text-black" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Jenis Kelamin</label>
                        <select name="gender" value={form.gender} onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded-md text-black">
                            <option value="campur">Campur</option>
                            <option value="pria">Pria</option>
                            <option value="wanita">Wanita</option>
                        </select>
                    </div>
                </div>

                {/* Fasilitas */}
                <div className="space-x-4">
                    <label className="text-sm font-medium">Fasilitas:</label>
                    <label><input type="checkbox" name="has_wifi" checked={form.has_wifi} onChange={handleChange} className="mr-1" />WiFi</label>
                    <label><input type="checkbox" name="has_ac" checked={form.has_ac} onChange={handleChange} className="mr-1" />AC</label>
                    <label><input type="checkbox" name="has_private_bathroom" checked={form.has_private_bathroom} onChange={handleChange} className="mr-1" />Kamar Mandi Dalam</label>
                </div>

                {/* Lokasi */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium">Latitude</label>
                        <input type="text" name="latitude" value={form.latitude} onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded-md text-black" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Longitude</label>
                        <input type="text" name="longitude" value={form.longitude} onChange={handleChange}
                            className="w-full mt-1 p-2 border rounded-md text-black" />
                    </div>
                </div>

                {/* Upload Gambar */}
                <div>
                    <label className="block text-sm font-medium">Upload Gambar</label>
                    <input type="file" accept="image/*" onChange={handleImage}
                        className="mt-1 text-sm" />
                </div>

                <div className="text-center">
                    <button type="submit" className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800">
                        Simpan
                    </button>
                </div>
            </form>
        </div>

    );
};

export default TambahKos;