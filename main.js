//gettig the nodelist of all theme selectors/ input fields
const themeOptions = document.querySelectorAll("[name = 'theme']");

//storing the theme locally
function storeTheme (theme){
    localStorage.setItem("theme", theme);
}

//when this local storing function will be called
themeOptions.forEach((theme)=>{
    theme.addEventListener('click', ()=>{
        storeTheme(theme.id);
    })
});

//theme value retrival function from local storage
function retriveTheme() {
    const selectedTheme = localStorage.getItem("theme");
    //we need to check the button which is equal to the retrieved item
    themeOptions.forEach((theme)=>{
        if(theme.id === selectedTheme)
        {
            theme.checked = true;
        }
        else{
            document.getElementById("theme1").checked;
        }
    })
}

//when this retrival function will be called
document.onload = retriveTheme();


//*************calculation part starts here******************

let outputScreen = document.getElementById("output-screen");
const button = document.querySelectorAll(".key");
let result = [];

//checking what type of button is clicked
button.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        if(btn.classList.contains('num-key')){
            result.push(btn.innerHTML);
            outputScreen.value = result.join('');


        }

        if(btn.classList.contains('op-key')){
            result.push(btn.innerHTML);
            outputScreen.value = result.join('');


        }

        if(btn.classList.contains('eq-key')){
            if(result.length == 0)
            {
                outputScreen.value = "0"
            }
            else
            {
                let tempResult = parseFloat(eval(result.join(''))).toFixed(2);
                outputScreen.value = parseFloat(eval(result.join(''))).toFixed(2);
                result = [''];
                result.push(tempResult);
            }
            


        }

        if(btn.classList.contains('del-key')){
            result.pop();
            if(result.length == 0)
            {
                outputScreen.value = "000";
            }
            else{
                outputScreen.value = result.join('');
            }
           


        }

        if(btn.classList.contains('reset-key')){
            result = [''];
            outputScreen.value = "000";


        }
    });
});


