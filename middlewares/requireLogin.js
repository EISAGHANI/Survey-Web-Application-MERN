module.exports = (req, res, next) => {
    // the below code is to check wether the user is logged in or not
    if(!req.user){
        return res.status(401).send({ error: 'You must log in!'});
    }

    next();
};