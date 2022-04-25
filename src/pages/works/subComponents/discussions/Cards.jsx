import React, { useEffect, useState } from 'react';

import like from '../../../../assets/heart.svg'
import info from '../../../../assets/info.svg'
import Checkicon from '../../../../assets/icons/CheckIcon'

import { cards } from '../../../../constants/constants'

import { SubTitle, Text, Button } from '../../../../styles/global.styles';
import * as S from './Cards.styles'

const Cards = ({
  setNewCards,
  newCards,
  isSuccess,
  sendAuthorAnswer,
  setSendAuthorAnswer
}) => {
  const [isAuthorAnswer, setIsAuthorAnswer] = useState("");
  const [editTopic, setEditTopic] = useState(false);
  const [isViewAuthorAnswer, setIsViewAuthorAnswer] = useState(false);

  useEffect(() => {
    setNewCards(cards)
  }, [])

  const isViewCards = newCards ? newCards : cards

  const increaseLikeQuantity = (index) => {
    const isCards = [...isViewCards]
    isCards[index].like += 1
    setNewCards(isCards)
  }

  const handleOncliCkEditTopic = () => {
    setEditTopic(true)
  }

  const handleOncliCkEditSend = (index) => {
    const isCards = [...isViewCards]

    isCards[index].authorAnswer = [isAuthorAnswer]
    isCards[index].author = 'Adriano da Silva'


    setNewCards(isCards)
    setSendAuthorAnswer(false)
    setEditTopic(false)
  }

  return (
    <S.CardsWrapper>
      {isViewCards?.map((item, index) => (
        <>
          <S.CardContainer
            key={`${index}-${item.id}`}
            isBlur={index === 0 && isSuccess && sendAuthorAnswer}
            viewAuthorAnswer={index === 0 && !isSuccess && isViewAuthorAnswer}
          >
            {(index === 0 && isSuccess && sendAuthorAnswer) && (
              <S.CheckIconContainer>
                <Checkicon />
                <p>Aguardando feedback dos autores</p>
                {!editTopic && (

                  <Button
                    bg="unset"
                    textColor="var(--orange)"
                    decoration
                    borderRadius="unset"
                    shadow="unset"
                    onClick={handleOncliCkEditTopic}
                  >
                    Editar tópico
                  </Button>
                )}
                {editTopic && (
                  <>
                    <S.EditTopicContent>
                      <S.Input
                        type='text'
                        placeholder="Adicione uma resposta"
                        onChange={(e) => setIsAuthorAnswer(e.target.value)}
                      />
                      <Button
                        bg="unset"
                        textColor="var(--orange)"
                        decoration
                        borderRadius="unset"
                        shadow="unset"
                        onClick={() => handleOncliCkEditSend(index)}
                      >
                        Enviar
                      </Button>
                    </S.EditTopicContent>
                  </>
                )}
              </S.CheckIconContainer>
            )}
            <S.Blur isBlur={index === 0 && isSuccess && sendAuthorAnswer} isSuccess={isSuccess}>
              <SubTitle fSizeMobile="10px" fWeight="700" lineHeight="20px">{item?.subject}</SubTitle>
              <Text
                fSizeMobile="10px"
                fSize="12px"
                fWeight="500"
              >
                {item?.name}
              </Text>
              <Text fSizeMobile='10px' fSize='12px' lineHeight="18px" overflowWrap>{item?.info}</Text>
              <S.DropdowContainer>
                <img src={info} alt='' width="4px" height="18px" />
                <S.ButtonLike onClick={() => increaseLikeQuantity(index)}>
                  <img src={like} alt='' width="12px" height="12px" />
                </S.ButtonLike>
                <Text
                  segoe
                  fWeight="350"
                  lineHeight="19px"
                  textColor="var(--grayLike)"
                >
                  {item?.like}
                  like
                </Text>
                <Text
                  segoe
                  fWeight="350"
                  lineHeight="19px"
                  textColor="var(--grayLike)"
                  cPointer
                  onClick={() => item?.authorAnswer?.length > 0 && setIsViewAuthorAnswer(!isViewAuthorAnswer)}
                >
                  {item?.authorAnswer?.length || item?.answer} resposta
                </Text>
              </S.DropdowContainer>
            </S.Blur>
          </S.CardContainer>
          {(item?.authorAnswer?.length > 0 && isViewAuthorAnswer) && (
            <S.AuthorAnswerContainer>


              <div>  {/* essa div   tem que ser display flex*/}
                <p> {item?.author}</p>
                <p>Autor</p>
                {/* Icone  */}
              </div>


              <Text
                fSizeMobile='10px'
                fSize='12px'
                lineHeight="18px"
                overflowWrap
              >
                {item?.authorAnswer}
              </Text>



            </S.AuthorAnswerContainer>
          )}



        </>

      ))}
    </S.CardsWrapper>

  );
}

export default Cards;
