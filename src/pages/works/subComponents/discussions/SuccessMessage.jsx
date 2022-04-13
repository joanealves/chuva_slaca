import React from 'react';

import {
    SubTitle,
    Text,
    Button,
    ShareContainer
} from '../../../../styles/global.styles';

const SuccessMessage = ({ setIsForm, setIsSuccess, setIsShare }) => {
    const handleOncliCkForm = () => {
        setIsSuccess(false)
        setIsForm(true)
    }

    const handleOncliCkDiscover = () => {
        setIsShare(true)
        setIsForm(false)
        setIsSuccess(false)
    }

    return (
        <>
            <ShareContainer alignCenter="center">
                <SubTitle fSize="18px" fBold>Seu tópico foi enviado com sucesso! :D</SubTitle>
                <Text textColor="var(--graySugest)" margin="18px 0 29px">Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</Text>
                <Button
                    onClick={handleOncliCkDiscover}
                    widthDefault="235px"
                    bg="unset"
                    textColor="var(--orange)"
                    decoration
                    borderRadius="unset"
                    shadow="unset"
                >
                    Descubra outros trabalhos!
                </Button>

            </ShareContainer>
            <Button
                onClick={handleOncliCkForm}
                widthDefault="235px"
            >
                criar novo tópico
            </Button>
        </>
    );
}

export default SuccessMessage;
