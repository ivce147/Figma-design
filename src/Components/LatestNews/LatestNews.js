import React from 'react'
import {useNews} from "../../Hooks/useNews"

function LatestNews() {
    const {news} = useNews();
  return (
    <div>
    <h1>Latest news</h1>
    <div> {news.map(newsItem => {
      return <div key={newsItem.id}>{newsItem.title}</div>
    })}</div>
    </div>
  )
}

export default LatestNews