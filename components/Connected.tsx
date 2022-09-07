import { FC, MouseEventHandler, useCallback} from 'react';
import { HStack, Spacer, Button, Container, Heading, VStack, Text,  HTMLButtonElement, Image } from '@chakra-ui/react';

const Connected: FC = () => {

    return (
        <VStack
            spacing={20}
        >
            <Container>
                <VStack
                    spacing={8}
                >
                    <Heading
                        color='white'
                        size='2xl'
                        noOfLines={1}
                        textAlign='center'
                    >
                        WELCOM DOOD!
                    </Heading>
                    <Text
                        color='white'
                        size='xl'
                        noOfLines={1}
                        textAlign='center'
                    >
                        Each buildoor is ranomly generated and can be staked to receive
                        <Text
                            as='b'
                            color='accent'
                        > $BLD</Text> Use it to upgrade your buildoor and receive perks for upgrades.
                    </Text>
                </VStack>
            </Container>
            <HStack
                spacing={10}
            >
                <Image src='/avatar1.png' alt='avatar1' />
                <Image src='/avatar2.png' alt='avatar2' />
                <Image src='/avatar3.png' alt='avatar3' />
                <Image src='/avatar4.png' alt='avatar4' />
                <Image src='/avatar5.png' alt='avatar5' />
            </HStack>

            <Button
                bgColor='accent'
                color='white'
                maxWidth='380px'

            >
                    <Text>Mint Buildoor</Text>
            </Button>

                    

        </VStack>
    
    )
}

export default Connected;