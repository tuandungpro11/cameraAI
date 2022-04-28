var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://oauth.hanet.com/oauth2/authorize?response_type=code&client_id=5e8cfe50de01b7fe082d662f029e80d5&redirect_uri=https://www.tvsi.com.vn/?msclkid=4e8d9c9fc69011ecb079a65d8e8c5826?code=AUTHORIZATION_CODE&scope=full", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

