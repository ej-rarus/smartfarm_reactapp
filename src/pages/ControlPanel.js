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
                    <div>{item.id}</div>
                    <h1>{item.test_name}</h1>
                    <p>{item.test_date}</p>
                </div>
            ))}
            </div>
        </div>
    );
}

export default ControlPanel;


