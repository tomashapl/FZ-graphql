import fetch from "node-fetch"

const API_URL = "https://gpe-pay-api.azurewebsites.net/api/gbepay";

class Payment {

    static getPaymentURL = async (_, {orderNumber, vignetteType, merOrderNumber, returnURL}) => {

        const request = await fetch(`${API_URL}/url`, {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                OrderNumber: orderNumber,
                MerOrderNum: merOrderNumber,
                VignetteType: vignetteType,
                URL: returnURL,
            })
        });

        const data = await request.json();
        return data.url
    }

    static validatePaymentURL = async (_, {url}) => {

        const request = await fetch(`${API_URL}/valid`, {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                url,
            })
        });

        const data = await request?.json();

        return {
            status: data?.areReturnCodeOk,
            /*errorMessage*/
            /*errorCode*/
        }


    }
}

export const query = {
    validatePaymentURL: Payment.validatePaymentURL
};


export const mutation = {
    getPaymentURL: Payment.getPaymentURL,
};


