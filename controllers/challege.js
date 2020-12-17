
const {Challenge, User, UserChallenge} = require('../models/index')

class ChallengeController {
  static getChallengeHandler(req, res) {
    Challenge.findAll()
    .then(data=>{
      res.render('challengeHandler', {challenges: data})
      console.log(data)
    })
    .catch(err=>{
      res.send(err)
    })
  }
  static getChallengeAddHandler(req, res) {
    res.render('formAddChallenge')
  }
  static postChallengeAddHandler(req, res) {
    let body = req.body
    let data = {
      name:body.name,
      challengeCode:body.challengeCode,
      isActive:true
    }
    Challenge.create(data)
    .then(data=>{
      res.redirect('/challenge')
      console.log('Berhasil menambah data', data)
    })
    .catch(err=>{
      res.render('formAddChallenge',{msg:err.errors[0].message})
    })

  }
  static getChallengeEditHandler(req, res) {
    let id = req.params.id
    Challenge.findByPk(id)
    .then(data=>{
      console.log(data)
      res.render('formEdit',{challenge:data})
    })
    .catch(err=>{
      res.send(err)
    })
  }
  static postChallengeEditHandler(req, res) {
    let id = req.params.id
    let body = req.body
    let data={
      name:body.name,
      challengeCode:body.challengeCode
    }
    Challenge.update(data, {where:{id}})
    .then(data=>{
      res.redirect('/challenge')
    })
    .catch(err=>{
      res.send(err)
    })

  }
  static getChallengeDeleteHandler(req, res) {
    let id = req.params.id
    Challenge.destroy({where:{id}})
    .then(data=>{
      res.redirect('/challenge')
    })
    .catch(err=>{
      res.send(err)
    })
  }
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

module.exports = ChallengeController;