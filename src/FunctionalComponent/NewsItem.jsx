import React from 'react'
export default function NewsItem(props) {
    function getDate(date) {
        return `${new Date(date).getDate()}/${new Date(date).getMonth()}/${new Date(date).getFullYear()}`
    }
    return (
        <>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="card">
                    <img src={props.pic ? props.pic : "/images/noimage.png"} height="150px" width="100%" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title && props.title.slice(0, 60) + "..."}</h5>
                        <div className='d-flex justify-content-between'>
                            <p className='source'>{props.source}</p>
                            <p className='source'>{getDate(props.date)}</p>
                        </div>
                        <hr />
                        <p className="card-text">{props.description && props.description.slice(0, 250) + "..."}</p>
                        <a href={props.url} target='_blank' rel="noreferrer" className="btn btn-primary btn-sm w-100">Read Full Article</a>
                    </div>
                </div>
            </div>
        </>
    )
}
