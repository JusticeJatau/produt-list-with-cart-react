import React from 'react'
import Card from '../Card/Card'
import './list.css'


const List = ({shoppingList, handleAddToCart, useScreenSize}) => {
  //Logic for importing all images from the assets/images folder
  const importAllImages = (requireContext) =>{
    let images = {};

    requireContext.keys().forEach((key)=>{
      const name = key.replace("./","").replace(/\.[^/.]+$/,"")
      images[name] = requireContext(key)
    })
    return images
  }

  const allImages = importAllImages(require.context("../../assets/images", false, /\.(jpg)$/))
  const screenSize = useScreenSize()

  return (
    <section className="list">
      <h1>Desserts</h1>
      <div className="list-container">
        {
          shoppingList.map((product, index)=>{
            const imageKey = `image-${((product.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")).toLowerCase()).replace(" ","-")}-${screenSize}`
            const imageSrc = allImages[imageKey]

            return(
              <Card imageSrc={imageSrc} id={index} key={index} product={product} handleAddToCart={handleAddToCart}/>
            )
          })
        }
      </div>
    </section>
  )
}

export default List