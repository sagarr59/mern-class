import React, { useEffect, useState } from 'react'
import house from '../assets/houses/h2.jpg'

const Cards = (props) => {

    const [article, setArticle] = useState([])
     console.log(article);
    const fetchData =async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${props.apiKey}`
        let data = await fetch(url)
        let parseData= await data.json()
        console.log(parseData);
        setArticle(parseData.articles)

        
       }
       useEffect (()=>{
        fetchData()
       },[])
    return (
        <div className='container'>
            <h4 className='service-heading my-3'>Our News</h4>
            <div className='row'>
                {article && article.slice(0 ,3).map((e) => {
                    console.log(e.title);
                    

                    return (  // You need to add a return statement here
                        <div className='col-md-3' key={e.source.id}>
                            <div className="card" >
                                <img src={e.urlToImage === null ? house : e.urlToImage} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{e.title}</h5>
                                    <p className="card-text">{e.source.id}</p>
                                    <a href={e.url} target='blank' className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Cards