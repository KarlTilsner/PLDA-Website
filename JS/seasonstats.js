const seasonStats = [];

async function loadSeasonStats () {
    const db = firebase.firestore();

    // find all matches
    db.collection("Seasons").doc("2023-24 Summer").collection("Data").doc("Season Stats")
        .get()
        .then((doc) => {
            if (doc.exists) {
                // Document exists, you can access its data using doc.data()
                doc.data().data.map(index => {
                    seasonStats.push(index);
                });

                console.log(seasonStats);
                displayStats();
            } else {
                // Document does not exist
                console.log("No such document!");
            }
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });
}





function displayStats () {
    let content = "";

    seasonStats.map(index => {
        // Get runner-ups
        let runnerups = "";
        let POS = 2;
        index.player_data.slice(1).map(player => { // slice(1) skips the first element
            runnerups += 
            `<div class="runner_ups_grid">
                <div class="stats_grid_item">${POS}</div>

                <div class="stats_grid_item">
                    <div>${player.name}</div>
                    <div class="player_team_name">${player.team_name}</div>
                </div>

                <div class="stats_grid_item">${player.score}</div>
            </div>`;
            POS++;
        });

        // Complete the rest of the stats card
        content += 
        `<div class="top_stats_container">
            <div class="stat_title">${index.title}</div>
    
            <div>
                <div class="top_rank">
                    <div class="stats_grid_item">1</div>
    
                    <div class="stats_grid_item">
                        <div>${index.player_data[0].name}</div>
                        <div class="player_team_name">${index.player_data[0].team_name}</div>
                    </div>
    
                    <div class="stats_grid_item">${index.player_data[0].score}</div>
                </div>
    
                <div class="runner_ups">
                    <div class="runner_ups_grid">
                        <div>POS</div>
                        <div>Name</div>
                        <div>${index.unit}</div>
                    </div>
    
                    ${runnerups}
    
                </div>
            </div>
        </div>`;
    });



    

    document.getElementById("seasonStatsDiv").innerHTML = content;
}