const {Challenge, User, UserChallenge} = require('../models/index')
  class UserController {
  
  static getUser (req, res){
    User.findAll(/* {
      where:{
        [Op.notLike]: '%hat'
      }
    } */)
    .then(data=>{
      res.render('user', {user: data})
    })
    .catch(err=>{
      res.send(err)
    })
  }
  static getScore(req, res){
    let id = req.params.id
    let dataChallange
     Challenge.findAll()
     .then(data=>{
      dataChallange = data
      return User.findByPk(id)
     })
     .then(data=>{
      res.render('formScoring', {challenge:dataChallange, user:data})
     })
     .catch(err=>{
       res.send(err)
     })
  }
  static postScore(req, res){
    let id = req.params.id
    let body = req.body
    let data = {
      ChallengeId:body.ChallengeId,
      UserId: id,
      Score: Number(body.score)
    }
    UserChallenge.create(data)
    .then(data=>{
      res.redirect('/user')
      console.log(body)
    })
    .catch(err=>{
      res.send(err)
    })
  }
  static getUserUser(req, res){
    User.findAll()
    .then(data=>{
      res.render('userUser', {user: data})
    })
    .catch(err=>{
      res.send(err)
    })
  }
  static getUserScore(req, res){
    let id = req.params.id
    let userData;
    User.findByPk(id, {include:Challenge})
    .then(data=>{
      userData = data
      return UserChallenge.findAll({where:{UserId:id}})
    })
    .then(data =>{
      res.render('userScore', {user: userData, score:data})
    })
    .catch(err=>{
      res.send(err)
    })

  }
  static getUserScoreChart (req, res){
    let id = req.params.id
    let userData;
    User.findByPk(id, {include:Challenge})
    .then(data=>{
      userData = data
      return UserChallenge.findAll({where:{UserId:id}})
    })
    .then(data =>{
      let challenge =[]
      let score = []
      for (let i = 0; i < userData.Challenges.length; i ++ ){
        challenge.push(userData.Challenges[i].name)
        score.push(data[i].Score)
        }
        res.render('chart',{challenge: challenge, score:score})
    })
    .catch(err=>{
      res.send(err)
    })
  }

}

module.exports = UserController;