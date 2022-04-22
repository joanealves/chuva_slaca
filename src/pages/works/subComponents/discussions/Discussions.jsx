import React, { useState } from 'react';

import crescimento from '../../../../assets/mao.svg';
import dialogo from '../../../../assets/dialogo.svg';
import ideia from '../../../../assets/ideia.svg';
import MaisIcon from '../../../../assets/icons/MaisIcon';

import { TextTitle, TitletWrapper, SubTitle, Text, WrapperContent } from '../../../../styles/global.styles';

import * as S from './Discussions.styles'
import Cards from './Cards';
import DiscussionsForm from './DiscussionsForm';
import SuccessMessage from './SuccessMessage';

const Discussions = () => {
    const [isForm, setIsForm] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isShare, setIsShare] = useState(false)
    const [newCards, setNewCards] = useState([])

    return (
        <S.DiscussionsContainer>
            <TitletWrapper>
                <TextTitle>Discussões</TextTitle>
            </TitletWrapper>
            <WrapperContent>
                {!isForm && (
                    <>
                        <S.ShareContainer>
                            <SubTitle fSize="18px" lineHeight="21px" roboto>Compartilhe suas ideias ou dúvidas com os autores!</SubTitle>
                            <S.DiscussionsImg>
                                <img src={crescimento} alt="Foto Mão segurando uma planta" width="50px" />
                                <img src={dialogo} alt="Foto Caixa de diálogo" width="50px" />
                                <img src={ideia} alt="Foto Pessoas tendo uma idéia ou insigth" width="50px" />
                            </S.DiscussionsImg>
                            <Text lineHeight="19px">
                                Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade?
                                Deixe seus
                                questionamentos ou sugestões para o autor!
                            </Text>
                        </S.ShareContainer>
                        <S.ButtonTopico onClick={() => setIsForm(true)}>
                            <MaisIcon />
                            criar tópico
                        </S.ButtonTopico>
                    </>
                )}
                {(isForm && !isSuccess) && (
                    <DiscussionsForm
                        setIsSuccess={setIsSuccess}
                        newCards={newCards}
                        setNewCards={setNewCards}
                    />
                )}
                {isSuccess && (
                    <SuccessMessage
                        setIsForm={setIsForm}
                        setIsSuccess={setIsSuccess}
                        setIsShare={setIsShare}
                    />
                )}
                <Cards
                    setNewCards={setNewCards}
                    newCards={newCards}
                />
            </WrapperContent>
        </S.DiscussionsContainer>
    );
}

export default Discussions;
