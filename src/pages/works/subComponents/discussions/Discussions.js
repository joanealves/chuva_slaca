import React from 'react';

import crescimento from '../../../../assets/mao.svg';
import dialogo from '../../../../assets/dialogo.svg';
import ideia from '../../../../assets/ideia.svg';
import MaisIcon from '../../../../assets/icons/MaisIcon';

import { TextTitle } from '../../../../styles/global.styles';

const Discussions = () => {
    return (
        <section>
            <div>
                <TextTitle>Discussões</TextTitle>
            </div>
            <div>
                <h2>Compartilhe suas ideias ou dúvidas com os autores!</h2>
                <div>
                    <img src={crescimento} alt="Foto Mão segurando uma planta" width="30px" />
                    <img src={dialogo} alt="Foto Caixa de diálogo" width="30px" />
                    <img src={ideia} alt="Foto Pessoas tendo uma idéia ou insigth" width="30px"/>
                </div>
                <p>
                    Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade?
                    Deixe seus questionamentos ou sugestões para o autor!
                </p>
            </div>
            <button>
                <MaisIcon />
                criar tópico
            </button>


            <div>
                <h4>Assunto da pergunta aparece aqui</h4>
                <p>Carlos Henrique Santos</p>
                <p>
                    Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto
                    de processo formativo situado impacto de processo formativo processo...
                </p>
                <div>
                    dropdow
                    <button>
                        {/* <svg>Coração</svg> */}
                    </button>
                    <p>1 like</p>
                    <p>1 resposta</p>
                </div>
            </div>
        </section>
    );
}

export default Discussions;
