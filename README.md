# cognito-graphql
cognito workaround with graphql
- It serves default attributes i.e. email, phone, address, name while signup.
- If custom attributes are defined for pool, you can update signup mutation according to yours.
- Implemented API for ```signup```, ```login```, ```signout```,```email confirmation```, ```password change```, ```forgot password```

##### Steps:

>update ```.env``` according to your pool configuration

```
npm i
npm run dev #starts graphql server and playground at localhost 4000
```
