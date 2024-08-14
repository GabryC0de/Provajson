// gotta work on this mother fucking function
// or maybe on the admin.js data management
export function add(year, teamsNames, membersNamesByTeam, membersRolesByTeam, teamsImgs, membersImgs) {
    fetch('../../Node/prova.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            let yearTeamsDict = { "yearTeams": [] };
            data.years.push(yearTeamsDict);

            teamsNames.forEach((team, index) => {
                let teamInfosDict = {
                    "year": year,
                    "teamName": team,
                    "members": membersNamesByTeam[index],
                    "membersRole": membersRolesByTeam[index],
                    "img": teamsImgs[index] || "",  // Assuming you're handling images
                    "membersImgs": membersImgs[index] || []
                };
                data.years[data.years.length - 1].yearTeams.push(teamInfosDict);
            });

            const updatedJsonData = JSON.stringify(data, null, 2);

            return fetch('http://127.0.0.1:3000/save-json', {  // Update the URL to match server port
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: updatedJsonData
            });
        })
        .then(response => {
            if (response.ok) {
                console.log('JSON data saved successfully!');
            } else {
                console.error('Failed to save JSON data.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


export function show() {
    fetch('../../Node/prova.json')
        .then(response => response.json())
        .then(data => {
            console.log(data.years)
        });
}

export function erase(){
    fetch('../../Node/prova.json')
}