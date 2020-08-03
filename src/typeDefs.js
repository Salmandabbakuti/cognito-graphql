const typeDefs = `

type Query {
  login(username:String!, password:String!):loginResponse!
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

}
type response {
    data: String!
}`

export default typeDefs;