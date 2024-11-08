import { IUser } from "../interfaces/User"

const registerUser = async (user: IUser) => {
    // TODO: Uncomment this after making the backend
    // const response = await fetch('http://localhost:3001/api/v1/auth/register', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(user),
    // })

    //BUG: This is for the mocking, delete it after as well
    console.log(user);

    //BUG: Mocking response
    const response = {
        ok: true,
        json: () => {
            return {
                token: '12345'
            }
        }
    }

    const data = await response.json()
    return data
}

export default registerUser