import Header from '../components/index/Header.tsx'
import Main from '../components/index/Main.tsx'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box as='body' bgColor='#F0F2F5' fontWeight='500' color='#FCFDFF' border='none'>
      <Header/>
      <Main/>
    </Box>
  )
}
