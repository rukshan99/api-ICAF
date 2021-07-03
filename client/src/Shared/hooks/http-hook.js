import { useState, useCallback, useRef, useEffect } from 'react';

export const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const activeHttpRequests = useRef([]);

    const sendRequest = useCallback(async (url, method='GET', body=null, headers={}) => {
        try{
            setIsLoading(true);
            const httpAbortController = new AbortController();
            activeHttpRequests.current.push(httpAbortController);
            const response = await fetch(url, {
                method,
                body,
                headers,
                signal: httpAbortController.signal
            });
            const responseData = await response.json();
            activeHttpRequests.current = activeHttpRequests.current.filter(
                reqController => reqController !== httpAbortController
            );

            if(!response.ok) {
                throw new Error(responseData.message);
            }
            setIsLoading(false);

            return responseData;
        } catch(err) {
            setError(err.message);
            setIsLoading(false);
            throw err;
        }
    }, []);

    const clearError = () => {
        setError(null);
    };

    useEffect(() => {
        return () => {
            activeHttpRequests.current.forEach(abortController => abortController.abort());
        };
    }, []);

    return { isLoading, error, sendRequest, clearError };
};