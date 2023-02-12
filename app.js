const myname=document.getElementById('myname')
// console.log(myname);

const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(letters[0]);

const mname="asad"
myname.addEventListener('mouseenter',()=>{
    myname.dataset.value="asad";
    myname.innerText="asad"
    let i=0;

    const interval=setInterval(()=>{
        
        myname.innerText= myname.innerText.split("")
        .map((letter,index)=>{
            if(index<i){
                return mname[index]
            }
            else{
                return letters[Math.round(Math.random()*25)]  
            }
        })
        .join("");
       

        i+=1/3;
        if(i>=mname.length){
            clearInterval(interval)
        }


    },50)

})
    
    
