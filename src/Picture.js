import React from 'react';
export const Picture=(props)=>{
    console.log("bhbh",props.url)
    return(<img src={props.url} alt='Picture is missing'/>);

}
