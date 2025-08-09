import{useNavigate, useSearchParams} from 'react-router-dom';
import './App.css';


function UpcomingElections(){
    const nav = useNavigate();
    const [searchParams] = useSearchParams();

    const zip = searchParams.get('zip');
    const st = searchParams.get('state');

    const navigate=()=>{
        nav('/home');
    }

    return(
        <>
            <h1>Here are the elections for {zip}, {st}</h1>
            <div>Ex: US Presidential Election</div>
            <button id="submitButton" onClick={navigate}>Go Back</button>
        </>
    )
    
}
export default UpcomingElections;