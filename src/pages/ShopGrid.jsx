import React, { useContext } from 'react'
import GridDefault from '../components/GridDefault'
import Container from '../components/Container'
import Post from '../components/Post'
import { MdGridView } from 'react-icons/md'
import { FaListOl } from 'react-icons/fa'
import { ApiData } from '../components/ContextApi'

const ShopGrid = () => {
  let info = useContext(ApiData)
  
  return (
    <>
      <GridDefault />
      <div>
        <Container>
          <div className='py-20'>
            <div className='flex justify-between items-center'>
              <div className='w-2/5'>
                <h2 className='font-josefin font-bold text-[16px] text-[#262626]'>Ecommerce Acceories & Fashion item </h2>
                <p className='font-josefin font-normal text-[14px] text-[#807272]'>About 9,620 results (0.62 seconds)</p>
              </div>
              <div className='flex justify-end w-3/5'>
              <div className='w-[33%]'>
                <label htmlFor="" className='pr-2 text-[#3F509E]'> Per Page: </label>
                  <select name="" id="" className='py-1 px-12 border-1 border-[#787171]'>
                    <option value="">10</option>
                    <option value="">10</option>
                    <option value="">10</option>
                    <option value="">10</option>
                    <option value="">10</option>
                    <option value="">10</option>
                  </select>
              </div>
              
              <div className='w-[33%]'>


                <label htmlFor="" className='pr-2 text-[#3F509E]'> Short By: </label>
                  <select name="" id="" className='py-1 px-12 border-1 border-[#787171]'>
                    <option value="">10</option>
                    <option value="">10</option>
                    <option value="">10</option>
                    <option value="">10</option>
                    <option value="">10</option>
                    <option value="">10</option>
                  </select>

              </div>
              <div className='w-[33%] flex items-center'>
                <label htmlFor="" className='pr-2 text-[#3F509E] font-normal text-[16px] font-josefin'> View: </label>
                <div className='flex gap-1 pr-3 text-[#151875]'>
                  <MdGridView />
                  <FaListOl />
                </div>
                  <select name="" id="" className='py-1 px-12 border-1 border-[#787171]'>
                    <option value="">10</option>
                    <option value="">10</option>
                    <option value="">10</option>
                    <option value="">10</option>
                    <option value="">10</option>
                    <option value="">10</option>
                  </select>
              </div>
              </div>
            </div>
          </div>
              <Post info={info}/>
        </Container>
      </div>
    </>
  )
}

export default ShopGrid
              
               
