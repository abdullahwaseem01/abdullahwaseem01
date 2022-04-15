const Mustache = require('mustache');
const fs = require('fs');
const request = require('request');
const MUSTACHE_MAIN_DIR = './main.mustache';

const api = 'https://www.officeapi.dev/api/quotes/random';
    request(api, (err, response, body) => {
        const data = JSON.parse(body);
        if (err) {
            console.log(err);
        } else {
                const firstname = data.data.character.firstname
                const lastname = data.data.character.lastname
                const content = data.data.content
                let DATA={
                    firstname: firstname,
                    lastname: lastname,
                    content: content
                }
                function generateReadMe() {
                    fs.readFile(MUSTACHE_MAIN_DIR, (err, data) =>  {
                      if (err) throw err;
                      const output = Mustache.render(data.toString(), DATA);
                      fs.writeFileSync('README.md', output);
                    });
                  }
                  generateReadMe();

        }
    });
