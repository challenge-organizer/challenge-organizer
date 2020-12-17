const {Challenge, User, UserChallenge} = require('../models/index')
  class UserController {
  
  static getUser (req, res){
    User.findAll()
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
      res.redirect('/challenge/user')
      console.log(body)
    })
    .catch(err=>{
      res.send(err)
    })
  }
}

module.exports = UserController;