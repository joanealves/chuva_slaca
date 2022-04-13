import React, { useState } from 'react';

import { Text, Button, Label, SubTitle } from '../../../../styles/global.styles';

import * as S from './DiscussionsForm.styles'

const DiscussionsForm = ({ setIsSuccess }) => {
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

        if (share.length > 0 && answer.length > 0) setIsSuccess(true)
    }

    return (
        <div>
            <Text margin="0 0 22px 0">Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</Text>
            <S.Form onSubmit={handleOncliCkForm}>
                <Label fBold for="answer">Assunto</Label>
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
                <Label fBold for="share">Conteúdo</Label>
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
                >
                    Enviar
                </Button>
            </S.Form>
        </div>
    );
}

export default DiscussionsForm;
