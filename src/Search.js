import React from 'react';
import { SearchBar } from './SearchBar';
import { SearchList } from './SearchList';
export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={imagedata:[]};
        this.searchTxtValue='';
    }
    componentDidMount(){
        //this.giveMeTheData();
    }
    giveMeTheData(searchValue){
        const url=`http://api.giphy.com/v1/gifs/search?api_key=HD7HzRFhqaZBPpMi0nnlWE8SQZoBTYFg&q=${searchValue}&limit=3`;
        const promise=fetch(url);
        promise.then(response=>{
            var p =response.json()
            p.then(data=>{
                console.log("Data is" , data.data);
                this.setState({imagedata:data.data})
            }).catch(err=>{
                console.log("Error in Json",err);
            })
            console.log("Response",response);
        }).catch(err=>{
            console.log("Error coming from server",err);
        })
    }
    searchNow(){
        this.giveMeTheData(this.searchTxtValue);
    }
    takeInput(event){
        let data =event.target.value;
        this.searchTxtValue=data;
        console.log("Calling" , data);
    }
    render(){
        return(
            <div>
                <h1 className='alert-info text-center'>{this.props.title}</h1>
                <SearchBar takeInput={this.takeInput.bind(this)} btClick={this.searchNow.bind(this)}/>
                <SearchList imagedata={this.state.imagedata}/>
            </div>
        );
    }
}
/*
function Search(){
    return(
        <div>
            <h1 className='alert-info text-center'>Search Engine App</h1>
            <SearchBar/>
            <SearchList/>
        </div>
    );
}
export default Search;
*/