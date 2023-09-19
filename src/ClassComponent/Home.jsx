import React, { Component } from 'react'
import NewsItem from './NewsItem'

import InfiniteScroll from 'react-infinite-scroll-component';

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      totalResults: 0,
      page: 1
    }
  }
  async getApiData() {
    var response
    this.setState({ page: 1 })
    if (this.props.search)
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&pageSize=12&page=${this.state.page}&sortBy=publishedAt&language=${this.props.language}&apiKey=479efacdd4524b928b064b37c6dc8825`)
    else
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&pageSize=12&page=${this.state.page}&sortBy=publishedAt&language=${this.props.language}&apiKey=479efacdd4524b928b064b37c6dc8825`)
    response = await response.json()
    this.setState({
      articles: response.articles.filter((x) => x.title !== "[Removed]"),
      totalResults: response.totalResults
    })
  }
  fetchData = async () => {
    this.setState({ page: this.state.page + 1 })
    let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&pageSize=12&page=${this.state.page}&sortBy=publishedAt&language=${this.props.language}&apiKey=479efacdd4524b928b064b37c6dc8825`)
    response = await response.json()
    if (response.articles) {
      this.setState({
        articles: this.state.articles.concat(response.articles.filter((x) => x.title !== "[Removed]"))
      })
    }
  }
  componentDidMount() {
    this.getApiData()
  }
  componentDidUpdate(old) {
    if (this.props !== old)
      this.getApiData()
  }
  render() {
    return (
      <>
        <h5 className='bg-danger text-light text-center p-4 my-1 text-capitalize'>{this.props.search ? this.props.search : this.props.q} News Articles</h5>
        <div className="container">
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchData}
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={
              <div className='w-100 text-center' style={{ height: "100px" }}>
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            }>
            <div className="row">
              {this.state.articles.map((item, index) => {
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
}
