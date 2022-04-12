import React from 'react';
import Main from '../../components/Main';

import Details from './subComponents/details/Details';
import Discussions from './subComponents/discussions/Discussions';
import Resume from './subComponents/resume/Resume';

const Works = () => {
    return (
        <Main >
            <Details />
            <Resume />
            <Discussions />
        </Main>
    );
}

export default Works;
