
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");


async function getproducts(){
    const responsePromise = fetch('https://fakestoreapi.com/products/' +id)
    .then(res=>res.json())
    return responsePromise
}

async function main(){

        let product = await getproducts();
        console.log(product);

        let container = document.createElement("div");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div22 = document.createElement("div");
        let category = document.createElement("p");
        let image = document.createElement("img");
        let nom = document.createElement("p"); 
        let etoils = document.createElement("img");
        let prix = document.createElement("p");
        let description = document.createElement("p");
        let texte = document.createTextNode("Simply dummy text of the printing and typesetting industry. Lorem had  ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.");
        let qte = document.createElement("p")
        let q = document.createTextNode("Quantity :");
        let inputText = document.createElement("input");
        inputText.type="text";
        inputText.value="1"
        let inputSubmit1 = document.createElement("input");
        inputSubmit1.type="submit";
        inputSubmit1.value="Add Quantity";
        let inputSubmit2 = document.createElement("input");
        inputSubmit2.type="submit";
        inputSubmit2.value="Remove Quantity";
        
        image.setAttribute("src", product.image);
        etoils.setAttribute("src", "assets/etoils.png")

        category.innerHTML=product.category;
        image.innerHTML=product.image;
        nom.innerHTML=product.title;
        prix.innerHTML="$"+product.price;

        container.classList.add("container");
        div1.classList.add("div11");
        category.classList.add("category");
        image.classList.add("image");
        div2.classList.add("div222");
        nom.classList.add("title");
        etoils.classList.add("etoils");
        prix.classList.add("prix");
        description.classList.add("description");
        div22.classList.add("div22");
        qte.classList.add("qte");
        inputSubmit1.classList.add("inputSubmit1");
        inputSubmit2.classList.add("inputSubmit2");
        inputText.classList.add("inputText");

        description.appendChild(texte);
        qte.appendChild(q);

        div1.appendChild(category);
        div1.appendChild(image);

        div2.appendChild(nom);
        div2.appendChild(etoils);
        div2.appendChild(prix);
        div2.appendChild(description);
        div2.appendChild(div22);
        div22.appendChild(qte);
        div22.appendChild(inputText);
        div22.appendChild(inputSubmit1);
        div22.appendChild(inputSubmit2);

        container.appendChild(div1);
        container.appendChild(div2);

        let section2 = document.querySelector(".section2")
        section2.appendChild(container); 


        let count = 1;
        inputSubmit1.addEventListener("click", function(){
            count+=1;
            inputText.value = count;
        })

        inputSubmit2.addEventListener("click", function(){
            count=1;
            inputText.value = "1";
        })

       
}



main();
