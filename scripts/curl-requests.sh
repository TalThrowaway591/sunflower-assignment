#!/bin/bash

# retrieve the top 5 users on the leaderboard
curl \
    -X GET \
    -G \
    -d rowAmount=5 \
    http://localhost:3000/api/scores

# add a new user
curl \
    -X POST \
    -d accountId=test \
    -d score=44 \
    http://localhost:3000/api/scores

# change an existing user's score
curl \
    -X PATCH \
    -d score=45 \
    http://localhost:3000/api/scores/test2

# retrieve a user's score (+ 5 scores below and above it)
curl \
    http://localhost:3000/api/scores/account_akvhmzy