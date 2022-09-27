const span = document.querySelector("span")

const par = document.querySelector("p")

const dice = document.querySelector(".dice")
dice.addEventListener("click", (e) => {
   myAdvice();
});

const myAdvice = async () =>{
    const url = `https://api.adviceslip.com/advice`;
    try {
        const response = await fetch(url);
        if(!response.ok)
        throw new Error("HATA")

        const data = await response.json();
        console.log(data)
        console.log(data.slip.id) 
        span.innerHTML = `${data.slip.id}`;
        par.innerHTML = `${data.slip.advice}`;
    }
    
    catch (error) {
        console.log(error)
        
    }
}

myAdvice()