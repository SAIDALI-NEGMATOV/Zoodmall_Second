import React from 'react'
import { Box } from '@mui/material'
import { Swiper } from './Swiper/Swiper'


export const Components = ({dataAfish}) => {
  return (
    <Box>
      <Swiper dataAfish={dataAfish}/>
    </Box>
  )
}
