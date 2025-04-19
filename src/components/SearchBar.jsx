import React, { useState, useEffect } from 'react';
import SearchDropdown from './SearchDropdown';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }

        // Ganti URL sesuai backend kamu
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/kos?search=${query}`);
                const data = await response.json();
                setResults(data);
            } catch (error) {
                console.error('Error fetching:', error);
            }
        };

        fetchData();
    }, [query]);

    return (
        <div className="relative w-full max-w-xl mx-auto">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari kos..."
                className="w-full px-4 py-2 border border-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            {query && results.length > 0 && (
                <SearchDropdown results={results} />
            )}
        </div>
    );
};

export default SearchBar;
