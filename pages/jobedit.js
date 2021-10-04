import Header from '../components/jobedit/Header.tsx'
import Main from '../components/jobedit/Main.tsx'
import Aside from '../components/jobedit/Aside.tsx'
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