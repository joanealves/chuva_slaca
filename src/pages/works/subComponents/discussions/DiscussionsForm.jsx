import React, { useState } from 'react';

import { Text, Button, Label, SubTitle } from '../../../../styles/global.styles';

import * as S from './DiscussionsForm.styles'

const DiscussionsForm = ({ setIsSuccess, newCards, setNewCards }) => {
    const [answer, setAnswer] = useState("");
    const [share, setShare] = useState("");
    const [errorShare, setErrorShare] = useState(false);
    const [errorAnswer, setErrorAnswer] = useState(false);

    const mobile = window.innerWidth < 600

    const handleOncliCkForm = (event) => {
        event.preventDefault();

        if (answer.length < 4) {
            setErrorAnswer(true)
        } else {
            setErrorAnswer(false)
            console.log('enviou share')
        }
        if (share.length < 20) {
            setErrorShare(true)
        } else {
            setErrorShare(false)
            console.log('enviou share')
        }

        if (share.length > 0 && answer.length > 0) {
            addToCards()
            setIsSuccess(true)
        }
    }

    const addToCards = () => {
        const isCards = [...newCards]
        isCards.unshift({
            name: "Adriano da Silva",
            subject: answer,
            info: share,
            like: 0,
            answer: 0,
        })
        setNewCards(isCards)
    }

    return (
        <div>
            <Text margin="0 0 22px 0"
                lineHeight="18px"
                center>
                Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!
            </Text>
            <S.Form onSubmit={handleOncliCkForm}>
                <Label for="answer" lineHeight="19px">Assunto</Label>
                <S.InputContainer
                    id="answer"
                    type="text"
                    placeholder='Defina um tópico sucinto para notificar os autores...'
                    onChange={(e) => setAnswer(e.target.value)}
                />
                {errorAnswer && (
                    <SubTitle margin="0 0 10px 0" fSizeMobileSub="10px">
                        Mínimo 4 letras
                    </SubTitle>
                )}
                <Label for="share" lineHeight="19px">Conteúdo</Label>
                <S.TextArea
                    id="share"
                    rows={mobile ? '' : 10}
                    cols={mobile ? '' : 50}
                    onChange={(e) => setShare(e.target.value)}
                ></S.TextArea>
                {errorShare && (
                    <SubTitle margin="0 0 10px 0" fSizeMobileSub="10px">
                        Mínimo 20 letras
                    </SubTitle>
                )}
                <Button
                    type="submit"
                    positionAbsolute
                    widthDefault={mobile ? '120px' : ''}
                    lineHeight="16px"
                >
                    Enviar
                </Button>
            </S.Form>
        </div>
    );
}

export default DiscussionsForm;
