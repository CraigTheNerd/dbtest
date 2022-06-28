const form = document.querySelector("form"),
submitBtn = form.querySelector("a.submit-button"),
errorMessage = form.querySelector("#error-message");

submitBtn.onclick = (e)=> {
    // Prevent form from submitting
    e.preventDefault();
}

submitBtn.addEventListener('click', testConnection);

//      THIS   WORKS   PERFECTLY

function testConnection() {

    //
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/connect.php', true);
    xhr.onload = function() {
        //


        if(xhr.readyState === XMLHttpRequest.DONE) {
            // console.log('READYSTATE: ', xhr.readyState);

            if(xhr.status === 200) {
                console.log('connected! 200');
                let data = xhr.responseText;

                if(data == "Database Connected!") {
                    // Show Response
                    console.log(data);
                    document.querySelector(".error-pass").innerHTML = data;
                    document.querySelector(".error-pass").style.display = "block";
                    document.querySelector(".error-fail").style.display = "none";
                    document.querySelector(".content-text").style.display = "none";
                    document.querySelector("form").reset();
                    console.log("Hello");
                    setTimeout(() => {
                        document.querySelector("form").reset();
                        document.querySelector(".error-pass").style.display = "none";
                        document.querySelector(".content-text").style.display = "block";
                    }, 5000);

                } else {
                    // Show Response
                    // console.log('error message here');
                    console.log(data);
                    document.querySelector(".error-fail").innerHTML = data;
                    document.querySelector(".error-fail").style.display = "block";
                    document.querySelector(".error-pass").style.display = "none";
                    document.querySelector(".content-text").style.display = "none";

                    console.log("Hello");
                    setTimeout(() => {
                            //document.querySelector("form").reset();
                            document.querySelector(".error-fail").style.display = "none";
                        document.querySelector(".content-text").style.display = "block";
                        }, 5000);
                }
            }
        }

    }
    let formData = new FormData(form);
    xhr.send(formData);
}

//      THIS   WORKS   PERFECTLY


//
// setTimeout(() => {
//     // PUT IT HERE
//     submitBtn.addEventListener('click', testConnection);
//     function testConnection() {
//
//         //
//         var xhr = new XMLHttpRequest();
//         xhr.open('POST', 'php/connect.php', true);
//         xhr.onload = function() {
//             //
//
//
//             if(xhr.readyState === XMLHttpRequest.DONE) {
//                 // console.log('READYSTATE: ', xhr.readyState);
//
//                 if(xhr.status === 200) {
//                     console.log('connected! 200');
//                     let data = xhr.responseText;
//
//                     if(data == "success") {
//                         // Show Response
//                         console.log(data);
//                         document.querySelector(".error-pass").innerHTML = data;
//                         document.querySelector(".error-pass").style.display = "block";
//                         document.querySelector(".error-fail").style.display = "none";
//                         document.querySelector(".content-text").style.display = "none";
//                         document.querySelector("form").reset();
//                         console.log("Hello");
//                         setTimeout(() => {
//                             document.querySelector("form").reset();
//                             document.querySelector(".error-pass").style.display = "none";
//                             console.log("World!");
//                         }, 5000);
//
//                     } else {
//                         // Show Response
//                         // console.log('error message here');
//                         console.log(data);
//                         document.querySelector(".error-fail").innerHTML = data;
//                         document.querySelector(".error-fail").style.display = "block";
//                         document.querySelector(".error-pass").style.display = "none";
//                         document.querySelector(".content-text").style.display = "none";
//
//                         console.log("Hello");
//                         setTimeout(() => {
//                             //document.querySelector("form").reset();
//                             document.querySelector(".error-fail").style.display = "none";
//                             console.log("World!");
//                         }, 5000);
//                     }
//                 }
//             }
//
//         }
//         let formData = new FormData(form);
//         xhr.send(formData);
//     }
//     // PUT IT HERE
// }, 5000);


