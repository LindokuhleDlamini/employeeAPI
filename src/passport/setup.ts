// //import { e } from "../core/Employee";

// import bcrypt = require("bcryptjs");
// import passport = require("passport");
// import { MongoClientFactory } from "../database/MongoClient";
// const LocalStrategy = require("passport-local").Strategy;
// //import { UserService } from "../services/EmployeeService";
// const userService = new UserService()

// passport.serializeUser((user: any, done: any) => {
//     done(null, user._id);
// });

// passport.deserializeUser(async (id: string, done: any) => {
//     const user = await userService.getUserDetails(id);
//     done(null, user);
// });


// passport.use(
//     new LocalStrategy({ usernameField: "username" }, async (username: string, password: string, done: any) => {
//         console.log(username);
//         let user = await userService.getByUsername(username);
//         console.log({user});
//         if (!user) {
//             const newUser = ''//new User('','',username,'',password, '', '');

//             bcrypt.genSalt(10, (err: any, salt: any) => {
//                 bcrypt.hash(newUser.password, salt, async (err: any, hash: any) => {
//                     if (err) throw err;
//                     newUser.hashedPassword = hash;
//                     await userService.createUser(newUser);
//                     return done(null, newUser);
//                 });
//             });
//         } else {
//             bcrypt.compare(password, user.hashedPassword, (err: any, isMatch: any) => {
//                 console.log({user, isMatch});
//                 if (err) throw err;

//                 if (isMatch) {
//                     return done(null, user);
//                 } else {
//                     return done(null, false, { message: "Wrong password" });
//                 }
//             });
//         }
//     })
// );

// module.exports = passport;