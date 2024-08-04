$(document).ready(function () {
    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = `https://django-api-demo.vercel.app/api/news/?api_key=default_key`
            async function myweather() {
                let responce = await fetch(url)
                let data = await responce.json()
                console.log(data)
            }
            myweather()
        }
    })
})
