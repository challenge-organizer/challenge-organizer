        
    function getScore(user, score){
        let result =[]
        for(let i = 0; i < user.Challenges.length; i ++){
          let temp = []
          for(let j = 0; j < score.length; i ++){
            if(user.Challanges[i].id === data[i].id){
              temp.push(user.Challenges[i].name)
              temp.push(score[i].score)
              result.push(temp)
            }
          }
        }
    }
    module.exports = getScore