import {Component} from 'react';
import TrackerItem from '../TrackerItem';
import './index.css';
class TrackerList extends Component{
    state={details:[],isLoad:true};
    componentDidMount()
    {
        this.getDetails();
    }
    getDetails=async()=>{
        const response=await fetch("https://apis.ccbp.in/crypto-currency-converter");
        const data=await response.json();
        this.setState({details:data,isLoad:false}); 
    }
    render(){
        const {details,isLoad}=this.state;
        return(
            isLoad?(<h1>Loading......</h1>):(
            <div className='tracker-list'>   
               {details.map(eachitem=>(<TrackerItem key={eachitem.id} itemDetails={eachitem}/>))}
            </div>)
        )
    }
}
export default TrackerList;