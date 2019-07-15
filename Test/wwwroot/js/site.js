// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var deferredPrompt;

window.addEventListener('beforeinstallprompt', function (e) {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;

    showAddToHomeScreen();

});



function showAddToHomeScreen() {

    var a2hsBtn = document.querySelector("div.block-round");

    a2hsBtn.style.display = "block";

    a2hsBtn.addEventListener("click", addToHomeScreen);

}

function addToHomeScreen() {
    var a2hsBtn = document.querySelector("div.block-round");  // hide our user interface that shows our A2HS button
    a2hsBtn.style.display = 'none';  // Show the prompt
    deferredPrompt.prompt();  // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
        .then(function (choiceResult) {

            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }

            deferredPrompt = null;

        });
}