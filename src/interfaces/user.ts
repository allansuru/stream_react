import Stream from "./stream";

interface User {
    name: string,
    sex: 'M' | 'F',
    stream: Stream,
    data: number,
    address: any
}

export default User;