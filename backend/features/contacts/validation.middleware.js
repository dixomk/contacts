module.exports = function(req, res, next){
    const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { firstName, lastName, email } = req.body;

    if(firstName && lastName && validateEmail.test(email)){
        next();
        return;
    }
    res.json({
        error: {
            firstName: firstName ? '' : 'First name must be',
            lastName: lastName ? '' : 'Last name must be',
            email: email ? '' : 'Email name must be'
        }
    });
}
