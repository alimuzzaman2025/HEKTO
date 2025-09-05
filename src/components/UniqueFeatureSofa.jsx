import React from 'react'
import Container from './Container'
import UniqueSofa from "../assets/unique feature sofa.png"

const UniqueFeatureSofa = () => {
  return (
    <div className='bg-[#F1F0FF]'>
        <Container>
            <div className='flex justify-center'>
                <img src={UniqueSofa} alt="" />
            </div>
        </Container>
    </div>
  )
}

export default UniqueFeatureSofa