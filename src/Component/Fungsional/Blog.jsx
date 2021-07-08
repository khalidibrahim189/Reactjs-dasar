import React from 'react'
import './CSS/Blog.css'

const Blog = (props) => {
    return (
        <div className="blog-wrap">
            <img src="https://placeimg.com/640/480/tech" alt="" className="img-fluid" />
            <p>{props.tanggal}</p>
            <h6><b>{props.judul}</b></h6>
            <p>{props.summary}</p>
        </div>
    )
}

export default Blog
