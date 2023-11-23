import React, { useEffect,useState } from 'react'

const FetchData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://hp-api.onrender.com/api/characters")
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch(()=>alert("error"));
    }, [])

    console.log(data)
  return <div>
    <p>API</p>
  {(!data || data.length === 0) ? (<div>Loading</div>) : <div>名前: {data[0].name}</div>}
  {(!data || data.length === 0) ? (<div>Loading</div>) : <div>名前: {data[1].name}</div>}
  {(!data || data.length === 0) ? (<div>Loading</div>) : <div>名前: {data[2].name}</div>}
  </div>
};

export default FetchData