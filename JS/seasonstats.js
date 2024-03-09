const topTons = [];
const topPegs = [];
const highPeg = [];

async function loadSeasonStats () {
    const db = firebase.firestore();

    // find top 5 tons scored
    db.collection("Seasons").doc("2023-24 Summer").collection("Players").orderBy("tons_count", "desc").limit(5)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                topTons.push(doc.data());
            });
            console.log(topTons);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        }
    );

    // find top 5 pegs scored
    db.collection("Seasons").doc("2023-24 Summer").collection("Players").orderBy("pegs_count", "desc").limit(5)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                topPegs.push(doc.data());
            });
            console.log(topPegs);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        }
    );

    // find top 5 highest pegs scored
    db.collection("Seasons").doc("2023-24 Summer").collection("Players").orderBy("peg_highest", "desc").limit(5)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                highPeg.push(doc.data());
            });
            console.log(highPeg);
            displayStats();
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        }
    );
}





function displayStats () {
    let content = "";

    content += 
    `<div class="top_stats_container">
        <div class="stat_title">Tons</div>

        <div>
            <div class="top_rank">
                <div class="stats_grid_item">1</div>

                <div class="stats_grid_item">
                    <div>${topTons[0].name}</div>
                    <div class="player_team_name">${topTons[0].teams_played_in[0].name}</div>
                </div>

                <div class="stats_grid_item">${topTons[0].tons_count}</div>
            </div>

            <div class="runner_ups">
                <div class="runner_ups_grid">
                    <div>POS</div>
                    <div>Name</div>
                    <div>Tons</div>
                </div>

                <div class="runner_ups_grid">
                    <div class="stats_grid_item">2</div>

                    <div class="stats_grid_item">
                        <div>${topTons[1].name}</div>
                        <div class="player_team_name">${topTons[1].teams_played_in[0].name}</div>
                    </div>

                    <div class="stats_grid_item">${topTons[1].tons_count}</div>
                </div>

                <div class="runner_ups_grid">
                    <div class="stats_grid_item">3</div>

                    <div class="stats_grid_item">
                        <div>${topTons[2].name}</div>
                        <div class="player_team_name">${topTons[2].teams_played_in[0].name}</div>
                    </div>

                    <div class="stats_grid_item">${topTons[2].tons_count}</div>
                </div>

                <div class="runner_ups_grid">
                    <div class="stats_grid_item">4</div>

                    <div class="stats_grid_item">
                        <div>${topTons[3].name}</div>
                        <div class="player_team_name">${topTons[3].teams_played_in[0].name}</div>
                    </div>

                    <div class="stats_grid_item">${topTons[3].tons_count}</div>
                </div>

                <div class="runner_ups_grid">
                    <div class="stats_grid_item">5</div>

                    <div class="stats_grid_item">
                        <div>${topTons[4].name}</div>
                        <div class="player_team_name">${topTons[4].teams_played_in[0].name}</div>
                    </div>

                    <div class="stats_grid_item">${topTons[4].tons_count}</div>
                </div>

            </div>
        </div>

    </div>`;



    content += 
    `<div class="top_stats_container">
        <div class="stat_title">Pegs</div>

        <div>
            <div class="top_rank">
                <div class="stats_grid_item">1</div>

                <div class="stats_grid_item">
                    <div>${topPegs[0].name}</div>
                    <div class="player_team_name">${topPegs[0].teams_played_in[0].name}</div>
                </div>

                <div class="stats_grid_item">${topPegs[0].pegs_count}</div>
            </div>

            <div class="runner_ups">
                <div class="runner_ups_grid">
                    <div>POS</div>
                    <div>Name</div>
                    <div>Pegs</div>
                </div>

                <div class="runner_ups_grid">
                    <div class="stats_grid_item">2</div>

                    <div class="stats_grid_item">
                        <div>${topPegs[1].name}</div>
                        <div class="player_team_name">${topPegs[1].teams_played_in[0].name}</div>
                    </div>

                    <div class="stats_grid_item">${topPegs[1].pegs_count}</div>
                </div>

                <div class="runner_ups_grid">
                    <div class="stats_grid_item">3</div>

                    <div class="stats_grid_item">
                        <div>${topPegs[2].name}</div>
                        <div class="player_team_name">${topPegs[2].teams_played_in[0].name}</div>
                    </div>

                    <div class="stats_grid_item">${topPegs[2].pegs_count}</div>
                </div>

                <div class="runner_ups_grid">
                    <div class="stats_grid_item">4</div>

                    <div class="stats_grid_item">
                        <div>${topPegs[3].name}</div>
                        <div class="player_team_name">${topPegs[3].teams_played_in[0].name}</div>
                    </div>

                    <div class="stats_grid_item">${topPegs[3].pegs_count}</div>
                </div>

                <div class="runner_ups_grid">
                    <div class="stats_grid_item">5</div>

                    <div class="stats_grid_item">
                        <div>${topPegs[4].name}</div>
                        <div class="player_team_name">${topPegs[4].teams_played_in[0].name}</div>
                    </div>

                    <div class="stats_grid_item">${topPegs[4].pegs_count}</div>
                </div>

            </div>
        </div>

    </div>`;



    content += 
    `<div class="top_stats_container">
        <div class="stat_title">High Peg</div>

        <div>
            <div class="top_rank">
                <div class="stats_grid_item">1</div>

                <div class="stats_grid_item">
                    <div>${highPeg[0].name}</div>
                    <div class="player_team_name">${highPeg[0].teams_played_in[0].name}</div>
                </div>

                <div class="stats_grid_item">${highPeg[0].peg_highest}</div>
            </div>

            <div class="runner_ups">
                <div class="runner_ups_grid">
                    <div>POS</div>
                    <div>Name</div>
                    <div>Score</div>
                </div>

                <div class="runner_ups_grid">
                    <div class="stats_grid_item">2</div>

                    <div class="stats_grid_item">
                        <div>${highPeg[1].name}</div>
                        <div class="player_team_name">${highPeg[1].teams_played_in[0].name}</div>
                    </div>

                    <div class="stats_grid_item">${highPeg[1].peg_highest}</div>
                </div>

                <div class="runner_ups_grid">
                    <div class="stats_grid_item">3</div>

                    <div class="stats_grid_item">
                        <div>${highPeg[2].name}</div>
                        <div class="player_team_name">${highPeg[2].teams_played_in[0].name}</div>
                    </div>

                    <div class="stats_grid_item">${highPeg[2].peg_highest}</div>
                </div>

                <div class="runner_ups_grid">
                    <div class="stats_grid_item">4</div>

                    <div class="stats_grid_item">
                        <div>${highPeg[3].name}</div>
                        <div class="player_team_name">${highPeg[3].teams_played_in[0].name}</div>
                    </div>

                    <div class="stats_grid_item">${highPeg[3].peg_highest}</div>
                </div>

                <div class="runner_ups_grid">
                    <div class="stats_grid_item">5</div>

                    <div class="stats_grid_item">
                        <div>${highPeg[4].name}</div>
                        <div class="player_team_name">${highPeg[4].teams_played_in[0].name}</div>
                    </div>

                    <div class="stats_grid_item">${highPeg[4].peg_highest}</div>
                </div>

            </div>
        </div>

    </div>`;



    document.getElementById("seasonStatsDiv").innerHTML = content;
}