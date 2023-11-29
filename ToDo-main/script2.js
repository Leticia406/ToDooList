const params = new URLSearchParams(window.location.search)

const cod = params.get("cod");
const mod = params.get("mod");
const preco = params.get("preco");
const ano_lanc = params.get("ano_lanc");

if(cod != null && mod != null && preco != null 
    && ano_lanc != null)
{
    document.querySelector("button")
    .addEventListener("click",()=>{
        fetch(`http://192.168.1.48:3000/produtos/alterar/${cod}`,{
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                "mod" : document.querySelector("#mod").value,
                "preco" : parseFloat(document.querySelector("#preco").value),
                "ano_lanc" : parseInt(document.querySelector("#ano_lanc").value)
            })
        }).then((resposta)=>{
            if(resposta.status != 200){
                console.log(resposta.json())
            }
        })
    })
}else{
    document.querySelector("button")
    .addEventListener("click",()=>{
        fetch("http://192.168.1.48:3000/produtos/novo",{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                "mod" : document.querySelector("#mod").value,
                "preco" : parseFloat(document.querySelector("#preco").value),
                "ano_lanc" : parseInt(document.querySelector("#ano_lanc").value)
            })
        }).then((resposta)=>{
            if(resposta.status != 200){
                console.log(resposta.json())
            }
        })
    })
}

