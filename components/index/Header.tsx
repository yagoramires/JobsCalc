import { Box, Heading, Grid, GridItem, Image, Text } from "@chakra-ui/react"

export default function Header() {
    return (
        <Box as="header" bgColor="#41414C" width="100vw" pt='2rem' pb='3rem' >
            <Box as='div' width="min(1440px, 90vw)" margin='0 auto'>
                <Box as='section'  display='flex' justifyContent='space-between' alignItems='center'>
                        <Image src="/logo.svg" width='13rem' height='3rem'></Image>
                        <Box as='span' display='flex' alignItems='center' fontWeight='500' fontSize='1rem' color='#FCFDFF'>
                            <Image src='/alert-octagon.svg' alt='Alerta' mr='0.5rem' width='20px' height='20px'></Image>
                            Você tem 2 horas livres no seu dia
                        </Box>
                        <Box as='a' href="/profile" color='white' textAlign='right' display='flex' alignItems='center'>
                            <Text textDecoration='none' fontSize='1.25rem' lineHeight='1.875rem' mr='1.25rem'> Jakeliny <Box as='span' display='block' fontWeight='normal' fontSize='0.875rem' lineHeight='1.5rem' _hover={{ textDecoration: 'underline', color: '#F1972C' }}> Ver Perfil </Box>
                            </Text>
                            <Image src="https://avatars.githubusercontent.com/u/17316392?s=460&u=6912a91a70bc89745a2079fdcdad3bc3ce370f13&v=4" width="4rem" height="4rem" borderRadius="50%" border='0.156rem solid #F1972C'></Image>
                        </Box>
                </Box>
            </Box>

            <Box as='div' height='1px' my='1rem' backgroundColor='#4F4F5B' mx='auto' width='min(1440px, 90vw)'></Box>

            <Box as='section' display='flex' alignItems='center' justifyContent='space-between' mx='auto' width='min(1440px, 90vw)'>

                <Box as='div' display='flex' mb='2rem'>

                    <Box fontSize='1rem' fontWeight='500' lineHeight='1.625rem' mr='2.5rem'>
                        <Box as='strong' display='block' fontSize='1.5rem' fontWeight='700' lineHeight='1.625rem'>12</Box>
                        Projetos ao total
                    </Box>

                    <Box fontSize='1rem' fontWeight='500' lineHeight='1.625rem' mr='2.5rem'>
                        <Box as='strong' display='block' fontSize='1.5rem' fontWeight='700' lineHeight='1.625rem'>7</Box>
                        Em andamento
                    </Box>

                    <Box fontSize='1rem' fontWeight='500' lineHeight='1.625rem' mr='2.5rem'>
                        <Box as='strong' display='block' fontSize='1.5rem' fontWeight='700' lineHeight='1.625rem'>4</Box>
                        Concluídos
                    </Box>

                </Box>
                <Box as='a' href='/job' 
                padding='0.75rem 1.25rem 0.75rem 0.75rem' 
                mb='2.5rem' 
                bgColor='#F1972C' 
                borderRadius='0.313rem' 
                border='0'  
                fontSize='0.875rem'
                fontWeight='700' 
                lineHeight='1.625rem' 
                textTransform='uppercase'
                transition='all 0.2s' 
                cursor='pointer'
                display='inline-flex' 
                justifyContent='center'
                alignItems='center'
                color='#FCFDFF' 
                _hover={{backgroundColor: '#FA9C2D'}}>
                   <Box 
                   as='span'
                   width='2rem' 
                   height='2rem' 
                   mr='2rem' 
                   display='flex' 
                   justifyContent='center'  
                   alignItems='center'
                   border='0'
                   borderRadius='.313rem'
                   backgroundColor='rgba(255,255,255,0.1)'> 
                   <Image src='/plus-24.svg' width='1.5rem' height='1.5rem'/></Box> 
                   Adicionar novo job
                </Box>
            </Box>
        </Box>
    );
}