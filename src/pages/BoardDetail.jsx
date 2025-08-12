import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const BoardDetail = () => {
    const { id } = useParams()
    return (
        <section>
            <h1>게시글 상세</h1>
            <p>현재 글 ID :{id}</p>
            <button onClick={() => nav(-1)}>뒤로가기</button>
            <button onClick={() => nav('/ㄹㅎ')}>홈으로 가기</button>
        </section>
    )
}

export default BoardDetail