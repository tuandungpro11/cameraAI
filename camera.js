var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://oauth.hanet.com/oauth2/authorize?response_type=code&client_id=5e8cfe50de01b7fe082d662f029e80d5&redirect_uri=http://127.0.0.1:5500/index.html?code=AUTHORIZATION_CODE&scope=full", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

