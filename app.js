const Mustache = require('mustache');
const fs = require('fs');
const request = require('request');
const MUSTACHE_MAIN_DIR = './main.mustache';


const db = [
    {   
        firstname: 'Jim',
        lastname: 'Halpert',
        quote: 'Bears. Beets. Battlestar Galactica.'

    },
    {
        firstname: 'Michael',
        lastname: 'Scott',
        quote: 'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.'
    },
    {
        firstname: 'Dwight',
        lastname: 'Schrute',
        quote: 'Whenever I’m about to do something, I think, “Would an idiot do that?” And if they would, I do not do that thing.'
    },
    {
        firstname: 'Andy',
        lastname: 'Bernard',
        quote: 'I wish there was a way to know you’re in the good old days before you’ve actually left them.'
    },
    {
        firstname: 'Pam',
        lastname: 'Beesly',
        quote: 'I never thought I’d say this, but I think I ate too much bone marrow.'
    },
    {
        firstname: 'Angela',
        lastname: 'Martin',
        quote: 'I enjoy having breakfast in bed. I like waking up to the smell of bacon, sue me. And since I don’t have a butler, I have to do it myself. So, most nights before I go to bed, I will lay six strips of bacon out on my George Foreman Grill. Then I go to sleep. When I wake up, I plug in the grill. I go back to sleep again. Then I wake up to the smell of crackling bacon. It is delicious, it’s good for me. It’s the perfect way to start the day.'
    },
    {
        firstname: 'Kevin',
        lastname: 'Malone',
        quote: 'I just want to lie on the beach and eat hot dogs. That’s all I’ve ever wanted.'
    },
    {
        firstname: 'Oscar',
        lastname: 'Martinez',
        quote: 'Actually, I’m glad you asked, because I wanted to take this opportunity to clarify that I do not, in fact, have a peanut allergy. I lied because I wanted you to stop offering me peanut butter sandwiches.'
    }
]

const data = db[Math.floor(Math.random() * db.length)]

const firstname = data.firstname
const lastname = data.lastname
const content = data.quote
let DATA = {
    firstname: firstname,
    lastname: lastname,
    content: content
}
function generateReadMe() {
    fs.readFile(MUSTACHE_MAIN_DIR, (err, data) => {
        if (err) throw err;
        const output = Mustache.render(data.toString(), DATA);
        fs.writeFileSync('README.md', output);
    });
}
generateReadMe();
