const jokeEle = document.getElementById('jokesPara');
jokeEle.textContent = 'Loading dad joke...';

fetch(' https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        jokeEle.textContent = jokeText;
    })
    .catch(error => {
        console.error('Error fetching joke:', error);
        jokeEle.textContent = 'Error loading joke. Please try again.';
    });
