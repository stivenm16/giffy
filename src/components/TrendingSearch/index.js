import React, { useEffect, useState } from 'react'
import getTrendingTerms from '../../services/getTrendingTermsService'
import Category from '../Category'

function TrendingSearch() {
    const [trends, setTrends] = useState([])

    useEffect(function () {
        getTrendingTerms().then(setTrends)
    })

  
  return (
    <div>
        <Category options={trends}/>

    </div>
  )
}

export default TrendingSearch
