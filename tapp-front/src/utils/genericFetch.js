import {toast} from 'react-toastify'

const requestHandler = async ({
    url,
    method = 'GET',
    headers = {},
    body = '',
    errMsg = 'Failed to fetch data',
  }) => {
    try {
      const res = await fetch(url, { method, headers, body: body === '' ? null : body });
      return res.json();
    } catch (err) {
        toast.error(errMsg)
    }
  };
  
  export default requestHandler;
