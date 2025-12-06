import React, { useEffect, useRef, useState } from 'react';
import Annotation from '../Annotation/Annotation';
import PageView from '../view/PageView';

const BilBoard = () => {


    return (
        <group position={[6, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <Annotation distanceFactor={3.5}>

                <PageView
                    key={'hero'}
                    pageName={'hero'}
                />


            </Annotation>
        </group>
    );
};

export default BilBoard;
