import { Box , Grid , GridItem , Text , Image } from "@chakra-ui/react"

export default function Main() {
    return (
        
        <Box as='main' mt='-2.825rem'>
            <Box as='section' width='min(1440px, 90vw)' margin='0 auto'>
                <Box as='div' 
                    alignItems='center'
                    mb='0.5rem'
                    position='relative'
                    transition='all 0.2s'
                    backgroundColor='#FCFDFF'
                    borderRadius='.313rem'
                    border='1px solid #E1E3E6'
                    color='#5A5A66'
                    textAlign='left'
                    padding='1.5rem'
                    _hover={{background: "linear-gradient(90deg, rgba(250, 156, 45, 0.1) 0.45%, rgba(252, 253, 255, 0.1) 31.4%), #FCFDFF"}}>
                    <Grid gridTemplateColumns="5% 35% 20% 15% 15% 10%" alignItems='center'>
                        <GridItem colSpan={1} >
                            <Text fontWeight="600" color='#BFBFCC'>1</Text>
                        </GridItem>
                        <GridItem colSpan={1} >
                            <Text 
                            fontWeight="600" 
                            fontSize='1.5rem' 
                            lineHeight='2.125rem' 
                            color='#5A5A66'
                            >Pizzeria Mamma Jebba</Text>
                        </GridItem>
                        <GridItem colSpan={1} > 
                            <Box 
                            as='span' 
                            display="block"
                            fontWeight="600" 
                            fontSize="0.75rem" 
                            textTransform='uppercase'
                            color='#BFBFCC'
                            >Prazo</Box> 
                            <Text fontWeight="600" color='#5A5A66'> 7 dias para a entrega </Text>
                        </GridItem>
                        <GridItem colSpan={1} > 
                            <Box 
                            as='span' 
                            display="block" 
                            fontWeight="600" 
                            fontSize="0.75rem" 
                            textTransform='uppercase'
                            color='#BFBFCC'
                            >Valor</Box> 
                            <Text fontWeight="600" color='#5A5A66'> R$ 4.500,00 </Text>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Box as='div' display='flex' alignItems='center' justifyContent='center' width='fit-content' borderRadius='2.5rem' padding='0.5rem 1.5rem' fontWeight='500' fontSize='0.875rem' lineHeight='1.625rem' bgColor='#E8F8E8'>
                            <Text color='#36B336'>Em andamento </Text>
                            </Box>
                        </GridItem>
                        <GridItem colSpan={1} display='flex' justifySelf='flex-end'>
                            <Box as='a'
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            width='2rem' 
                            height='2rem'
                            border='1px solid #E1E3E6'
                            borderRadius='.313rem'
                            cursor='pointer'
                            backgroundColor='FCFDFF'
                            mr='6px'
                            _hover={{background: '#F0F2F5'}}
                            ><Image src='/edit-24.svg'></Image></Box>
                            <Box as='button' 
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            width='2rem' 
                            height='2rem'
                            border='1px solid #E1E3E6'
                            borderRadius='.313rem'
                            cursor='pointer'
                            backgroundColor='FCFDFF'
                            _hover={{background: '#F0F2F5'}}
                            ><Image src='/trash-24.svg'></Image></Box>
                        </GridItem>
                    </Grid>
                </Box>
            </Box>
        </Box>

    );
}