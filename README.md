# challenge-organizer
Pair project web app

Catatan Cakra:
Model User:
npx sequelize model:generate --name User --attributes first_name:string,last_name:string,username:string,password:string,isAdmin:boolean

Model Challange:
npx sequelize model:generate --name Challenge --attributes name:string,challengeCode:string,isActive:boolean

Model UserChallange:
npx sequelize model:generate --name UserChallenge --attributes UserId:integer,ChallengeId:integer,Score:integer

