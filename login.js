document.querySelector("#register").addEventListener('click', function(){

    let password = document.querySelector("#registerPassword").value
    let email = document.querySelector("#registerEmail").value
    let name = document.querySelector('#registerName').value

    fetch('https://weatherapp-backend-cyan.vercel.app/users/signup',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ email, password, name })
    })
    .then(response => response.json())
    .then(data => {
        if (data.result){
            window.location.assign('main.html')
        }
    })
})

document.querySelector("#connection").addEventListener('click', function(){

    let password = document.querySelector("#connectionPassword").value
    let email = document.querySelector("#connectionEmail").value

    fetch('https://weatherapp-backend-cyan.vercel.app/users/signin',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.result){
            window.location.assign('main.html')
        }
    })
})