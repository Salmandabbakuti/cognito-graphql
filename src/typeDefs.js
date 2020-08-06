const typeDefs = `
type Query {
  login(username:String!, password:String!):loginResponse!
  userInfo:user!
}
type user {
  name:String
  address:String
  email:String
  phone_number:String
  email_verified:Boolean
  
}
type loginResponse{
    token: String!
}
type Mutation {
  signup(name:String!, email:String!, phone:String!, address:String!, username:String!, password:String!):response!
  changePassword(oldPassword:String!, newPassword:String!):response!
  forgotPasswordRequest(username:String!):response!
  forgotPasswordChange(username:String!, code:String!, newPassword:String!):response!
  signout:response!
  confirmEmail(username:String!, code:String!):response!
  resendConfirmationEmail(username:String!):response!
  updateUser(email:String, name:String, address: String, phone_number:String):response!
}
type response {
    data: String!
}`

export default typeDefs;
