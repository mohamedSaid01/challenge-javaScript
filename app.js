async function getproducts(id){
    const responsePromise = fetch('https://fakestoreapi.com/products/'+id)
    .then(res=>res.json())
    return responsePromise
}
async function main(){
    for(let i=1;i<=12;i++){
        let product = await getproducts(i);
        console.log(product);
        let container = document.createElement("div");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let category = document.createElement("p");
        let logo = document.createElement("img");
        let image = document.createElement("img");
        let nom = document.createElement("p");
        let ligne = document.createElement("hr");
        let prix = document.createElement("p");
        let etoils = document.createElement("img");

        logo.setAttribute("src", "assets/cartLogo.png")
        image.setAttribute("src", product.image);
        etoils.setAttribute("src", "assets/etoils.png")

        category.innerHTML=product.category;
        image.innerHTML=product.image;
        nom.innerHTML=product.title;
        prix.innerHTML="$"+product.price;

        container.classList.add("container");
        div1.classList.add("div1");
        category.classList.add("category");
        logo.classList.add("logo");
        image.classList.add("image");
        nom.classList.add("title");
        div2.classList.add("div2");
        etoils.classList.add("etoils");
        prix.classList.add("prix");

        div1.appendChild(category);
        div1.appendChild(logo);
        
        div2.appendChild(prix);
        div2.appendChild(etoils);

        container.appendChild(div1);
        container.appendChild(image);
        container.appendChild(nom);
        container.appendChild(ligne);
        container.appendChild(div2);

         let section2 = document.querySelector(".section2")
           section2.appendChild(container); 
           
           container.addEventListener("click", callback)
           function callback(){
            window.open("index1.html?id=" +product.id, "blank", "id=");
            console.log(product.id);
            return product.id
           }

}
}



main();


