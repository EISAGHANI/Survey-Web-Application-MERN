module.exports = (req, res, next) => {
    // the below code is to check wether the user has credit or not
    if(req.user.credits < 1){
        return res.status(403).send({ error: 'Not enough credits!'});
    }

    next();
};