import{useNavigate, useSearchParams} from 'react-router-dom';
import './App.css';
import ElectionListArea from "./ElectionListArea";
//import axios from 'axios';
import { useEffect, useState, useRef } from "react";

function UpcomingElections(){
    const [listOfMaps, setListOfMaps] = useState(() => {
        const m1 = new Map();
        m1.set("eID", "9034");
        m1.set("name", "US Presidential Election 2028");
        m1.set("date", "11-08-2028");
        m1.set("description", "Lorem ipsum...");
      
        const m2 = new Map();
        m2.set("eID", "9187");
        m2.set("name", "US Senate Election 2028 - NY");
        m2.set("date", "11-08-2028");
        m2.set("description", "Lorem ipsum...");
      
        return [m1, m2];
      });
    const nav = useNavigate();
    const [searchParams] = useSearchParams();

    const zip = searchParams.get('zip');
    const st = searchParams.get('state');

    const didRun = useRef(false); // prevents StrictMode double-run (dev only)

    useEffect(() => {
        if (didRun.current) return;
        didRun.current = true;

        const zipParam   = (zip ?? "").trim();   // from useSearchParams()
        const stateParam = (st  ?? "").trim();

        const qs = new URLSearchParams();
        if (zipParam)   qs.set("zip", zipParam);     // must be "zip"
        if (stateParam) qs.set("state", stateParam);

        const url = `http://127.0.0.1:5000/elections${qs.toString() ? `?${qs.toString()}` : ""}`;
        
        
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // build once
            const maps = (Array.isArray(data) ? data : []).map((obj) => {
            const m = new Map();
            m.set("eID", obj.eID);
            m.set("name", obj.name);
            m.set("date", obj.date);
            m.set("description", obj.description);
            return m;
            });

            // append once
            setListOfMaps((prev) => {
            // optional: de-dupe by eID
            const seen = new Set(prev.map((m) => m.get("eID")));
            const unique = maps.filter((m) => !seen.has(m.get("eID")));
            return [...prev, ...unique];
            });
        })
        .catch((err) => console.error("Error fetching elections:", err));
    }, []);

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