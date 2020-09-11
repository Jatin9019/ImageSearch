import React from 'react';
import {Picture} from './Picture';
export const SearchList=(props)=>{
    let TotalNoOfRecords=props.imagedata.length;
    const norecordfoundJSX=<p>No records found</p>
    const successJSX=(
        <>
        <p>List of records {TotalNoOfRecords}</p>
        {props.imagedata.map(ele=><Picture url={ele.images.original.url} />)}
        </>
    )
    return(
        <div>
            {props.imagedata.length==0?norecordfoundJSX:successJSX}
            
        </div>
    );
}