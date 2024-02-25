// Assuming you have a form element with the id 'myForm'
let form = document.querySelector('form');
let result = document.querySelector('.thalaresult');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let thalainput = document.querySelector('#thalainput').value;

    if (thalainput.length == 7) {
        result.classList.add("animate");
        
        result.innerText = "Thala for a reason";

        result.style.display = "block";
        let animate = document.querySelector('.animate');
        
        result.addEventListener('animationend', () => {
            // Remove the animation class after the animation completes
            result.classList.remove('animate');
        });
    }
    else if (thalainput == "tanush" || thalainput == "Tanush") {
        result.style.fontSize = "30px";
        result.classList.add("animate");
        
        result.innerText = "Thala for a reason even if 'Tanush' doesn't have 7 letters.";

        result.style.display = "block";
        let animate = document.querySelector('.animate');
        
        result.addEventListener('animationend', () => {
            // Remove the animation class after the animation completes
            result.classList.remove('animate');
        });
    }
    else{
        result.classList.add("animate");

        result.style.display = "block";

        result.innerText = "Moye Moye";

        result.addEventListener('animationend', () => {
            // Remove the animation class after the animation completes
            result.classList.remove('animate');
        });
    }
});
