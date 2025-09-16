import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'

const GridDefault = () => {
  return (
    <div className='bg-[#F6F5FF]'>
        <Container>
            <div className='py-[96px]'>
                <h2  className='font-josefin font-bold text-[36px] text-[#262626] pb-2'>Shop Grid Default</h2>
                <p className='font-lato font-normal text-[16px] text-[#262626]'><Link to="/">Home</Link> . <Link>Pages</Link> . <Link className="text-[red]" to="/ShopGrid">Shop Grid Default</Link></p>
            </div>
        </Container>
    </div>
  )
}

export default GridDefault