import React, { useState } from 'react';

import { textViewMore } from '../../../../constants/constants'

import {
    TextTitle,
    TitletWrapper,
    Text,
    WrapperContent,
    Span
} from '../../../../styles/global.styles'

import * as S from './Resume.styles';

const Resume = () => {
    const [isViewMore, setIsViewMore] = useState(false)

    return (
        <S.ResumeContainer>
            <TitletWrapper>
                <TextTitle>Resumo</TextTitle>
            </TitletWrapper>
            <WrapperContent>
                <Text fSizeMobile="10px">
                    A sequência de edições do Simpósio Latino Americano de Ciência de Alimentos, desde 1995,
                    nos dá o privilégio, a nós pesquisadores, de contar com um observatório
                    de desenvolvimento da área de Alimentos, com impacto na indústria de Alimentos,
                    com a importância social e econômica da área de Alimentos, com abrangência nacional e internacional
                    {!isViewMore && (
                        <>
                        <Span>... </Span>
                        <S.ViewMoreButton onClick={() => setIsViewMore(!isViewMore)}>
                            ver mais
                        </S.ViewMoreButton>
                        </>
                    )}
                    {isViewMore && (
                        <>
                            <Span fSizeMobile="10px">{textViewMore}</Span>
                            <S.ViewMoreButton onClick={() => setIsViewMore(!isViewMore)}>
                                ver menos
                            </S.ViewMoreButton>
                        </>
                    )}
                </Text>
            </WrapperContent>
        </S.ResumeContainer>
    );
}

export default Resume;
