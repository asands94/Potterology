import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import { OWL_URL, headers } from "../services/index.js"
import OwlPostImg from "./OwlPost.jpg"


export default function OwlPost() {

  const [data, setData] = useState([])


  useEffect(() => {
    const getSearch = async () => {
      const searchURL = `${OWL_URL}`
      const res = await axios.get(searchURL, { headers })
      setData(res.data.records)

    }
    getSearch()
  }, [])

  return (
    <>
      <img className="main-images main-bg" src={OwlPostImg} alt="Owl Post" />
      <div className="post-container">
        {data.map((results) => {
          return (
            <Link className="post-color" to={`/new-owl-post/${results.id}`} key={results.id}>
              <p>{results.fields?.name}</p>
            </Link>
          )
        })}
      </div>
    </>
  )
}


