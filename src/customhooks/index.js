import { useState, useEffect } from 'react';

export function UseFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export function UseFetchApi(url, options) {
    const [response, setResponse] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url, options);
            const json = await res.json();
            setResponse(json);
        }
        fetchData();
    }, []);
    return response;
}