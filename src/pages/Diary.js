import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Diary(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    useEffect(()=>{
        const fetchData = async ()=> {
            try {
                const response = await axios.get('http://3.39.126.121:3000/diary');
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
    return(
        <div className='content-wrap'>
            <h1 className='page-title'>Diary</h1>
            <hr style={{border: 'none', height: '2px', backgroundColor: 'gray', width:'13rem', marginTop:"0.5rem"}}/>
            <p className='page-content'>영농일지입니다.</p>

            <button className="std-btn"
                onClick={() => navigate("/diary/new")}  // 버튼 클릭 시 글 작성 페이지로 이동
            >
                글쓰기
            </button>

            <div className="post-list-container">
                <div className="post-list-row post-frame">
                    <div className="post-id">번호</div>
                    <div className="post-title">제목</div>
                    <div className="post-author">글쓴이</div>
                    <div className="post-create-date">작성일자</div> 
                </div>

                {data.map((item, index) => {
                    const formattedDate = new Date(item.create_date).toLocaleDateString("en-CA");
                    return(
                        <div>
                            <div className="post-list-row" key={index}>
                                <div className="post-id">{item.post_id}</div>
                                <div className="post-title" onClick={()=>navigate(`/diary/${item.post_id}`)}>{item.post_title}</div>
                                <div className="post-author">{item.author}</div>
                                <div className="post-create-date">{formattedDate}</div>  
                            </div>
                            <hr></hr>
                        </div>
                    );

                })}
            </div>

        </div>
    )
}


export default Diary;
