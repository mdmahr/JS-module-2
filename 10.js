
function votingProgram() {

    var numberOfCandidates = parseInt(prompt("Enter the number of candidates:"), 10);
    var candidates = [];

    for (var i = 0; i < numberOfCandidates; i++) {
        var name = prompt("Name for candidate " + (i + 1) + ":");
        candidates.push({ name: name, votes: 0 });
    }

    var numberOfVoters = parseInt(prompt("Enter the number of voters:"), 10);

    for (var i = 0; i < numberOfVoters; i++) {
        var vote = prompt("Who do you vote for? (Voter " + (i + 1) + "):");
        if (vote) {

            var candidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());
            if (candidate) {
                candidate.votes++;
            }
        }
    }

    candidates.sort((a, b) => b.votes - a.votes);

    // Announce the winner and the results
    console.log("The winner is " + candidates[0].name + " with " + candidates[0].votes + " votes.");
    console.log("Results:");
    candidates.forEach(c => console.log(c.name + ": " + c.votes + " votes"));
}

votingProgram();
