import React, { useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
    const [city, setCity] = useState('');
    const [listings, setListings] = useState<any[]>([]);

    const handleSearch = async () => {
        try {
            const response = await axios.post('http://localhost:3001/scrape', { city });
            setListings(response.data.listings);
        } catch (error) {
            console.error('Error searching for listings:', error);
        }
    };

    return (
        <div>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {listings.map((listing, index) => (
                    <li key={index}>
                        {/* Display listing information */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;