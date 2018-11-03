import React from 'react';

import Base from './Base';

export const OnboardingForgotPassword = (props) => {
    return (
        <div className='OnboardingForgotPassword'>
            {props.children}
        </div>
    );
}


export const OnboardingContainer = (props) => {
    return (
        <div className='OnboardingContainer'>
            <div className='action-container'>
                <div className='form-container'>
                    {props.form}
                </div>
                <div className='divider' />
                <div className='socials-container'>
                    {props.socialMedia}
                </div>
            </div>
            
            {props.title}
        </div>
    );
}

export const SuccessContainer = (props) => {
    return (
        <svg 
            version='1.1' 
            id='Layer_1' 
            xmlns='http://www.w3.org/2000/svg' 
            xlink='http://www.w3.org/1999/xlink' 
            x='0px' 
            y='0px'
            viewBox='0 0 98.5 98.5' 
            enableBackground='new 0 0 98.5 98.5' 
            space='preserve'
        >
             <path 
                 className='checkmark' 
                 fill='none' 
                 strokeWidth='8' 
                 strokeMiterlimit='10' 
                 d='M81.7,17.8C73.5,9.3,62,4,49.2,4C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3'
             />
        </svg>
    );
}
