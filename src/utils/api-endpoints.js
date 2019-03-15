class ApiRequest {
    constructor() {
        this.host = "https://dev.indiawealth.in/api/v2";
    }

    get(url) {
        return fetch(url,{}).then(response=>{
            if(response && response.status === 200)
                return response.json();
            return Promise.reject("Error when fetching data");
        } );
    }
}


class FundsList extends ApiRequest { 
    funds = "/funds/getList/";
    
    constructor() {
        super();
    }

    getFunds(limit=16, offset=0) {
        const url = `${this.host + this.funds}?limit=${limit}&offset=${offset}`;
        return this.get(url);
    }
}

export const FundsListObj = new FundsList(); 