import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'

import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home(props) {
  let [articles, setArticles] = useState([])
  let [totalResults, setTotalResults] = useState(0)
  let [page, setPage] = useState(1)
  async function getApiData() {
    var response
    setPage(1)
    if (props.search)
      response = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&pageSize=12&page=${page}&sortBy=publishedAt&language=${props.language}&apiKey=479efacdd4524b928b064b37c6dc8825`)
    else
      response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&pageSize=12&page=${page}&sortBy=publishedAt&language=${props.language}&apiKey=479efacdd4524b928b064b37c6dc8825`)
    response = await response.json()
    setArticles(response.articles.filter((x) => x.title !== "[Removed]"))
    setTotalResults(response.totalResults)
  }
  let fetchData = async () => {
    setPage(page + 1)
    let response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&pageSize=12&page=${page}&sortBy=publishedAt&language=${props.language}&apiKey=479efacdd4524b928b064b37c6dc8825`)
    response = await response.json()
    if (response.articles) {
      setArticles(articles.concat(response.articles.filter((x) => x.title !== "[Removed]")))
    }
  }
  useEffect(() => {
    getApiData()
  },[props])
  return (
    <>
      <h5 className='bg-primary text-light text-center p-2 my-1 text-capitalize'>{props.search ? props.search : props.q} News Articles</h5>
      <div className="container">
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchData}
          hasMore={articles.length < totalResults}
          loader={
            <div className='w-100 text-center' style={{ height: "100px" }}>
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }>
          <div className="row">
            {articles.map((item, index) => {
              return <NewsItem
                key={index}
                pic={item.urlToImage}
                title={item.title}
                description={item.description}
                url={item.url}
                date={item.publishedAt}
                source={item.source.name}
              />
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  )
}
