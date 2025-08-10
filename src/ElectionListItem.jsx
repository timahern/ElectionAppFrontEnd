//These will be the individual tiles that go in the square area under the "Here are the elections for [address]"
//these are only the little tiles and are listed out vertically inside the square area under the heading on the page

function ElectionListItem({electionMap}){
    const eID = electionMap.get('eID');
    const name = electionMap.get('name');
    const date = electionMap.get('date');
    const description = electionMap.get('description');

    return(
        <>
            <p style={{ color: "#333", fontWeight: "bold", textDecoration: "underline" }}>{name}</p>
            <p style={{ color: "#333"  }}>{description}</p>
        </>
    );
}

export default ElectionListItem;