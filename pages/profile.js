import Header from '../components/profile/Header.tsx'
import Main from '../components/profile/Main.tsx'
import Aside from '../components/profile/Aside.tsx'
import { Box } from '@chakra-ui/react'

export default function Job() {
  return (
    <Box as='body' bgColor='#F0F2F5' fontWeight='500' color='#FCFDFF' border='none'>
      <Header/>
      <Box as='div' as='div' width='min(1440px, 90vw)' margin='0 auto' display='flex'>
      <Aside/> 
      <Main/>
      </Box>
    </Box>
  )
}