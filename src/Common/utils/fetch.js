export default function(url, method, body = null, headers = {}) {
  return new Promise((resolve, reject) => {

    let _headers = {
      'Content-Type': 'application/json'
    };

    if (headers) {
      if (headers['Content-Type']){
        _headers['Content-Type'] = headers['Content-Type'];
      }
      _headers = {..._headers, headers};
    }

    const data = body ? JSON.stringify(body) : null

    let options = {
      method: method,
      body: data,
      // headers: _headers,
    }

    fetch(`${url}`, options)
      .then(async (res) => {
        if(!res.ok) {
          let data = await res.json(res);
          console.log('1 ошибка')
          reject({ status: res.status, statusText: res.statusText, error: data.error || '' });
        } else {
          return res.json(res)
        }
      })
      .then((data) => {
        resolve(data)
      })
      .catch(err => {
        reject(err)
      });
  });
}
