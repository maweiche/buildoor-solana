import { FC, MouseEventHandler, useCallback} from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useWallet }    from '@solana/wallet-adapter-react';
import { HStack, Spacer, Button, Container, Heading, VStack, Text,  HTMLButtonElement } from '@chakra-ui/react';

const Disconnected: FC = () => {

    const modalState = useWalletModal();
    const { wallet , connect }  = useWallet();

   

    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
        (event) => {
            if(event.defaultPrevented) return
        },
        []
    )


    return (
        <Container >
            <VStack 
                spacing={20}
            >
                <Heading 
                    colors='white'  
                    size='3xl' 
                    noOfLines={2} 
                    textAlign='center'
                >
                    Mint your Buildoor. Earn $BUILD. Level UP!
                </Heading>
                <Button
                    bgColor='accent'
                    color='white'
                    maxWidth='380px'
                    onClick={handleClick}
                >
                    <HStack spacing={4}>
                        <Text>become an IKON</Text>
                        <ArrowForwardIcon />
                    </HStack>
                </Button>
            </VStack>
        </Container>
    
    )
}

export default Disconnected;