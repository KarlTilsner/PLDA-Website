// Select all elements
let allElements = document.querySelectorAll('*');

// Create an array to store the IDs
let input_data = {};

// Loop through the NodeList
allElements.forEach(function(element) {
    // Add event listener if the element has an ID
    if (element.id) {
        element.addEventListener('input', function() {
            input_data[element.id] = element.value;
            // console.log(input_data);
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


function updateScoresheet() {
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
    console.log(scoresheet_object);
}




