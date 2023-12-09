
function printParticipants() {
    var numberOfParticipants = prompt("Enter the number of participants:");
    numberOfParticipants = parseInt(numberOfParticipants, 10);

    var participants = [];

    for (var i = 0; i < numberOfParticipants; i++) {
        participants.push(prompt("Enter the name of participant " + (i+1) + ":"));
    }

    participants.sort();

    var participantsHtml = "<ol>";

    for (var i = 0; i < participants.length; i++) {
        participantsHtml += "<li>" + participants[i] + "</li>";
    }

    participantsHtml += "</ol>";

    document.write(participantsHtml);
}

printParticipants();
