import React, { Fragment } from 'react';
import Header from './Header'

import * as S from './Main.styles'
const Main = ({children}) => {
    return (
        <Fragment>
            <Header />
            <S.MainContainer>
                {children}
            </S.MainContainer>
        </Fragment>
    );
}

export default Main;
