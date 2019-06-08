import axios from 'axios';

const ServiceUtil = {
    async triggerServerRequest(options, res) {
        const method = options.method.toUpperCase();
        const url = options.url;
        if (method.toUpperCase() === 'GET') {
            const myData = await this.doAjax(url,undefined).then(p=>p.data)
            console.log("pppppp ==> " + myData);
            return myData;
        }
    },

    doAjax(URL,pauLoad){
        return axios.get(URL)
        
    }
};

export default ServiceUtil;