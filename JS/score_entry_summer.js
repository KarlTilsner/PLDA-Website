const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');
const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');


const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => auth.signInWithPopup(provider);
signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        whenSignedIn.style.display = "flex";
        whenSignedOut.hidden = true;
        signOutBtn.hidden = false;

    } else {
        // not signed in
        whenSignedIn.style.display = "none";
        whenSignedOut.hidden = false;
        signOutBtn.hidden = true;
    }
});







async function changeSeason(option) {
    try {
        window.location.href = `/score_entry${option.value}.html`;
    } catch (error) {
        console.error('Error loading content:', error);
    }
}







// Select all elements
let allElements = document.querySelectorAll('*');

// Create an array to store the IDs
let input_data = {};

allElements.forEach(function(element) {
    // Add event listener if the element has an ID
    if (element.id) {
        element.addEventListener('input', function() {
            input_data[element.id] = element.value;

            updateScoresheet();
            // updateNamesList(element.value);
            
            // console.log('Element with ID ' + element.id + ' has value: ' + element.value);
        });
    }
});



function updateNamesList(name) {
    let namesList = document.getElementById("namesList");

    // // Remove all existing options
    // while (namesList.firstChild) {
    //     namesList.removeChild(namesList.firstChild);
    // }

    let newOption = document.createElement("option");
    newOption.value = name;
    namesList.appendChild(newOption);
}



let scoresheet_object = {};



