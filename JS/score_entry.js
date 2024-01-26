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







async function updateScoresheet() {
    const scoresheet_object = {
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
    
                    if (singles.players[i].pegs > maxPeg) {
                        maxPeg = Number(singles.players[i].pegs);
                        winnerIndex = i;
                    }
                }
                singles.players[winnerIndex].win = true;
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
                        
                        teamPegs += Number(player.pegs);
                    });
    
                    if (teamPegs > maxPeg) {
                        maxPeg = teamPegs;
                        winnerIndex = i;
                    }
                }
                doubles.teams[winnerIndex].win = true;
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
                        
                        teamPegs += Number(player.pegs);
                    });
    
                    if (teamPegs > maxPeg) {
                        maxPeg = teamPegs;
                        winnerIndex = i;
                    }
                }
                triples.teams[winnerIndex].win = true;
            });
        } catch (error) {
            console.log("Triples matches are incomplete");
        }
    }
    await countPegs(); 


    







    



    // need to collect all unique names and respective pegs before doing this function
    async function playerStatsElements() {
        document.getElementById('home_playerstats_player_name_1').innerText = input_data.home_singles_player_name_1;
        document.getElementById('home_playerstats_player_name_2').innerText = input_data.home_singles_player_name_2;
        document.getElementById('home_playerstats_player_name_3').innerText = input_data.home_singles_player_name_3;
        document.getElementById('home_playerstats_player_name_4').innerText = input_data.home_singles_player_name_4;
        document.getElementById('home_playerstats_player_name_5').innerText = input_data.home_singles_player_name_5;
        document.getElementById('home_playerstats_player_name_6').innerText = input_data.home_singles_player_name_6;
        document.getElementById('home_playerstats_player_name_7').innerText = input_data.home_singles_player_name_1;

        document.getElementById('away_playerstats_player_name_1').innerText = input_data.away_singles_player_name_1;
        document.getElementById('away_playerstats_player_name_2').innerText = input_data.away_singles_player_name_2;
        document.getElementById('away_playerstats_player_name_3').innerText = input_data.away_singles_player_name_3;
        document.getElementById('away_playerstats_player_name_4').innerText = input_data.away_singles_player_name_4;
        document.getElementById('away_playerstats_player_name_5').innerText = input_data.away_singles_player_name_5;
        document.getElementById('away_playerstats_player_name_6').innerText = input_data.away_singles_player_name_6;
        document.getElementById('away_playerstats_player_name_7').innerText = input_data.away_singles_player_name_1;
    }
    playerStatsElements();



    document.getElementById('home_name_playerstats').innerText = input_data.home_team_name;
    document.getElementById('away_name_playerstats').innerText = input_data.away_team_name;

    console.log(scoresheet_object);
}




// get total wins for each team
// determine who won which game
// generate each players stats
// get tons for each player
// get high pegs for each player
// make all numbers actual numbers