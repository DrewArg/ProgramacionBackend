import pkg from 'body-parser';
import passport from 'passport'

const { json } = pkg
export const registerController = passport.authenticate('register', (err, user) => {
        if (err) {
        console.log("ada");
        console.error(err);
    } else {
        json(user)
        console.log("user: " + user);
    }
    return user
})

