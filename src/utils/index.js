export function event(eventType, payload) {
  return {
    type: eventType,
    time: Date.now(),
    payload,
  };
}

export function apiURL(pathname) {
  let url;
  if (process.env.NODE_ENV === 'production') {
    url ='http://localhost:3001';
  } else {
    url ='http://localhost:3001';
  }
  return url + pathname;
}

export function apiFetch(pathname, options) {
  return fetch(apiURL(pathname), options)
    .catch(err => {
      // add messages array to browser-generated exceptions
      err.messages = [err.message];
      throw err;
    })
    .then(checkStatus);
}

export function checkStatus(response) {
  let json = response.json();
  if (response.status >= 200 && response.status < 300) {
    return json;
  } else {
    return json
    .then(err => {
      const error = new Error(response.statusText);
      error.response = response;
      error.body = err;
      error.messages = [response.statusText];

      // Errors structured per JSON API spec
      if (typeof err === 'object' && err.errors && err.errors.length) {
        error.messages = err.errors.map(error => error.title);
      }

      throw error;
    });
  }
}