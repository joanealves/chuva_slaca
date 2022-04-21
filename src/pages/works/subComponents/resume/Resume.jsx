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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut.  Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.  Etiam aliquam dictum nisl, vel aliquet enim accumsan sit ametl accumsant...
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
