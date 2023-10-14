import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  constructor(){
    super();
    this.state = {
      articles : []
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=fe44b8131d8f4c56bc264c78f21f4fbc";
    let data =  await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : parsedData.articles});
  }
  render() {
    return (
      <div className="container">
        <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
        <div className='d-flex align-content-around flex-wrap my-4 justify-content-evenly'>
          {this.state.articles.map((element)=>{
            return <div key = {element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>
      </div>
    )
  }
}
