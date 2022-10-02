import React from 'react'

function MenuCard({ menuData }) {
  return (
    <div>
      <section className='main-card--cointainer'>
        {menuData.map((curEle) => {
          const { id, name, category, image,price, description } = curEle
          return (
            <div className='card-container' key={id}>
              <div className='card'>
                <div className='card-body'>
                  <span className='card-number card-circle subtle'>{id}</span>
                  <span className='card-author subtle'>{category}</span>
                  <h2 className='card-title'> {name} </h2>
                  <span className='card-description subtle'>{description}</span>
                  <div className='card-read'>Read</div>
                </div>
                <img src={image} alt='images' className='card-media' />
                <p className="card-title"> {price} </p>
                <span className='card-tag  subtle'>Order Now</span>

              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default MenuCard
