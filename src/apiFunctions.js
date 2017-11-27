/* GET home page. */
const token = require('../public/json/key');
// var router = express.Router();
var fetch = require('node-fetch');
const getStats = (res) => {
    let pubgNickname = 'daBack';

    fetch('https://api.pubgtracker.com/v2/profile/pc/'
    + pubgNickname + '?region=eu&season=2017-pre4', {
        method: 'GET',
        headers: { "TRN-Api-Key": token.key },
    })
        .then((response) => response.json())
        .then((responseJson) => {
            res.json({test: responseJson});
        });
};

const getMatchHistory = (req, res) => {
    let id = req.params.id;

    fetch('https://api.pubgtracker.com/v2/matches/pc/' + id, {
        method: 'GET',
        headers: { "TRN-Api-Key": token.key },
    })
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            console.log(json);
            res.json(json);
        });
};
// .then((res) => res.json())
// .then((resJson) => {
//     res.json({resJson});
// })
//
// async () => {
//     let summoner_name = 'b%C3%A4ck';
//     let the_response
//     const ip = await
//     fetch('https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/' + summoner_name, {
//         method: 'GET',
//         headers: { "Accept-Charset": "application/x-www-form-urlencoded;
//         charset=UTF-8","X-Riot-Token": token.key },
//     })
//     .then((response) => response.json())
//     .then((responseJson) => {
//         the_response = responseJson;
//         res.json({test: the_response});
//     })
//     .catch((error) => {
//         console.error(error);
//     })
// };

// const getAvatar = (req, res) => {
//     // var test = getStats(req, res);
//     // console.log(test);
// };

module.exports = {
    getStats: getStats,
    // getAvatar: getAvatar,
    getMatchHistory: getMatchHistory
};

// .then((res) => res.json())
// .then((resJson) => {
//     res.json({resJson});
// })
// .catch((error) => {
//     console.error(error);
// });
