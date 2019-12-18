
interface ILoginParams {
    name?: string;
    password?: string;
}

export interface ILoginSuccess {
    data: any;
}

export interface ILoginError {
    error: any;
}

const loginService = (params: ILoginParams = {}): Promise<ILoginSuccess | ILoginError> => {

    return new Promise((resolve, reject) => {

        resolve({
            data: {
                id: Math.floor(Math.random() * 10000),
            },
        });

    });
};

export default loginService;
