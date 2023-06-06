import React from 'react'
import { Box } from '@mui/material'
import { Sviper } from './Swiper/Sviper'
import { Menyu } from './Menyu/Menyu'
import { Product } from './Product/Product'



export const Components = ({dataAfish,dataProduct}) => {
  return (
    <Box>
      <Sviper dataAfish={dataAfish}/>
      <Menyu/>
      <Product dataProduct={dataProduct}/>
    </Box>
  )
}
