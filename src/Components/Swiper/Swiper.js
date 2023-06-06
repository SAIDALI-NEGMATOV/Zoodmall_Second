import { Box } from '@mui/material'
import React from 'react'

export const Swiper = ({dataAfish}) => {
  return (
    <Box>
        {dataAfish.map((item,index)=>(

        <img key={index} src={item.Img} alt="" />
        ))}
    </Box>
  )
}
