import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [arrItem, setArrItem] = useState([]);
  const [item, setItem] = useState({
    title: "",
    desc: "",
    price: "",
  })

  const onChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value })
    console.log(item)
  }

  let { title, desc, price } = item;
  const addItem = () => {
    setArrItem([...arrItem, { title, desc, price }]);

    localStorage.setItem("product", JSON.stringify(arrItem))
    // setArrItem({ title: "", desc: "", price: "" })
  }








  return (
    <>
    {
          console.log("check array ", arrItem)
    }
      <div className='container'>
        <div className='container p-5 '>
          <h2>Add Your Item</h2>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input type="text" name='title' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Item title" value={item.title}
              onChange={onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Description</label>
            <input type="text" name='desc' className="form-control" id="exampleInputPassword1" placeholder="Item Description" value={item.desc}
              onChange={onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Price</label>
            <input type="text" name='price' className="form-control" id="exampleInputPassword1" placeholder="Item Price" value={item.price}
              onChange={onChange} />
          </div>
          <button type="submit" className="btn btn-primary mt-2" onClick={addItem}>
            Submit</button>
        </div>
      </div>
    </>
  )
}
