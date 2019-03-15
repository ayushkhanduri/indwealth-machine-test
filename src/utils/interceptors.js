import fetchIntercept from 'fetch-intercept';
import { message } from 'antd';

const unregister = fetchIntercept.register({
    request: (url,config) =>{

        config = config.headers || {
            headers: {}
        };

        //this could be dynamic and can be stored in localstorage
        config.headers["Authorization"] = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMDI3LCJ1c2VybmFtZSI6Ijk4MTE4ODU5ODkiLCJleHAiOjE1NTI3MjQyNDQsImVtYWlsIjoia2xzYWRqbGFAYXNkLmFjb20iLCJtb2JpbGUiOiI5ODExODg1OTg5Iiwib3JpZ19pYXQiOjE1NTI2Mzc4NDR9.LQihRPLDU2Smf0_Zn-629-J0DLmntpXEgD9O5jPbbXg";

        return [url,config];
    },
    response: (response) => {
        console.log(response);
        if(response.status === 200)
            message.success("Data fetched successfully !");
        else if (response.status === 401) 
            message.error("Unauthorized Request! Please pass in the token");
        return response;
    },
    responseError: (error) => {
        message.error("There was an error loading the data");
        return Promise.reject(error);
    }
});


export default unregister;