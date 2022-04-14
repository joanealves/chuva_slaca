import React, { useEffect } from 'react';

import like from '../../../../assets/heart.svg'
import info from '../../../../assets/info.svg'

import { cards } from '../../../../constants/constants'

import { SubTitle, Text } from '../../../../styles/global.styles';
import * as S from './Cards.styles'

const Cards = ({ setNewCards, newCards }) => {

    useEffect(() => {
        setNewCards(cards)
    }, [])

    const increaseLikeQuantity = (index) => {
        const isViewCards = newCards ? newCards : cards
        const isCards = [...isViewCards]
        isCards[index].like += 1
        setNewCards(isCards)
    }

    const isViewCards = newCards ? newCards : cards

    return (
        <S.CardsWrapper>
            {isViewCards?.map((item, index) => (
                <S.CardContainer key={`${index}-${item.id}`}>
                    <SubTitle fSizeMobile='10px'>{item?.subject}</SubTitle>
                    <Text fBold fSizeMobile='10px' fSize='12px'>{item?.name}</Text>
                    <Text fSizeMobile='10px' fSize='12px'>{item?.info}</Text>
                    <S.DropdowContainer>
                        <img src={info} alt='' width="4px" height="18px" />
                        <S.ButtonLike onClick={() => increaseLikeQuantity(index)}>
                            <img src={like} alt='' width="12px" height="12px" />
                        </S.ButtonLike>
                        <Text>{item?.like} like</Text>
                        <Text>{item?.answer} resposta</Text>
                    </S.DropdowContainer>
                </S.CardContainer>
            ))}
        </S.CardsWrapper>

    );
}

export default Cards;
