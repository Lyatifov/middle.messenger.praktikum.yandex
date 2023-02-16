const METHODS = { GET: "GET", POST: "POST", PUT: "PUT", DELETE: "DELETE" };

function queryStringify(data: Record<string, string> | string) {
    if (typeof data !== "object") {
        throw new Error("Data must be object");
    }
    const keys = Object.keys(data);
    return keys.reduce((result, key, index) => {
        return `${result}${key}=${data[key]}${index < keys.length - 1 ? "&" : ""}`;
    }, "?");
}

export default function fetch(url: string, options?: Record<string, any>) {
    const { method = METHODS.GET, timeout = 5000, headers = {}, data } = options || {};
    const isGet = method === METHODS.GET;
    const isData = !!data;
    const xhr = new XMLHttpRequest();
    const uri = isGet && isData ? `${url}${queryStringify(data)}` : url;
    const result = new Promise((res, rej) => {
        xhr.open(method, uri);
        Object.keys(headers).forEach((key) => {
            xhr.setRequestHeader(key, headers[key]);
        });
        xhr.onload = function () {
            res(xhr.responseText);
            xhr.abort();
        };
        xhr.withCredentials = true;
        xhr.onabort = rej;
        xhr.onerror = rej;
        xhr.timeout = timeout;
        xhr.ontimeout = rej;
        if (isGet || !data) {
            xhr.send();
        } else {
            xhr.send(data);
        }
    });
    return result;
}
