
// to populate albums list on the home - page
const album=document.getElementById("container");
albums.forEach((item) =>{
    const card=document.createElement("div");
    card.className="card";
    const title=document.createElement("h3");
    title.textContent=item.genre;
    const image=document.createElement("img");
    image.src=item.img;
    image.alt=item.genre;
    
    const btn=document.createElement("button");
    btn.textContent=item.buttonText;
    btn.addEventListener("click",()=>{
        window.location.href=`music.html?genre=${encodeURIComponent(item.genre)}`;
    });
    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(btn);
    album.appendChild(card);
})

  
