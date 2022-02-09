import React from 'react'
import weath from './Assests/weth.png'
import './CollectionCard.css'

const CollectionCard = ({data,getData}) => {
   
    return (
        <div  className='collectionCard' onClick={()=>{getData(data.id)}}>
            <img src={data.img} alt="" />
            <div className='details'>
                <div className='name'>
                    #{data.name} <div className='id'> .#{data.id}</div>
                </div>
                <div className='priceContainer'>
                    <img className='wethImage' src={weath} alt="" />
                    <div className='price'> {data.price} </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
          