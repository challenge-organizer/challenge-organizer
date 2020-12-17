const isLoggedIn = function (req, res, next) {
	if (req.session.userId) {
		next();
	} else {
		res.redirect('/login?error=Kamu perlu login untuk fitur itu');
	}
};

const isLoggedOut = function (req, res, next) {
	const name = req.session.name;
	if (req.session.userId) {
		res.redirect(`/?error=Kamu sudah Login hei, ${name}`);
	} else {
		next();
	}
};

const isAdmin = function (req, res, next) {
	if (req.session.role === 'Admin') {
		next();
	} else {
		res.redirect('/?error=Kamu bukan admin');
	}
};

module.exports = {
	isLoggedIn,
	isLoggedOut,
	isAdmin
};