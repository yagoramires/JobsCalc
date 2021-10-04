import { Box , Grid , Image , Text , Input , NumberInput} from "@chakra-ui/react"

export default function Main() {
    return (
        
        <Box as='main'>
            <Box as='div'>
                <Box as='form'>
                    <Box as='fieldset' border='none' mt='3.5rem'>

                        <Text color='#5A5A66' fontWeight='600' fontSize='2rem' lineHeight='2.625rem'> Dados do Job </Text>

                        <Box as='div' height='1px' margin='1rem 0 2rem' backgroundColor='#E1E3E5'></Box>

                        <Box as='div'>
                            <Box as='label' display='inline-block' fontWeight='500' color='#787880'> Nome do Job </Box>
                            <Input type="text" fontWeight='500' backgroundColor='#FCFDFF' border='1px solid #E1E3E6' borderRadius='0.313rem' padding='0.75rem 1.5rem' width='100%' color='#5A5A66' value='Pizzeria Mamma Jebba'></Input>
                        </Box>
                        
                        <Box as='div' display='flex' mt='1.5rem'>
                            <Box as='div'>
                                <Box as='label' display='inline-block' fontWeight='500' color='#787880'> Quantas horas <br/>
                                por dia vai dedicar ao job? </Box>
                                <Box as='input' type='number' step='0.5' min='0' max='24' name='daily-hours' fontWeight='500' backgroundColor='#FCFDFF' border='1px solid #E1E3E6' borderRadius='0.313rem' padding='0.5rem 1.5rem' width='100%' color='#5A5A66' mt='1rem' value='2'></Box>
                            </Box>

                            <Box as='div' ml='1.5rem'>
                                <Box as='label' display='inline-block' fontWeight='500' color='#787880'> Estimativa de <br/>
                                horas para esse Job? </Box>
                                <Box as='input' type='number' step='1' min='0' fontWeight='500' backgroundColor='#FCFDFF' border='1px solid #E1E3E6' borderRadius='0.313rem' padding='0.5rem 1.5rem' width='100%' color='#5A5A66' mt='1rem' value ='14'></Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>

    );
}