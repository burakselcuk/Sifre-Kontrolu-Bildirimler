

window.onload = function () { 

    if(!("Notification") in window) {
        alert("does not work");
    } else if(Notification.permission !== "denied") {
        Notification.requestPermission().then(function (per) { 
            if (per === "granted") {
                const img = "./instagram.png"
                const notice = new Notification("Takip Et !!",{
                    
                    body:"burak.__selcuk",
                    icon:img,
                    timeout:10

                })
                .onclick=function () { 
                    location.href="https://instamgram.com/burak.__selcuk"
                 }
                console.log(notice)

            }
         })
    }

}


const passwordCheck = document.getElementById("passwordCheck")


passwordCheck.addEventListener("keyup",function () {
        checkpass(passwordCheck.value);
})

function checkpass(value) {
    const bar = document.getElementById("stronger");
    let batStronger = 0;
    if (value.match(/[a-zA-Z0-9][a-zA-Z0-9/]+/)) {
        batStronger += 1;
    }
    if (value.match(/[<>?]+/)) {
        batStronger += 1;
    
    }
    if (value.match(/[!@$%^&*()]+/)) {
        batStronger += 1;
        
    }
    if (value.length > 9) {
        batStronger += 1;
        
    }


    switch (batStronger) {
        case 0:
            bar.value = 20;
            break;
    
        case 1:
            bar.value = 40;
            break;

        case 2:
            bar.value = 60;
            break;
        case 3:
            bar.value = 80;
            break
        case 4:
            bar.value = 100;
    }
}