const routes = {
    heartbeat: 'api/heartbeat',
    scores: {
        create: '/api/scores', // add a new user with a score
        list: "/api/scores", // retrieve the top N users on the leaderboard
        update: '/api/scores/:accountId', // update a user's score
        retrieve: '/api/scores/:accountId', // retrieve a user's position on the leaderboard (+5 users above and below)
    }
}

export { routes }