import { useState } from "react";
import {useAuthContext} from './useAuthContext';

export const useSignin = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const { dispatch } = useAuthContext()

    const signin = async (email, password) => {
        setLoading(true)
        setError(null)

        const response = await fetch('/api/users/signin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password})
        })
        const json = await response.json()

        if (!response.ok) 
        {
            setLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            //save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //update the auth context
            dispatch({type: 'LOGIN', payload: json})

            //update loading state
            setLoading(false)
        }
    }
    return {signin, loading, error}
}