async function updateScoresheet() {
    scoresheet_object = {
        home_team: {
            name: input_data.home_team_name,
            wins: 0,
            player_stats: []
        },
        away_team: {
            name: input_data.away_team_name,
            wins: 0,
            player_stats: []
        },
        singles: [
            {
                matchId: "match_1",
                players: [
                    { name: input_data.away_singles_player_name_1, pegs: input_data.away_singles_pegs_1, team: "away", win: false },
                    { name: input_data.home_singles_player_name_1, pegs: input_data.home_singles_pegs_1, team: "home", win: false }
                ]
            },
            {
                matchId: "match_2",
                players: [
                    { name: input_data.away_singles_player_name_2, pegs: input_data.away_singles_pegs_2, team: "away", win: false },
                    { name: input_data.home_singles_player_name_2, pegs: input_data.home_singles_pegs_2, team: "home", win: false }
                ]
            },
            {
                matchId: "match_3",
                players: [
                    { name: input_data.away_singles_player_name_3, pegs: input_data.away_singles_pegs_3, team: "away", win: false },
                    { name: input_data.home_singles_player_name_3, pegs: input_data.home_singles_pegs_3, team: "home", win: false }
                ]
            },
            {
                matchId: "match_4",
                players: [
                    { name: input_data.away_singles_player_name_4, pegs: input_data.away_singles_pegs_4, team: "away", win: false },
                    { name: input_data.home_singles_player_name_4, pegs: input_data.home_singles_pegs_4, team: "home", win: false }
                ]
            },
            {
                matchId: "match_5",
                players: [
                    { name: input_data.away_singles_player_name_5, pegs: input_data.away_singles_pegs_5, team: "away", win: false },
                    { name: input_data.home_singles_player_name_5, pegs: input_data.home_singles_pegs_5, team: "home", win: false }
                ]
            },
            {
                matchId: "match_6",
                players: [
                    { name: input_data.away_singles_player_name_6, pegs: input_data.away_singles_pegs_6, team: "away", win: false },
                    { name: input_data.home_singles_player_name_6, pegs: input_data.home_singles_pegs_6, team: "home", win: false }
                ]
            }
        ],
        reverse_singles: [
            {
                matchId: "match_1",
                players: [
                    { name: "", pegs: 0, team: "away", win: false },
                    { name: "", pegs: 0, team: "home", win: false }
                ]
            },
            {
                matchId: "match_2",
                players: [
                    { name: "", pegs: 0, team: "away", win: false },
                    { name: "", pegs: 0, team: "home", win: false }
                ]
            },
            {
                matchId: "match_3",
                players: [
                    { name: "", pegs: 0, team: "away", win: false },
                    { name: "", pegs: 0, team: "home", win: false }
                ]
            },
            {
                matchId: "match_4",
                players: [
                    { name: "", pegs: 0, team: "away", win: false },
                    { name: "", pegs: 0, team: "home", win: false }
                ]
            },
            {
                matchId: "match_5",
                players: [
                    { name: "", pegs: 0, team: "away", win: false },
                    { name: "", pegs: 0, team: "home", win: false }
                ]
            },
            {
                matchId: "match_6",
                players: [
                    { name: "", pegs: 0, team: "away", win: false },
                    { name: "", pegs: 0, team: "home", win: false }
                ]
            }
        ],
        doubles: [
            {
                matchId: "match_1",
                teams: [
                    {
                        team: "away",
                        players: [
                            { name: input_data.away_doubles_player_name_1, pegs: input_data.away_doubles_pegs_1 },
                            { name: input_data.away_doubles_player_name_2, pegs: input_data.away_doubles_pegs_2 }
                        ],
                        win: false
                    },
                    {
                        team: "home",
                        players: [
                            { name: input_data.home_doubles_player_name_1, pegs: input_data.home_doubles_pegs_1 },
                            { name: input_data.home_doubles_player_name_2, pegs: input_data.home_doubles_pegs_2 }
                        ],
                        win: false
                    }
                ]
            },
            {
                matchId: "match_2",
                teams: [
                    {
                        team: "away",
                        players: [
                            { name: input_data.away_doubles_player_name_3, pegs: input_data.away_doubles_pegs_3 },
                            { name: input_data.away_doubles_player_name_4, pegs: input_data.away_doubles_pegs_4 }
                        ],
                        win: false
                    },
                    {
                        team: "home",
                        players: [
                            { name: input_data.home_doubles_player_name_3, pegs: input_data.home_doubles_pegs_3 },
                            { name: input_data.home_doubles_player_name_4, pegs: input_data.home_doubles_pegs_4 }
                        ],
                        win: false
                    }
                ]
            },
            {
                matchId: "match_3",
                teams: [
                    {
                        team: "away",
                        players: [
                            { name: input_data.away_doubles_player_name_5, pegs: input_data.away_doubles_pegs_5 },
                            { name: input_data.away_doubles_player_name_6, pegs: input_data.away_doubles_pegs_6 }
                        ],
                        win: false
                    },
                    {
                        team: "home",
                        players: [
                            { name: input_data.home_doubles_player_name_5, pegs: input_data.home_doubles_pegs_5 },
                            { name: input_data.home_doubles_player_name_6, pegs: input_data.home_doubles_pegs_6 }
                        ],
                        win: false
                    }
                ]
            }
        ],
        triples: [
            {
                matchId: "match_1",
                teams: [
                    {
                        team: "away",
                        players: [
                            { name: input_data.away_triples_player_name_1, pegs: input_data.away_triples_pegs_1 },
                            { name: input_data.away_triples_player_name_2, pegs: input_data.away_triples_pegs_2 },
                            { name: input_data.away_triples_player_name_3, pegs: input_data.away_triples_pegs_3 }
                        ],
                        win: false
                    },
                    {
                        team: "home",
                        players: [
                            { name: input_data.home_triples_player_name_1, pegs: input_data.home_triples_pegs_1 },
                            { name: input_data.home_triples_player_name_2, pegs: input_data.home_triples_pegs_2 },
                            { name: input_data.home_triples_player_name_3, pegs: input_data.home_triples_pegs_3 }
                        ],
                        win: false
                    }
                ]
            },
            {
                matchId: "match_2",
                teams: [
                    {
                        team: "away",
                        players: [
                            { name: input_data.away_triples_player_name_4, pegs: input_data.away_triples_pegs_4 },
                            { name: input_data.away_triples_player_name_5, pegs: input_data.away_triples_pegs_5 },
                            { name: input_data.away_triples_player_name_6, pegs: input_data.away_triples_pegs_6 }
                        ],
                        win: false
                    },
                    {
                        team: "home",
                        players: [
                            { name: input_data.home_triples_player_name_4, pegs: input_data.home_triples_pegs_4 },
                            { name: input_data.home_triples_player_name_5, pegs: input_data.home_triples_pegs_5 },
                            { name: input_data.home_triples_player_name_6, pegs: input_data.home_triples_pegs_6 }
                        ],
                        win: false
                    }
                ]
            }
        ],
        teams: [
            {
                matchId: "match_1",
                teams: [
                    {
                        team: "away",
                        players: [
                            { name: "", pegs: 0 },
                            { name: "", pegs: 0 },
                            { name: "", pegs: 0 },
                            { name: "", pegs: 0 }
                        ],
                        win: false
                    },
                    {
                        team: "home",
                        players: [
                            { name: "", pegs: 0 },
                            { name: "", pegs: 0 },
                            { name: "", pegs: 0 },
                            { name: "", pegs: 0 }
                        ],
                        win: false
                    }
                ]
            }
        ]
    };



    async function countPegs() {
        // check through each game type and determine which team/player won

        // update wins on singles games
        try {
            scoresheet_object.singles.map(singles => {
                let maxPeg = 0;
                let winnerIndex = -1;
    
                for (let i = 0; i < singles.players.length; i++) {
                    if (singles.players[i].pegs == undefined) {
                        singles.players[i].pegs = 0;
                    }

                    singles.players[i].pegs = Number(singles.players[i].pegs);
    
                    if (singles.players[i].pegs > maxPeg) {
                        maxPeg = Number(singles.players[i].pegs);
                        winnerIndex = i;
                    }
                }
                singles.players[winnerIndex].win = true;

                // update team wins
                if (singles.players[winnerIndex].team == "home") {
                    scoresheet_object.home_team.wins++;
                }
                if (singles.players[winnerIndex].team == "away") {
                    scoresheet_object.away_team.wins++;
                }
            });
        } catch (error) {
            console.log("Singles matches are incomplete");
        }

        // update wins on doubles games
        try {
            scoresheet_object.doubles.map(doubles => {
                let maxPeg = 0;
                let winnerIndex = -1;
    
                for (let i = 0; i < doubles.teams.length; i++) {
                    let teamPegs = 0;
    
                    doubles.teams[i].players.map(player => {
                        if (player.pegs == undefined) {
                            player.pegs = 0;
                        }

                        player.pegs = Number(player.pegs);
                        
                        teamPegs += Number(player.pegs);
                    });
    
                    if (teamPegs > maxPeg) {
                        maxPeg = teamPegs;
                        winnerIndex = i;
                    }
                }
                doubles.teams[winnerIndex].win = true;

                // update team wins
                if (doubles.teams[winnerIndex].team == "home") {
                    scoresheet_object.home_team.wins++;
                }
                if (doubles.teams[winnerIndex].team == "away") {
                    scoresheet_object.away_team.wins++;
                }
            });
        } catch (error) {
            console.log("Doubles matches are incomplete");
        }
        
        // update wins on triples games
        try {
            scoresheet_object.triples.map(triples => {
                let maxPeg = 0;
                let winnerIndex = -1;
    
                for (let i = 0; i < triples.teams.length; i++) {
                    let teamPegs = 0;
    
                    triples.teams[i].players.map(player => {
                        if (player.pegs == undefined) {
                            player.pegs = 0;
                        }

                        player.pegs = Number(player.pegs);
                        
                        teamPegs += Number(player.pegs);
                    });
    
                    if (teamPegs > maxPeg) {
                        maxPeg = teamPegs;
                        winnerIndex = i;
                    }
                }
                triples.teams[winnerIndex].win = true;

                // update team wins
                if (triples.teams[winnerIndex].team == "home") {
                    scoresheet_object.home_team.wins++;
                }
                if (triples.teams[winnerIndex].team == "away") {
                    scoresheet_object.away_team.wins++;
                }
            });
        } catch (error) {
            console.log("Triples matches are incomplete");
        }
    }
    await countPegs();



    function getAllPlayers() {
        const temp_unique_players = [];
        scoresheet_object.singles.map(singles => {
            singles.players.map(player => {
                if (player.name) {
                    player.name = player.name.trim();
                    // Check if player is in temp_unique_players
                    const existingPlayerIndex = temp_unique_players.findIndex(p => p.name === player.name);
                    if (existingPlayerIndex === -1) {
                        // Player is not in temp_unique_players, add them
                        temp_unique_players.push({
                            name: player.name,
                            tons: [],
                            pegs_high: [],
                            pegs: player.pegs,
                            team: player.team
                        });
                    } else {
                        // Player is already in temp_unique_players, increase their peg count
                        temp_unique_players[existingPlayerIndex].pegs += player.pegs;
                    }
                }
            });
        });

        scoresheet_object.doubles.map(doubles => {
            doubles.teams.map(team => {
                team.players.map(player => {
                    if (player.name) {
                        player.name = player.name.trim();
                        // Check if player is in temp_unique_players
                        const existingPlayerIndex = temp_unique_players.findIndex(p => p.name === player.name);
                        if (existingPlayerIndex === -1) {
                            // Player is not in temp_unique_players, add them
                            temp_unique_players.push({
                                name: player.name,
                                tons: [],
                                pegs_high: [],
                                pegs: player.pegs,
                                team: team.team
                            });
                        } else {
                            // Player is already in temp_unique_players, increase their peg count
                            temp_unique_players[existingPlayerIndex].pegs += player.pegs;
                        }
                    }
                });
            });
        });

        scoresheet_object.triples.map(triples => {
            triples.teams.map(team => {
                team.players.map(player => {
                    if (player.name) {
                        player.name = player.name.trim();
                        // Check if player is in temp_unique_players
                        const existingPlayerIndex = temp_unique_players.findIndex(p => p.name === player.name);
                        if (existingPlayerIndex === -1) {
                            // Player is not in temp_unique_players, add them
                            temp_unique_players.push({
                                name: player.name,
                                tons: [],
                                pegs_high: [],
                                pegs: player.pegs,
                                team: team.team
                            });
                        } else {
                            // Player is already in temp_unique_players, increase their peg count
                            temp_unique_players[existingPlayerIndex].pegs += player.pegs;
                        }
                    }
                });
            });
        });

        // Sort the array by player name in alphabetical order
        temp_unique_players.sort((a, b) => {
            // Convert names to lowercase for case-insensitive comparison
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });

        // finalise data
        const data = {home: [], away:[]};
        temp_unique_players.map(player => {
            if (player.team == "home") {
                data.home.push(player);
            }

            if (player.team == "away") {
                data.away.push(player);
            }
        });

        return data;
    }
    const all_unique_players = getAllPlayers();



    async function playerStatsElements() {
        // refresh the names and pegs to prevent duplicate players bug
        for (let i = 0; i < 8; i++) {
            document.getElementById(`home_playerstats_player_name_${i + 1}`).innerText = '----------';
            document.getElementById(`away_playerstats_player_name_${i + 1}`).innerText = '----------';
            document.getElementById(`home_playerstats_pegs_${i + 1}`).innerText = 'Pegs: 0';
            document.getElementById(`away_playerstats_pegs_${i + 1}`).innerText = 'Pegs: 0';
        }

        // add players into the scoresheet and read their tons and high pegs
        for (let i = 0; i < all_unique_players.home.length; i++) {
            document.getElementById(`home_playerstats_player_name_${i + 1}`).innerText = all_unique_players.home[i].name;
            document.getElementById(`home_playerstats_pegs_${i + 1}`).innerText = `Pegs: ${all_unique_players.home[i].pegs}`;

            // collect player tons
            const playerTonsText = document.getElementById(`home_playerstats_tons_input_${i + 1}`).value;
            if (playerTonsText) {
                all_unique_players.home[i].tons = playerTonsText.trim().split(" ").map(Number);
            }

            // collect player pegs
            const playerHighPegsText = document.getElementById(`home_playerstats_pegs_input_${i + 1}`).value;
            if (playerHighPegsText) {
                all_unique_players.home[i].pegs_high = playerHighPegsText.trim().split(" ").map(Number);
            }
        }

        for (let i = 0; i < all_unique_players.away.length; i++) {
            document.getElementById(`away_playerstats_player_name_${i + 1}`).innerText = all_unique_players.away[i].name;
            document.getElementById(`away_playerstats_pegs_${i + 1}`).innerText = `Pegs: ${all_unique_players.away[i].pegs}`;

            // collect player tons
            const playerTonsText = document.getElementById(`away_playerstats_tons_input_${i + 1}`).value;
            if (playerTonsText) {
                all_unique_players.away[i].tons = playerTonsText.trim().split(" ").map(Number);
            }

            // collect player pegs
            const playerHighPegsText = document.getElementById(`away_playerstats_pegs_input_${i + 1}`).value;
            if (playerHighPegsText) {
                all_unique_players.away[i].pegs_high = playerHighPegsText.trim().split(" ").map(Number);
            }
        }

        console.log(all_unique_players);

        // update scoresheet object with completed player stats
        scoresheet_object.home_team.player_stats = all_unique_players.home;
        scoresheet_object.away_team.player_stats = all_unique_players.away;
    }
    playerStatsElements();



















    document.getElementById('home_name_playerstats').innerText = input_data.home_team_name;
    document.getElementById('away_name_playerstats').innerText = input_data.away_team_name;


    // game results segment
    document.getElementById('home_results_games').innerText = `Games: ${scoresheet_object.home_team.wins}`;
    document.getElementById('away_results_games').innerText = `Games: ${scoresheet_object.away_team.wins}`;
    if (scoresheet_object.home_team.wins > scoresheet_object.away_team.wins) {
        document.getElementById('game_winner_name').innerText = `Winner: ${scoresheet_object.home_team.name}`;
    } else document.getElementById('game_winner_name').innerText = `Winner: ${scoresheet_object.away_team.name}`;


    console.log(scoresheet_object);
}





