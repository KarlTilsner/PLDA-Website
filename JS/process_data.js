async function processSeasonStats() {
    const topTons = [];
    const topPegs = [];
    const highPeg = [];

    // Get all the raw data from firestore
    const db = firebase.firestore();

    try {
        // Execute all asynchronous operations concurrently using Promise.all
        await Promise.all([
            // Find top 5 tons scored
            db.collection("Seasons").doc("2023-24 Summer").collection("Players").orderBy("tons_count", "desc").limit(5)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        topTons.push(doc.data());
                    });
                }),

            // Find top 5 pegs scored
            db.collection("Seasons").doc("2023-24 Summer").collection("Players").orderBy("pegs_count", "desc").limit(5)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        topPegs.push(doc.data());
                    });
                }),

            // Find top 5 highest pegs scored
            db.collection("Seasons").doc("2023-24 Summer").collection("Players").orderBy("peg_highest", "desc").limit(5)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        highPeg.push(doc.data());
                    });
                })
        ]);
    } catch (error) {
        console.log("Error getting documents: ", error);
    }


    // Combine raw data into one file
    const seasonStats = [];

    // get top 5 tons
    function processTopTons () {
        const temp = {
            title: "Tons",
            unit: "Tons",
            player_data: []
        };

        topTons.map(player => {
            temp.player_data.push({
                name: player.name,
                score: player.tons_count,
                team_name: player.teams_played_in[0].name
            });
        });

        seasonStats.push(temp);
    }
    processTopTons();

    // get top 5 pegs
    function processTopPegs () {
        const temp = {
            title: "Pegs",
            unit: "Pegs",
            player_data: []
        };

        topPegs.map(player => {
            temp.player_data.push({
                name: player.name,
                score: player.pegs_count,
                team_name: player.teams_played_in[0].name
            });
        });

        seasonStats.push(temp);
    }
    processTopPegs();

    // get top 5 highest pegs
    function processHighPegs () {
        const temp = {
            title: "High Peg",
            unit: "Score",
            player_data: []
        };

        highPeg.map(player => {
            temp.player_data.push({
                name: player.name,
                score: player.peg_highest,
                team_name: player.teams_played_in[0].name
            });
        });

        seasonStats.push(temp);
    }
    processHighPegs();


    // Add new season stats here...


    console.log(seasonStats);


    // upload new data to firestore
    const data = {data: seasonStats};
    db.collection("Seasons").doc("2023-24 Summer").collection("Data").doc("Season Stats").set(data);
}
// processSeasonStats();





async function processFixtures () {
    const all_matches = [];

    // Get all matches from firestore
    const db = firebase.firestore();
    try {
        await Promise.all([
            db.collection("Seasons").doc("2023-24 Summer").collection("Matches")
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        all_matches.push({name: doc.id, match: doc.data()});
                    });
                }),
        ]);
    } catch (error) {
        console.log("Error getting documents: ", error);
    }
    console.log(all_matches);


    // Condense match data into one document
    const matches_condensed = [];
    all_matches.map(index => {
        const temp = {
            date: index.name.substring(0, 10),
            home: {
                team_name: index.match.home_team.name,
                singles: 0,
                doubles: 0,
                triples: 0,
                wins: index.match.home_team.wins,
                mvp: null,
                high_peg: []
            },
            away: {
                team_name: index.match.away_team.name,
                singles: 0,
                doubles: 0,
                triples: 0,
                wins: index.match.away_team.wins,
                mvp: null,
                high_peg: []
            }
        };

        // Get points for singles
        index.match.singles.map(match => {
            match.players.map(player => {
                if (player.team == "home" && player.win == true) {
                    temp.home.singles ++;
                }

                if (player.team == "away" && player.win == true) {
                    temp.away.singles ++;
                }
            });
        });

        // Get points for doubles
        index.match.doubles.map(match => {
            match.teams.map(team => {
                if (team.team == "home" && team.win == true) {
                    temp.home.doubles ++;
                }

                if (team.team == "away" && team.win == true) {
                    temp.away.doubles ++;
                }
            });
        });

        // Get points for triples
        index.match.triples.map(match => {
            match.teams.map(team => {
                if (team.team == "home" && team.win == true) {
                    temp.home.triples ++;
                }

                if (team.team == "away" && team.win == true) {
                    temp.away.triples ++;
                }
            });
        });
        




        // Define weights for each statistic
        const weights = {
            tonsWeight: 10, // Weight for each ton
            pegsWeight: 15, // Weight for each peg
            pegsHighWeight: 6 // Weight for each high peg
        };


        // Get home MVP
        // Calculate overall score for each player
        index.match.home_team.player_stats.map(player => {
            player.overallScore = (player.tons.length * weights.tonsWeight) +
                                  (player.pegs * weights.pegsWeight) +
                                  (player.pegs_high.length * weights.pegsHighWeight);
        });
        
        // Sort players by overall score in descending order
        index.match.home_team.player_stats.sort((a, b) => b.overallScore - a.overallScore);
        
        // MVP is the first player in the sorted array
        console.log(index.name.substring(0, 10), index.match.home_team.name, index.match.home_team.player_stats[0].name, "-", "Tons:", index.match.home_team.player_stats[0].tons.length, "-", "Pegs:", index.match.home_team.player_stats[0].pegs);
        temp.home.mvp = `${index.match.home_team.player_stats[0].name}: ${index.match.home_team.player_stats[0].tons.length} Tons, ${index.match.home_team.player_stats[0].pegs} Pegs`;

        // Get away MVP
        // Calculate overall score for each player
        index.match.away_team.player_stats.map(player => {
            player.overallScore = (player.tons.length * weights.tonsWeight) +
                                  (player.pegs * weights.pegsWeight) +
                                  (player.pegs_high.length * weights.pegsHighWeight);
        });
        
        // Sort players by overall score in descending order
        index.match.away_team.player_stats.sort((a, b) => b.overallScore - a.overallScore);
        
        // MVP is the first player in the sorted array
        console.log(index.name.substring(0, 10), index.match.away_team.name, index.match.away_team.player_stats[0].name, "-", "Tons:", index.match.away_team.player_stats[0].tons.length, "-", "Pegs:", index.match.away_team.player_stats[0].pegs);
        temp.away.mvp = `${index.match.away_team.player_stats[0].name}: ${index.match.away_team.player_stats[0].tons.length} Tons, ${index.match.away_team.player_stats[0].pegs} Pegs`;



        // Get home high pegs if any
        index.match.home_team.player_stats.forEach(player => {
            const playerHighPegs = { name: player.name, pegs_high: [] };

            player.pegs_high.forEach(peg => {
                if (peg) {
                    playerHighPegs.pegs_high.push(peg);
                }
            });

            // Check if player has pegs and then push to all_matches
            if (playerHighPegs.pegs_high.length > 0) {
                temp.home.high_peg.push(playerHighPegs);
            }
        });

        // Get away high pegs if any
        index.match.away_team.player_stats.forEach(player => {
            const playerHighPegs = { name: player.name, pegs_high: [] };

            player.pegs_high.forEach(peg => {
                if (peg) {
                    playerHighPegs.pegs_high.push(peg);
                }
            });

            // Check if player has pegs and then push to all_matches
            if (playerHighPegs.pegs_high.length > 0) {
                temp.away.high_peg.push(playerHighPegs);
            }
        });

        matches_condensed.push(temp);
    });

    
    // Upload new data to firestore
    const data = {data: matches_condensed};
    db.collection("Seasons").doc("2023-24 Summer").collection("Data").doc("Fixtures").set(data);
    console.log(data);

}
// processFixtures();