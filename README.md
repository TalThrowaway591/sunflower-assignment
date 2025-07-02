# Sunflower Assignment

### About 

###  
- This is by no means a production-ready project, there are many points of improvement, i'll specify some below:
- 

### Setup
- I've created scripts to easily spin-up the project dependencies (at the moment only a postgres container)
- To setup the postgres container, and seed mock data, please run the following script: `./scripts/init.sh`.
- In case the script file lacks permissions, please run `chmod +x ./scripts/init.sh`.

### Entity Relationship Diagram
- in this scope, there's a one-to-one relationship between accounts and account_scores, in the future, when multiple games are added, a new parameter for 'game_id' should be added to account_scores and there will be a one-to-many relationship between accounts & account_scores.
![text](assets/ERD.png)