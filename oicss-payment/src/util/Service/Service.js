import React from 'react'
import axios from 'axios';
export const URL="http://13.233.172.20/api/" // PROD URL
// export const URL="http://127.0.0.1:8000/api/" // LOCAL URL

export const ENDPOINTS=
{
USER_LOGIN:"ranger/rangerLogin/",
PRICING:"pricing/getPricingDetails"
}

export const UserLogin=async (body)=>{
    return await axios.post(URL+ENDPOINTS.USER_LOGIN,
        body,{
            params:""
        },{
            timeout:3*60*1000
        }
        )
}

export const GetTable=async ()=>{
return await axios.get(URL+ENDPOINTS.PRICING,
    {
        params:{
            access_token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtb2JpbGUiOjg0NjAyNzY3OTd9.qfVD9lzabj3J59wqA1eYLb9bb7-_sb6GzLtV9t7HyLw",
            parking_table_id:2029
    }
}
    )

}