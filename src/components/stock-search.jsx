import React from 'react';
import { useEffect } from 'react';



export default () => {

    const [state, setState] = useState(null);
    const BASE_URL = 'http://3.109.141.224:5000'


    const fetchToken = () => {

        return fetch(`${BASE_URL}/api/user-access-token`, {
            method: 'GET'
        }).then(response => response.json());

    }


    useEffect(() => {
        const data = fetchToken();
        console.log(data);
    },[])
    

    return <></>;
};

