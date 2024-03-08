function loadSeasonStats () {
    const db = firebase.firestore();
    const players = [];

    console.log("ofvjnikerwiopjwef");

    async function getMatches() {
        // read a collection
        db.collection("Seasons").doc("2023-24 Summer").collection("Players")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, " => ", doc.data());
                    players.push(doc.data());
                });

                console.log(players);


            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            }
        );
    }

    getMatches();
}

