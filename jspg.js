var button = document.querySelector('#submit')
var password = '';
var string = 'ABCDEFGHILMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=/,.?><';

submit.addEvenetListener("click", function ()  {
    for (i = 1; i <= 8; i++){
            var char = Math.floor(Math.random() * string.length + 1);
        
            pass += string.charAt(char)
        }
        return pass;
        });
    function submit(){
            button.innerHTML = password();
        }

// function generateP(){

// var password = '';

// var string = 'ABCDEFGHILMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=/,.?><';

// for (i = 1; i <= 8; i++){
//     var char = Math.floor(MAt.random() * string.length + 1);

//     pass += string.charAt(char)
// }
// return pass;
// }
// function submit(){
//     button.innerHTML = generateP();
// }