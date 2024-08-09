import React from 'react';
import logoPT from '../assets/koperasiLogo.png';

const PageHeader:React.FC = () => {
    
    return (
    <div className='flex gap-10 lg:gap-20 justify-between'>
    <div className='flex gap-4 items-center flex-shrink-0'>
        <button></button>
        <a href="/"> <img src={logoPT} className='h-6' /></a>
    </div>
    <div></div>
    <div></div>
    </div>
)
}
export default PageHeader;