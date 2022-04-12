import React from 'react';


import movie from '../../../../assets/movie.png';
import doi from '../../../../assets/Doi.png';
import StarIcon from '../../../../assets/icons/StarIcon';
import DownloadIcon from '../../../../assets/icons/DownloadIcon';

import { TextTitle } from '../../../../styles/global.styles.js'

import * as S from './Details.styles'
const Details = () => {
    return (
        <section>
                <div>
                    <S.OrangeTextTitle>Análise sensorial de preparações funcionais desenvolvidas para escolares
                        entre 09 e 15 anos, do município de Campinas/SP
                    </S.OrangeTextTitle>
                    <S.Movie src={movie} alt='Capa trailer ' />
                </div>
                <div>
                    <div>
                        <div>
                            <button>
                                <DownloadIcon />
                                Download
                            </button>
                            <div>
                                <StarIcon />
                            </div>
                            <div>
                                <img src={doi} alt='' />
                            </div>
                        </div>
                        <S.OrangeSubTitle>COMO CITAR ESSE TRABALHO?</S.OrangeSubTitle>
                        <div>
                            <TextTitle>Detalhes</TextTitle>
                        </div>
                        <div>
                            <div>
                                <p>
                                    Tipo de Apresentação:
                                    <span>Pôster</span>
                                </p>
                                <p>
                                    Eixo temático:
                                    <span>Alimentação e saúde (AS)</span>
                                </p>
                                <p>
                                    Palavras-chaves:
                                    <span>Alimentos funcionais, alimentação escolar.</span>
                                </p>
                            </div>
                            <div>
                                Autores:
                                Galileo Galilei¹
                                Berta Lange de Morretes²
                                Isaac Newton³
                                Cesar Lattes¹
                                Stephen Hawking⁴
                            </div>
                            <div>
                                ¹Universidade Estadual de Campinas
                                ²Universidade de São Paulo
                                ³Instituto Nacional de Pesquisas Espaciais
                                ⁴Universidade Federal do Rio de Janeiro
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Details;