// upload all data to firestore
const form = document.getElementById('scoresheet_form'); 
const uploadDataBtn = document.getElementById('uploadDataBtn'); 

uploadDataBtn.addEventListener('click', function() {
    // Add a submit event listener to the form
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        const user = firebase.auth().currentUser;

        if (user) {
            try {
                const db = firebase.firestore();
                let created_at = `${input_data.match_creation_date} ${input_data.home_team_name} vs ${input_data.away_team_name}`;
                db.collection("Seasons").doc("2023-24 Summer").collection("Matches").doc(created_at).set(scoresheet_object);
                console.log(created_at);
                alert(created_at);
            } catch (error) {
                alert(error);
            }

        } else alert("You need to sign in");


    });
});






// TODO:
// get elemets on the UI to update

// add winter darts matches

// enforce 100-180 tons and 75-170 high pegs

// ignore case sensitivity AaBbCc

// get team names and player names from database

// season selection


















// get all matches and get every player and their stats and upload to firebase
async function getMatches() {
    const matches = [];

    // read a collection
    const db = firebase.firestore();
    db.collection("Seasons").doc("2023-24 Summer").collection("Matches")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                matches.push(doc.data());
            });

            // matches have been collected
            console.log(matches[0]);



            // get all unique players that played in the matchs
            const player_list = [];
            matches.map(current_match => {
                current_match.away_team.player_stats.map(player => {
                    // Check if the player name is not already in the array
                    if (!player_list.includes(player.name)) {
                        // Add the player name to the array
                        player_list.push(player.name);
                    }
                });

                current_match.home_team.player_stats.map(player => {
                    // Check if the player name is not already in the array
                    if (!player_list.includes(player.name)) {
                        // Add the player name to the array
                        player_list.push(player.name);
                    }
                });
            });



            // for each player update their stats
            for (let i = 0; i < player_list.length; i++) {

                let tons = [];
                let pegs_high = [];
                let teams_played_in = [];

                // [
                //     {
                //         name: "Dart Bods",
                //         games: 0
                //     },
                // ];

                // player data model
                let playerData = {
                    name: `${player_list[i]}`,
                    tons: tons,
                    tons_count: 0,
                    pegs_high: pegs_high,
                    peg_highest: 0,
                    pegs_count: 0,

                    total_wins: 0,
                    total_losses: 0,

                    singles: {
                        wins: 0,
                        losses: 0,
                        pegs: 0
                    },
                    doubles: {
                        wins: 0,
                        losses: 0,
                        pegs: 0
                    },
                    triples: {
                        wins: 0,
                        losses: 0,
                        pegs: 0
                    },
                    teams: {
                        wins: 0,
                        losses: 0,
                        pegs: 0
                    },

                    teams_played_in: teams_played_in
                }


                // fill in player data object
                matches.map(match => {
                    // get tons and pegs
                    // searches away team for player
                    match.away_team.player_stats.map(index => {
                        // if player matches then add their data to the object
                        if (index.name == player_list[i]) {

                            // Check if the team name is in the array
                            const foundTeam = teams_played_in.find(team => team.name === match.away_team.name);

                            // If the team is not found, add a new object to the array
                            if (!foundTeam) {
                                teams_played_in.push({
                                    name: match.away_team.name,
                                    games: 1 // Assuming the player must have played at least one game
                                });
                            } else {
                                // if the team was found in the list then just add to the game count
                                teams_played_in.find(team => team.games++);
                            }

                            // add tons and pegs
                            index.tons.map(e => tons.push(e));
                            playerData.tons_count += index.tons.length;

                            index.pegs_high.map(e => pegs_high.push(e));
                            playerData.pegs_count += index.pegs;
                        }
                    });

                    // searches home team for player
                    match.home_team.player_stats.map(index => {
                        // if player matches then add their data to the object
                        if (index.name == player_list[i]) {

                            // Check if the team name is in the array
                            const foundTeam = teams_played_in.find(team => team.name === match.home_team.name);

                            // If the team is not found, add a new object to the array
                            if (!foundTeam) {
                                teams_played_in.push({
                                    name: match.home_team.name,
                                    games: 1 // Assuming the player must have played at least one game
                                });
                            } else {
                                // if the team was found in the list then just add to the game count
                                teams_played_in.find(team => team.games++);
                            }

                            // add tons and pegs
                            index.tons.map(e => tons.push(e));
                            playerData.tons_count += index.tons.length;

                            index.pegs_high.map(e => pegs_high.push(e));
                            playerData.pegs_count += index.pegs;
                        }
                    });

                    // get wins and losses
                    // singles
                    match.singles.map(game => {
                        game.players.map(player => {
                            if (player.name == player_list[i]) {
                                if (player.win == true) {
                                    playerData.singles.wins++;
                                    playerData.total_wins++;
                                }
                                if (player.win == false) {
                                    playerData.singles.losses++;
                                    playerData.total_losses++;
                                }
                                playerData.singles.pegs += player.pegs;
                            }
                        });
                    });

                    // doubles
                    match.doubles.map(game => {
                        game.teams.map(team => {
                            team.players.map(player => {
                                if (player.name == player_list[i]) {
                                    if (team.win == true) {
                                        playerData.doubles.wins++;
                                        playerData.total_wins++;
                                    }
                                    if (team.win == false) {
                                        playerData.doubles.losses++;
                                        playerData.total_losses++;
                                    }
                                    playerData.doubles.pegs += player.pegs;
                                }
                            });
                        });
                    });

                    // triples
                    match.triples.map(game => {
                        game.teams.map(team => {
                            team.players.map(player => {
                                if (player.name == player_list[i]) {
                                    if (team.win == true) {
                                        playerData.triples.wins++;
                                        playerData.total_wins++;
                                    }
                                    if (team.win == false) {
                                        playerData.triples.losses++;
                                        playerData.total_losses++;
                                    }
                                    playerData.triples.pegs += player.pegs;
                                }
                            });
                        });
                    });

                    if (Math.max(...pegs_high) >= 75) {
                        playerData.peg_highest = Math.max(...pegs_high);
                        console.log(Math.max(...pegs_high));
                    }
                });
            
                // add player data to firestore
                console.log(playerData);
                db.collection("Seasons").doc("2023-24 Summer").collection("Players").doc(`${player_list[i]}`).set(playerData);



                // name dropdown
                const listContainer = document.getElementById('namesList');
                listContainer.innerHTML += `<option value="${playerData.name}"></option>`;
            }



        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}

// getMatches();