import{useNavigate, useSearchParams} from 'react-router-dom';
import './App.css';
import ElectionListArea from "./ElectionListArea";



function UpcomingElections(){
    const nav = useNavigate();
    const [searchParams] = useSearchParams();

    const zip = searchParams.get('zip');
    const st = searchParams.get('state');

    //temporary example of a list of Map objects that will get passed to electionlistarea and then passed to electionlistitem
    let listOfMaps = [];
    const m1 = new Map();
    m1.set('eID', '9034');
    m1.set('name', 'US Presidential Election 2028');
    m1.set('date', '11-08-2028');
    m1.set('description', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');

    const m2 = new Map();
    m2.set('eID', '9187');
    m2.set('name', 'US Senate Election 2028 - NY');
    m2.set('date', '11-08-2028');
    m2.set('description', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');
    listOfMaps.push(m1);
    listOfMaps.push(m2);

    const navigate=()=>{
        nav('/home');
    }

    return(
        <>
            <h1>Here are the elections for {zip}, {st}</h1>
            <ElectionListArea 
                mapList = {listOfMaps}
            />
            <button className="navButton" onClick={navigate}>Go Back</button>
        </>
    )
    
}
export default UpcomingElections;