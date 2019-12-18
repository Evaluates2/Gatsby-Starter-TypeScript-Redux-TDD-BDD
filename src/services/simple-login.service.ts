
interface ISomeApiParams {
    name?: string;
}

interface ISomeApiSuccessResponse {
    data: any;
}

interface ISomeApiErrorResponse {
    error: any;
}

const callApiService = (params: ISomeApiParams = {}) : Promise<ISomeApiSuccessResponse | ISomeApiErrorResponse> => {

    return new Promise ((resolve, reject) => {

        resolve({data: 'foo'})

    })
}


export default callApiService
