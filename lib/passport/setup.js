"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGFzc3BvcnQvc2V0dXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBDQUEwQztBQUUxQyx1Q0FBdUM7QUFDdkMseUNBQXlDO0FBQ3pDLGdFQUFnRTtBQUNoRSw0REFBNEQ7QUFDNUQsK0RBQStEO0FBQy9ELHdDQUF3QztBQUV4QyxxREFBcUQ7QUFDckQsNEJBQTRCO0FBQzVCLE1BQU07QUFFTiw4REFBOEQ7QUFDOUQseURBQXlEO0FBQ3pELHdCQUF3QjtBQUN4QixNQUFNO0FBR04sZ0JBQWdCO0FBQ2hCLGtIQUFrSDtBQUNsSCxpQ0FBaUM7QUFDakMsZ0VBQWdFO0FBQ2hFLCtCQUErQjtBQUMvQix1QkFBdUI7QUFDdkIsZ0ZBQWdGO0FBRWhGLDREQUE0RDtBQUM1RCx1RkFBdUY7QUFDdkYsMENBQTBDO0FBQzFDLHFEQUFxRDtBQUNyRCw2REFBNkQ7QUFDN0Qsa0RBQWtEO0FBQ2xELHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLDBGQUEwRjtBQUMxRixnREFBZ0Q7QUFDaEQsc0NBQXNDO0FBRXRDLGlDQUFpQztBQUNqQywrQ0FBK0M7QUFDL0MsMkJBQTJCO0FBQzNCLCtFQUErRTtBQUMvRSxvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLFlBQVk7QUFDWixTQUFTO0FBQ1QsS0FBSztBQUVMLDZCQUE2QiJ9