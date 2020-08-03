import  Amplify, { Auth } from 'aws-amplify';
import poolData from '../config.js'
Amplify.configure({
    Auth: {
        region: poolData.REGION,
        userPoolId: poolData.USERPOOLID,
        userPoolWebClientId: poolData.CLIENTID
    }
});

const resolvers = {
    Query:{
    login: async (parent, args) => {
    try{
    await Auth.signIn(args.username, args.password);
    return {token:(await Auth.currentSession()).getIdToken().getJwtToken()};
    }catch(err){
        console.log(JSON.stringify(err))
        throw JSON.stringify(err.message);
        }
    }
},

 Mutation: {
    signup: async(parent, args) => {
          try{
           await Auth.signUp({
            username:args.username,
            password:args.password,
            attributes: {
             email:args.email,
             address:args.address,
             phone_number:args.phone,
             name: args.name
           }
         })
         return ({data:`Signup Successful. An OTP has sent on Email.`})
          }catch(err){
            console.log(JSON.stringify(err))
            throw JSON.stringify(err.message);}
       },
       changePassword: async(parent, args) =>{
           try {
            let user = await Auth.currentAuthenticatedUser()
            await Auth.changePassword(user, args.oldPassword, args.newPassword);
            return ({data:`Password Change Successful.`})
           }catch(err){
               console.log(JSON.stringify(err))
               throw JSON.stringify(err.message);
              }
       },
       forgotPasswordRequest: async(parent, args) => {
           try{
            await Auth.forgotPassword(args.username)
             return ({data:`Forgot password request submitted. an OTP has sent to your verified email.`})
           }catch(err){
               console.log(JSON.stringify(err))
               throw JSON.stringify(err);
           }
       },
       forgotPasswordChange: async(parent, args) => {
           try {
            await Auth.forgotPasswordSubmit(args.username, args.code, args.newPassword)
             return ({data:`Password Change Successful.`})
             }catch(err){
                 console.log(JSON.stringify(err))
               throw JSON.stringify(err.message);
             }
       },
       signout : async(parent, args) => {
           try{
            await Auth.signOut({global: true});
            return ({data:`You are signed out.`})
            }catch(err){
                console.log(JSON.stringify(err))
               throw JSON.stringify(err.message);
            }
       },
       confirmEmail: async(parent, args) =>{
           try{
           await Auth.confirmSignUp(args.username, args.code);
           return ({data:`Email Verified. now you can signin with your email.`})
           }catch(err){
               console.log(JSON.stringify(err))
               throw JSON.stringify(err.message);
           }
       }
   }
}
export default resolvers;