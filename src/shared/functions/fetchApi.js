export const fetchApi = async ({ url, method = "POST", body = null, headers = { 'Content-Type': 'application/json' } }) => {
    const params = {
        headers,
        method
    }
    if (body) params.body = JSON.stringify(body) 

    const response = await fetch(url, params)
    const data = await response.json()
    return data
}