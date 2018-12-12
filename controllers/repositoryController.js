const express = require("express");
const router = express.Router();
const axios = require('axios')


router.get("/search", async (req, res) => {
    const query = req.query['q'];
    console.log(query, "<---- this is query")
    // console.log(typeof query, '<---this is type of the users input')
    const querySplit = query.split('/')
    // console.log(querySplit, "<----- this is query split")
    const user = querySplit[3]
    const repo = querySplit[4]
    axios.get(`https://api.github.com/repos/${user}/${repo}/pulls`)
        .then((response) => {
            let pullRequest = [];
            const githubResponse = response;
            res.render('searchResults.ejs', {
                pullData: githubResponse.data,
                pulls: pullRequest,
                repo: repo,
                user: user
            })
        }).catch((err) => {
            console.log(err)
        })
});


router.get('/show', async (req, res) => {
    const query = req.query['q'];

    axios.get(`${query}`)
        .then((response) => {
            githubResponse = response
            res.render('show.ejs', {
                pullRequests: githubResponse.data
            })
        }).catch((err) => {
            console.log(err)
        })
})

module.exports = router;