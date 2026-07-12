const albums=[
    {
     id:1,
     genre:"K-pop Music",
     img:"images/kpop.webp",
     buttonText:"View Songs"
    },
    {
       id:2,
     genre:"Bollywood Music",
     img:"images/bollywood-music.avif",
     buttonText:"View Songs"
    },
    {
       id:3,
     genre:"Classical Music",
     img:"images/classical.avif",
     buttonText:"View Songs"
    },
    {
         id:4,
     genre:"Hip-Hop Music",
     img:"images/hip-hop.avif",
     buttonText:"View Songs"
    },
    {
         id:5,
     genre:"Instrumental Music",
     img:"images/instrumental.avif",
     buttonText:"View Songs"
    },
    {
         id:6,
     genre:"Lo-Fi Music",
     img:"images/lofi.avif",
     buttonText:"View Songs"
    },
    {
         id:7,
     genre:"Pop Music",
     img:"images/pop.avif",
     buttonText:"View Songs"
    },
    {
         id:8,
     genre:"Punjabi Songs",
     img:"images/punjabi.jpg",
     buttonText:"View Songs"
    }
]
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
        window.location.href=`songs.html?genre=${encodeURIComponent(item.genre)}`;
    });
    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(btn);
    album.appendChild(card);
})
