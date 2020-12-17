
const { User } = require('../models')
const { comparePassword, hashPassword } = require('../helpers/bcrypt');

const ChallengeContoller = require('./challege')



class Controller {
  static getRootHandler(req, res) {
    res.render('home')
  }
  static getRegisterHandler(req, res) {
    res.render('user-register')
  }
  static postRegisterHandler(req, res) {
    const newUser = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      password: hashPassword(req.body.password),
    };

    User.create(newUser)
      .then((data) => {
        res.redirect('/');
      })
      .catch((err) => {
        const error = [];
        for (let i = 0; i < err.errors.length; i++) {
          error.push(err.errors[i].message);
        }
        // res.redirect('/register', { error });
        res.send(error);
      });
  }
  static getLoginHandler(req, res) {
    res.render('user-login')
  }
  static postLoginHandler(req, res) {
    const username = req.body.username;
		const password = req.body.password;

		User.findOne({
			where: {
				username: username,
			},
		})
			.then((user) => {
				if (user && comparePassword(password, user.password)) {
					req.session.name = user.name;
					req.session.userId = user.id;
					res.redirect('/?login sukses');
				} else {
					res.send(`Password atau username salah`);
				}
			})
			.catch((err) => {
				res.send(err);
			});
  }
  static getLogoutHandler(req, res) {
    req.session.destroy(function (err) {
			if (err) {
				res.send(err);
			} else {
				res.redirect('/?logout berhasil');
			}
		});
  } 
}

module.exports = Controller;