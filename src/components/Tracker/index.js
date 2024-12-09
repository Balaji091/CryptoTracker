import TrackerList from '../TrackerList';
import './index.css';
const Tracker=()=>{
    return(
        <div className="tracker">
            <h1 id="title">Cryptocurrency Tracker</h1>
            <img src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "/>
            <TrackerList/>
        </div>
    )
}
export default Tracker;