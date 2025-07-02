#!/bin/bash

curl \
    -X GET \
    -G \
    -d rowAmount=4 \
    http://localhost:3000/api/scores


    curl \
    -X POST \
    -d accountId=test \
    -d score=44 \
    http://localhost:3000/api/scores

        curl \
    -X PATCH \
    -d score=45 \
    http://localhost:3000/api/scores/test2