const seasonMatches = [];

async function loadFixtures () {
    const db = firebase.firestore();

    // find all matches
    db.collection("Seasons").doc("2023-24 Summer").collection("Data").doc("Fixtures")
        .get()
        .then((doc) => {
            if (doc.exists) {
                // Document exists, you can access its data using doc.data()
                doc.data().data.map(index => {
                    seasonMatches.push(index);
                });

                console.log(seasonMatches);
                displayFixtures();
            } else {
                // Document does not exist
                console.log("No such document!");
            }
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });
}





function displayFixtures () {
    let content = "";

    seasonMatches.map(match => {

        // Get home high pegs
        let homeHighPeg = "";
        match.home.high_peg.map(index => {
            homeHighPeg += `<div>${index.name}: ${JSON.stringify(index.pegs_high)}</div>`;
        });

        // Get away high pegs
        let awayHighPeg = "";
        match.away.high_peg.map(index => {
            awayHighPeg += `<div>${index.name}: ${JSON.stringify(index.pegs_high)}</div>`;
        });


        content += 
        `<div class="match_info_container">
    
            <div class="round_number_container">
                <div class="round_number">Match at: ${match.date}</div>
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
                        <div class="grid_item title team_name">${match.home.team_name}</div>
    
                        <div class="grid_item">${match.home.singles}</div>
    
                        <div class="grid_item">${match.home.doubles}</div>
    
                        <div class="grid_item">${match.home.triples}</div>
    
                        <div class="grid_item title">${match.home.wins}</div>
                    </div>
    
                    <div class="team_score_grid">
                        <div class="grid_item title team_name">${match.away.team_name}</div>
    
                        <div class="grid_item">${match.away.singles}</div>
    
                        <div class="grid_item">${match.away.doubles}</div>
    
                        <div class="grid_item">${match.away.triples}</div>
    
                        <div class="grid_item title">${match.away.wins}</div>
                    </div>
    
                </div>
    
    
                <div class="top_players_container">
    
                    <div class="top_players_grid">
                        <div class="grid_item">MVP</div>
    
                        <div class="grid_item">High Peg</div>
                    </div>
    
                    <div class="top_players_grid winner">
                        <div class="grid_item">${match.home.mvp}</div>
    
                        <div class="grid_item">${homeHighPeg}</div>
                    </div>
    
                    <div class="top_players_grid">
                        <div class="grid_item">${match.away.mvp}</div>
    
                        <div class="grid_item">${awayHighPeg}</div>
                    </div>
                </div>
    
            </div>
    
    
    
        </div>`;


    });


    document.getElementById("fixturesDiv").innerHTML = content;
};