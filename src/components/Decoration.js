import React from "react"

const images = [
  {url: '/square/1.jpg'},
  {url: '/square/2.jpg'},
  {url: '/square/3.jpg'},
  {url: '/square/4.jpg'},
  {url: '/square/5.jpg'},
  {url: '/square/6.jpg'},
  {url: '/square/7.jpg'},
  {url: '/square/8.jpg'},
  {url: '/square/9.jpg'},
  {url: '/square/10.jpg'},
  {url: '/square/11.jpg'},
  {url: '/square/12.jpg'},
  {url: '/square/13.jpg'},
  {url: '/square/14.jpg'},
  {url: '/square/15.jpg'},
  {url: '/square/16.jpg'},
]

const Decoration = () => {
  return (
    <div className="images">
      {images.map((image, i) => (
        <div key={i} className="image">
          <img src={image.url} alt="" />
        </div>
      ))}
    </div>
  )
}

export default Decoration