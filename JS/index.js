// console.log(firebase);


const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');





const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}</h3><p>Your ID is: ${user.uid}</p>`;

    } else {
        // not signed in
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
    }
});












const db = firebase.firestore();

// add match data
let created_at = "21-Jan-2024";
db.collection("Seasons").doc("2024 Winter").collection("Matches").doc(created_at).set({
    home_team: {
        name: "Flukes Count",
        wins: 7,
        player_stats: [
            {
                name: "Linda",
                tons: [100],
                pegs_high: [75],
                pegs: 3
            },
            {
                name: "Beau",
                tons: [100, 108],
                pegs_high: [],
                pegs: 3
            },
            {
                name: "Shontelle",
                tons: [100],
                pegs_high: [],
                pegs: 3
            },
            {
                name: "Liam",
                tons: [101],
                pegs_high: [],
                pegs: 3
            },
            {
                name: "Marg",
                tons: [],
                pegs_high: [],
                pegs: 0
            },
            {
                name: "Mick",
                tons: [],
                pegs_high: [],
                pegs: 1
            },
        ]
    },
    away_team: {
        name: "Dart Bods",
        wins: 4,
        player_stats: [
            {
                name: "Matthew Phillips",
                tons: [100],
                pegs_high: [],
                pegs: 3
            },
            {
                name: "Chad Smalbil",
                tons: [100, 101],
                pegs_high: [],
                pegs: 0
            },
            {
                name: "Alex Salter",
                tons: [],
                pegs_high: [],
                pegs: 0
            },
            {
                name: "Martin Kennett",
                tons: [100, 100, 100, 100],
                pegs_high: [],
                pegs: 2
            },
            {
                name: "Josh Schoeman",
                tons: [],
                pegs_high: [],
                pegs: 0
            },
            {
                name: "Karl Tilsner",
                tons: [180, 100, 100, 100],
                pegs_high: [170],
                pegs: 6
            },
        ]
    },
    singles: [
        {
            matchId: "match_1",
            players: [
                { name: "Matthew Phillips", pegs: 2, team: "away", win: true },
                { name: "Marg", pegs: 0, team: "home", win: false }
            ]
        },
        {
            matchId: "match_2",
            players: [
                { name: "Chad Smalbil", pegs: 1, team: "away", win: false },
                { name: "Liam", pegs: 2, team: "home", win: true }
            ]
        },
        {
            matchId: "match_3",
            players: [
                { name: "Alex Salter", pegs: 0, team: "away", win: false },
                { name: "Beau", pegs: 2, team: "home", win: true }
            ]
        },
        {
            matchId: "match_4",
            players: [
                { name: "Martin Kennett", pegs: 1, team: "away", win: false },
                { name: "Linda", pegs: 2, team: "home", win: true }
            ]
        },
        {
            matchId: "match_5",
            players: [
                { name: "Josh Schoeman", pegs: 0, team: "away", win: false },
                { name: "Shontelle", pegs: 2, team: "home", win: true }
            ]
        },
        {
            matchId: "match_6",
            players: [
                { name: "Karl Tilsner", pegs: 2, team: "away", win: true },
                { name: "Mick", pegs: 0, team: "home", win: false }
            ]
        }
    ],
    reverse_singles: [
        {
            matchId: "match_1",
            players: [
                { name: "Matthew Phillips", pegs: 2, team: "away", win: true },
                { name: "Marg", pegs: 0, team: "home", win: false }
            ]
        },
        {
            matchId: "match_2",
            players: [
                { name: "Chad Smalbil", pegs: 1, team: "away", win: false },
                { name: "Liam", pegs: 2, team: "home", win: true }
            ]
        },
        {
            matchId: "match_3",
            players: [
                { name: "Alex Salter", pegs: 0, team: "away", win: false },
                { name: "Beau", pegs: 2, team: "home", win: true }
            ]
        },
        {
            matchId: "match_4",
            players: [
                { name: "Martin Kennett", pegs: 1, team: "away", win: false },
                { name: "Linda", pegs: 2, team: "home", win: true }
            ]
        },
        {
            matchId: "match_5",
            players: [
                { name: "Josh Schoeman", pegs: 0, team: "away", win: false },
                { name: "Shontelle", pegs: 2, team: "home", win: true }
            ]
        },
        {
            matchId: "match_6",
            players: [
                { name: "Karl Tilsner", pegs: 2, team: "away", win: true },
                { name: "Mick", pegs: 0, team: "home", win: false }
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
                        { name: "Matthew Phillips", pegs: 1 },
                        { name: "Alex Salter", pegs: 0 }
                    ],
                    win: false
                },
                {
                    team: "home",
                    players: [
                        { name: "Beau", pegs: 1 },
                        { name: "Liam", pegs: 1 }
                    ],
                    win: true
                }
            ]
        },
        {
            matchId: "match_2",
            teams: [
                {
                    team: "away",
                    players: [
                        { name: "Chad Smalbil", pegs: 0 },
                        { name: "Karl Tilsner", pegs: 1 }
                    ],
                    win: false
                },
                {
                    team: "home",
                    players: [
                        { name: "Linda", pegs: 1 },
                        { name: "Shontelle", pegs: 1 }
                    ],
                    win: true
                }
            ]
        },
        {
            matchId: "match_3",
            teams: [
                {
                    team: "away",
                    players: [
                        { name: "Josh Schoeman", pegs: 2 },
                        { name: "Martin Kennett", pegs: 0 }
                    ],
                    win: true
                },
                {
                    team: "home",
                    players: [
                        { name: "Mick", pegs: 1 },
                        { name: "Marg", pegs: 0 }
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
                        { name: "Matthew Phillips", pegs: 0 },
                        { name: "Alex Salter", pegs: 0 },
                        { name: "Josh Schoeman", pegs: 0 }
                    ],
                    win: false
                },
                {
                    team: "home",
                    players: [
                        { name: "Beau", pegs: 1 },
                        { name: "Liam", pegs: 0 },
                        { name: "Linda", pegs: 0 }
                    ],
                    win: true
                }
            ]
        },
        {
            matchId: "match_2",
            teams: [
                {
                    team: "away",
                    players: [
                        { name: "Chad Smalbil", pegs: 0 },
                        { name: "Martin Kennett", pegs: 1 },
                        { name: "Karl Tilsner", pegs: 0 }
                    ],
                    win: true
                },
                {
                    team: "home",
                    players: [
                        { name: "Mick", pegs: 0 },
                        { name: "Shontelle", pegs: 0 },
                        { name: "Marg", pegs: 0 }
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
                        { name: "Matthew Phillips", pegs: 0 },
                        { name: "Alex Salter", pegs: 0 },
                        { name: "Josh Schoeman", pegs: 0 },
                        { name: "Karl Tilsner", pegs: 0 }
                    ],
                    win: false
                },
                {
                    team: "home",
                    players: [
                        { name: "Beau", pegs: 1 },
                        { name: "Liam", pegs: 0 },
                        { name: "Linda", pegs: 0 },
                        { name: "Mick", pegs: 0 }
                    ],
                    win: true
                }
            ]
        }
    ]
});


const matches = [];

async function getMatches() {
    // read a collection
    db.collection("Seasons").doc("2024 Winter").collection("Matches")
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

                });
            
                // add player data to firestore
                console.log(playerData);
                // db.collection("Seasons").doc("2024 Winter").collection("Players").doc(`${player_list[i]}`).set(playerData);
            }



        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}



getMatches();