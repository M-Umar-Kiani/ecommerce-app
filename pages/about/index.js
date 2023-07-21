import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function about() {


  const [item, setItem] = useState([])

  useEffect(() => {
    let product = localStorage.getItem("product")
    setItem(JSON.parse(product))
  }, [])


  const removeItem = (id)=>{
    const newArr = item.filter((data , i)=>{
      return id !== i;
    });
    
    setItem(newArr)
    console.log("new arr => ", newArr)
  }


  return (
    <div className='container mt-5'>
      <h2 className='text-center'>Products</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>

          {
            item.map((key, id) => {
              return (
                <tr>
                  <th scope="row">{id + 1}</th>
                  <td>{key.title}</td>
                  <td>{key.desc}</td>
                  <td>{key.price}</td>
                  <td>
                    <a onClick={()=>{removeItem(id)}} >
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
                      </svg>
                    </a>
                    <Link href={"/edit"}>
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M 19.171875 2 C 18.448125 2 17.724375 2.275625 17.171875 2.828125 L 16 4 L 20 8 L 21.171875 6.828125 C 22.275875 5.724125 22.275875 3.933125 21.171875 2.828125 C 20.619375 2.275625 19.895625 2 19.171875 2 z M 14.5 5.5 L 3 17 L 3 21 L 7 21 L 18.5 9.5 L 14.5 5.5 z"></path>
                      </svg>
                    </Link>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
