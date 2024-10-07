import '../App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function ControlPanel () {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=> {
            try {
                const response = await axios.get('http://3.39.126.121:3000/users');
                setData(response.data);
                setLoading(false);
            } catch(err) {
                setError(err.message);
                setLoading(false);
            }

        };

        fetchData();

    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="content-wrap">
            <div className='page-content'>{data.map((item, index) => (
                <div key={index}>
                    <h1>{item.id}</h1>
                    <h1>{item.test_name}</h1>
                    <h1>{item.test_date}</h1>

                </div>
            ))}
            </div>
        </div>
    );
}

export default ControlPanel;


