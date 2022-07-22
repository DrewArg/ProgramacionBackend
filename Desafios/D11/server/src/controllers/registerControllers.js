import pkg from 'body-parser';
import passport from 'passport'

const { json } = pkg

export const registerController = passport.authenticate('local-register',{
    
})


export const registerControllerOld = passport.authenticate('register', (err, user) => {
    // successRedirect: '/auth/successRegister',
    // failureRedirect: '/auth/failRegister',
    if (err) {
        console.log("ada");
        console.error(err);
    } else {
        json(user)
        console.log("user: " + user);
    }
    return user
})

// CON REACT ESTO NO ES NECESARIO
// export function successRegisterController(req, res) {
//     console.log();
//     // decirle al socket controller que mande un login de ok  al cliente
// }

// export function failRegisterController(req, res) {
//     // decirle al socket controller que mande un login de error  al cliente
//     res.status(400).json({ err: 'fallo el registro' })
// }