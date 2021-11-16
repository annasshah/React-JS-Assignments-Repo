import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

// import objects data array from data.js
import cardData from './data';


function App() {

  // Unique Categories
  let uniqueCategories = [...new Map(cardData.map((item) => [item['category'], item])).values()]


  const [cards, setCards] = useState(cardData)
  const [category, setCategory] = useState(cardData)
  const [proType, setTypes] = useState([''])


  // Search input 
  let updateSearch = (e) => {
    let a = e.target.value

    if (a.length === 0) {
      setCards(category)
    }
    else {
      let arr = cards.filter((x) => {
        return x.title.toLowerCase().slice(0, a.length) === a.toLowerCase()
      })
      setCards(arr)
    }
  }


  // Product Categories onChange Function 
  let categorySection = (e) => {
    let val = e.target.value
    if (val === 'All Categories') {
      setCards(cardData)
      setTypes([''])
    }
    else {
      let newArr = cardData.filter(x => x.category === val)
      setCards(newArr)
      setCategory(newArr)
      setTypes([...new Map(newArr.map((item) => [item['type'], item])).values()])
    }
  }


  // Product Type onChange Function 
  let typesSection = (e) => {
    let val = e.target.value

    if (val === 'All Types') {
      setCards(category)
    }
    else {
      setCards(category.filter(x => x.type === val))
    }
  }

  return (

    <>

      <div className="bg-dark py-3 text-center mb-4 ">
        <h2 className="text-white text-uppercase" >Shipping Cards</h2>
      </div>

      <div className='text-start container'>

        {/* Product Categories Section  */}
        <select name="" id="" className='px-3 py-2 rounded-2 mx-3 my-3' onChange={(e) => categorySection(e)}>
          <option value="All Categories">All Categories</option>
          {
            uniqueCategories.map((x, index) => {
              return <option key={index} value={x.category}>{x.category}</option>
            })
          }
        </select>


        {/* Product Type Section  */}
        <select name="" id="" className='px-2 py-2 rounded-2 mx-3 my-3' onChange={(e) => typesSection(e)}>
          <option value="All Types">All Types</option>
          {
            proType.map((x, index) => {
              return <option key={index} value={x.type}>{x.type}</option>
            })
          }
        </select>

        {/* Search Input  */}
        <input type="text" placeholder={'Type here to search'} className='px-3 py-2 mx-3 my-3' onChange={(e) => updateSearch(e)} />
      </div>

      {/* Product Cards Container  */}
      <div className="container-md container-lg container-xl container-fluid">
        <div className="d-flex justify-content-md-start justify-content-lg-start justify-content-sm-center justify-content-center flex-wrap">
          {
            cards.map((data, index) => {

              // Render product card using Card Component 
              return <Card key={index} src={data.imgLink} title={data.title} price={new Intl.NumberFormat().format(data.price)} description={data.description.slice(0, 48) + '...'} status={data.status} category={data.category.toLowerCase()} type={data.type.toLowerCase()} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default App;
