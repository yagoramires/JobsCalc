import Header from '../components/job/Header.tsx'
import Main from '../components/job/Main.tsx'
import Aside from '../components/job/Aside.tsx'
import { Box } from '@chakra-ui/react'

export default function Job() {
  return (
    <Box as='body' bgColor='#F0F2F5' fontWeight='500' color='#FCFDFF' border='none'>
      <Header/>
      <Box as='div' as='div' width='min(1440px, 90vw)' margin='0 auto' display='flex'>
      <Main/>
      <Aside/> 
      </Box>
    </Box>
  )
}