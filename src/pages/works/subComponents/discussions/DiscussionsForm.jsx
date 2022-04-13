import React, { useState } from 'react';

import { Text, Button, Label } from '../../../../styles/global.styles';

import * as S from './DiscussionsForm.styles'

const DiscussionsForm = ({ setIsSuccess }) => {
    const [answer, setAnswer] = useState("");
    const [share, setShare] = useState("");

    const handleOncliCkForm = (event) => {
        event.preventDefault();
        console.log('answer', answer)
        console.log('share', share)
        setIsSuccess(true)
    }

    return (
        <div>
            <Text margin="0 0 22px 0">Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</Text>
            <form onSubmit={handleOncliCkForm}>
                    <Label fBold for="answer">Assunto</Label>
                    <S.InputContainer
                        id="answer"
                        type="text"
                        placeholder='Defina um tópico sucinto para notificar os autores...'
                        onChange={(e) => setAnswer(e.target.value)}
                    />
                    <Label fBold for="share">Conteúdo</Label>
                    <S.TextArea
                        id="share"
                        rows="10"
                        cols="50"
                        onChange={(e) => setShare(e.target.value)}
                    ></S.TextArea>
                <Button type="submit">Enviar</Button>
            </form>
        </div>
    );
}

export default DiscussionsForm;
