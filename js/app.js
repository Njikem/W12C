// create success function
function login_success(response){
    cookie.set(`token`, response[`data`][`token`]);
    window[`location`] = `/pages/logout.html`;
}

//create failure function
function login_failure(error){
    let login_container = document.querySelector(`#login_container`);
    login_container.insertAdjacentHTML(`beforeend`, `<p>Sorry, Login was invalid</p>`)
}



//Post request function
function post_login_click(details){
    let email_input = document.querySelector(`#post_login_input`);
    let email_value = email_input[`value`];
    let password_input = document.querySelector(`#post_password_input`);
    let password_value = password_input[`value`];
//post axios request
    axios.request({
        url: `https://reqres.in/api/login`,
        method: `POST`,
        data: {
            email: email_value,
            password: password_value,
        }
    }).then(login_success).catch(login_failure);  
}

// Adding eventlistener on the login button
let login_button = document.querySelector(`#login_button`);
login_button.addEventListener(`click`, post_login_click);

