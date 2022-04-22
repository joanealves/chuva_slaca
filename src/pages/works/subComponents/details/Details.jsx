import React from 'react';

import movie from '../../../../assets/movie.png';
import doi from '../../../../assets/Doi.png';
import StarIcon from '../../../../assets/icons/StarIcon';
import DownloadIcon from '../../../../assets/icons/DownloadIcon';

import { authors, university } from '../../../../constants/constants'

import { TextTitle, TitletWrapper, Text, Span } from '../../../../styles/global.styles.js'

import * as S from './Details.styles'
const Details = () => {
    return (
        <S.DetailsContainer>
            <S.Content>
                <S.OrangeTextTitle >Análise sensorial de preparações funcionais desenvolvidas para escolares
                    entre 09 e 15 anos, do município de Campinas/SP
                </S.OrangeTextTitle>
                <S.Movie src={movie} alt='Capa trailer' />
            </S.Content>
            <div>
                <S.ButtonContainer>
                    <S.Button>
                        <DownloadIcon />
                        Download
                    </S.Button>
                    <S.StarDoiContainer>
                        <StarIcon />
                    </S.StarDoiContainer>
                    <S.StarDoiContainer>
                        <img src={doi} alt='' width="18px" height="18px" />
                    </S.StarDoiContainer>
                </S.ButtonContainer>
                <S.OrangeSubTitle>COMO CITAR ESSE TRABALHO?</S.OrangeSubTitle>
                <TitletWrapper >
                    <TextTitle>Detalhes</TextTitle>
                </TitletWrapper>
                <S.ScroolContainer>
                    <S.Scrool>
                        <div>
                            <div>
                                <Span fSize="12px" fSizeMobile="10px">Tipo de Apresentação: </Span>
                                <Span
                                    fWeight="bold"
                                    fSize="12px"
                                    fSizeMobile="10px"
                                >
                                    Pôster
                                </Span>
                            </div>
                            <div>
                                <Span fSize="12px" fSizeMobile="10px">Eixo temático: </Span>
                                <Span
                                    fWeight="bold"
                                    fSize="12px"
                                    fSizeMobile="10px"
                                >
                                    Alimentação e saúde (AS)
                                </Span>
                            </div>
                            <div>
                                <Span fSize="12px" fSizeMobile="10px">Palavras-chaves: </Span>
                                <Span
                                    fWeight="bold"
                                    fSize="12px"
                                    fSizeMobile="10px"
                                >
                                    Alimentos funcionais, alimentação escolar.
                                </Span>
                            </div>
                        </div>
                        <div>
                            <Text fWeight="bold" margin="0 0 6px">
                                Autores:
                            </Text>
                            {authors?.map((author) => (
                                <Text fSizeMobile="10px" margin="0 0 6px">
                                    {author?.name}
                                </Text>
                            ))}
                        </div>
                        <div>
                            {university?.map((item) => (
                                <Text
                                    fSizeMobile="10px"
                                    textColor="var(--grayDetails3)"
                                >
                                    {item?.name}
                                </Text>
                            ))}
                        </div>
                    </S.Scrool>
                </S.ScroolContainer>
            </div>
        </S.DetailsContainer>
    );
}

export default Details;
