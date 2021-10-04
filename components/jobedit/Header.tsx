import { Box, Heading, Grid, GridItem, Image, Text } from "@chakra-ui/react"

export default function Header() {
    return (
        <Box as="header" bgColor="#41414C" width="100vw" pt='2rem' pb='3rem' height='5.5rem' mb='4rem'>
            <Box as='div'   width='min(1440px, 90vw)' margin='0 auto'>
                <Grid gridTemplateColumns='10% 80% 10%' alignItems='center'>                    
                    <GridItem colSpan={1} >
                    <Box as='a' href='/'>
                        <Image src="/back.svg" alt="voltar"/>
                    </Box>
                    </GridItem>
                    <GridItem colSpan={1} display='flex' justifyContent='center'>
                    <Heading margin='0 auto' fontWeight='600' fontSize='1rem' lineHeight='1.625rem' color='#BFBFCC'>
                        Editar Job
                    </Heading>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Box as='p'></Box>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    );
}