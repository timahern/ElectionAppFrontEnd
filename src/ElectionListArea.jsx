//big white area underneath the "Here are the elections for [address]" header on the Upcoming Elections.jsx page
import ElectionListItem from "./ElectionListItem";
function ElectionListArea({mapList}){
    const listItems = mapList.map(m =>
        <li><ElectionListItem electionMap = {m}/></li>
    );
    


    return (
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            marginTop: "20px",
            width: "80%",
            
            maxWidth: "800px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          
          <ul>{listItems}</ul>
        </div>
    );
}
export default ElectionListArea;