//welcome message to the login user

// create the success function
function unknown_success(response){
    let unknown_container = document.querySelector(`#unknown_container`);
    for(let i=0; i<response[`data`][`data`].length; i++){
    unknown_container.insertAdjacentHTML(`beforeend`, 
    `<div>
        <p>${response[`data`][`data`][i][`color name true red`]}</p>
        <p>${response[`data`][`data`][i][20/08/1990]}</p>
        <p>${response[`data`][`data`][i][`red`]}</p>
        <p>${response[`data`][`data`][2][`color`]}</p>

    </div>`
   
    );

}
}

//create unknown failure
function unknown_failure(error){
    let unknown_container = document.querySelector(`#unknown_container`);
    unknown_container.insertAdjacentHTML(`beforeend`, `<p>Sorry, Please try again later</P>`)
}


//axios function for the Get request

    axios.request({
        url:`https://reqres.in/api/unknown`,
    }).then(unknown_success).catch(unknown_failure);


    //When the user is not login
let token = cookies.get(`token`);
if(token ===undefined){
    window[`Location`] = `/index.html`
} else{
    let logout_container = document.querySelector(`logout_container`);
    logout_container.insertAdjacentHTML(`beforebegin`, `<button>Logout</button>`)
}