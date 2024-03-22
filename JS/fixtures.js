const seasonMatches = [];

async function loadFixtures () {
    const db = firebase.firestore();

    // find all matches
    db.collection("Seasons").doc("2023-24 Summer").collection("Matches")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                seasonMatches.push({data: doc.data(), id: doc.id});
            });
            console.log(seasonMatches);
            displayFixtures();
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        }
    );
}





function displayFixtures () {
    let content = "";

    seasonMatches.map(match => {
        content += 
        `<div class="match_info_container">
    
            <div class="round_number_container">
                <div class="round_number">Match at: ${match.id.substring(0, 10)}</div>
            </div>
    
            <div class="match_data">
    
                <div class="team_scores_container">
    
                    <div class="team_score_grid">
                        <div class="grid_item"></div>
    
                        <div class="grid_item">Singles</div>
    
                        <div class="grid_item">Doubles</div>
    
                        <div class="grid_item">Teams</div>
    
                        <div class="grid_item"></div>
                    </div>
    
                    <div class="team_score_grid winner">
                        <div class="grid_item title team_name">${match.data.home_team.name}</div>
    
                        <div class="grid_item">---</div>
    
                        <div class="grid_item">---</div>
    
                        <div class="grid_item">---</div>
    
                        <div class="grid_item title">${match.data.home_team.wins}</div>
                    </div>
    
                    <div class="team_score_grid">
                        <div class="grid_item title team_name">${match.data.away_team.name}</div>
    
                        <div class="grid_item">---</div>
    
                        <div class="grid_item">---</div>
    
                        <div class="grid_item">---</div>
    
                        <div class="grid_item title">${match.data.away_team.wins}</div>
                    </div>
    
                </div>
    
    
                <div class="top_players_container">
    
                    <div class="top_players_grid">
                        <div class="grid_item">MVP</div>
    
                        <div class="grid_item">High Peg</div>
                    </div>
    
                    <div class="top_players_grid winner">
                        <div class="grid_item">---</div>
    
                        <div class="grid_item">---</div>
                    </div>
    
                    <div class="top_players_grid">
                        <div class="grid_item">---</div>
    
                        <div class="grid_item">---</div>
                    </div>
                </div>
    
            </div>
    
    
    
        </div>`;


    });


    document.getElementById("fixturesDiv").innerHTML = content;
};