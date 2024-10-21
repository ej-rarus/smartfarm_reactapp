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

    if (loading) return <p>{data}Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="content-wrap">
            <h1 className='page-title'>제어패널</h1>
            <hr style={{border: 'none', height: '2px', backgroundColor: 'gray', width:'13rem', marginTop:"0.5rem"}}/>
            <div id='control-panel'>
                <div className=''></div>

            </div>
        </div>
    );
}

export default ControlPanel;


