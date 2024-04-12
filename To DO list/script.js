var input=document.getElementById("input-type")
var list=document.getElementById("list")
 function Addfunction()
 {
    var listitem=document.createElement("li")
    listitem.textContent=input.value
    list.append(listitem)
    input.value="";
    var span=document.createElement("span")
    span.innerHTML="\u00d7";
    listitem.append(span);
    savedata()
 }

 list.addEventListener("click",function(e)

    {
        if(e.target.tagName==="LI")
        {
            e.target.classList.toggle("line");
            savedata()
        }
        else if(e.target.tagName==="SPAN")
        {
            e.target.parentElement.remove();

            savedata() 
        }
    },false)
    function savedata()
    {
        localStorage.setItem("data" ,list.innerHTML);
    }
    function show()
    {
        list.innerHTML=localStorage.getItem("data")

    }
    show(); 
    input.addEventListener("keyup",(event)=>
    {
        if(event.key==="Enter")
        {
            Addfunction();
        }
        else if(event.key==='keyz')
        {
            input.value="";
        }
    })

    list.addEventListener("keyup",(event) =>{
        if(event.key==="Delete")
        {
            if(target.tagName==="SPAN")
            {
                target.parentElement.remove();
     
            }
        }

    })