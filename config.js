require('dotenv').config()

     const poolData = {
        USERPOOLID:process.env.USER_POOL_ID,
        REGION:process.env.REGION,
        CLIENTID:process.env.CLIENT_ID
       }
 
export default poolData;