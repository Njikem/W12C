let token = cookies.get(`token`);
if(token ===undefined){
    window[`Location`] = `/index.html`
} else{
    let logout_container = document.querySelector(`logout_container`);
    logout_container.insertAdjacentHTML(`beforebegin`, `<button>Logout</button>`)
}