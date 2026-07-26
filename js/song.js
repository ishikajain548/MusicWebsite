        const parameter=new URLSearchParams(window.location.search);
        const gen=decodeURIComponent(parameter.get("genre"))
          const heading=document.createElement("h2");
          heading.textContent=gen;
          heading.className="heading"
          document.body.appendChild(heading)
       
       
        const container=document.getElementById("music-container")
        const filteredSongs = getSongs().filter(song => song.genre===gen)
        console.log(filteredSongs);
       
          
          filteredSongs.forEach((song)=>{
            const songdiv=document.createElement("div");
            songdiv.className="songD";
            const p1=document.createElement("p");
            p1.textContent=song.title;
            const p2=document.createElement("p")
            p2.textContent=song.artist;
            const btn=document.createElement("button")
            btn.textContent="View This Song";
            btn.addEventListener("click",()=>{
                window.location.href=`${song.youtubeLink}`
            })
            btn.className="bt"
            songdiv.appendChild(p1);
            songdiv.appendChild(p2);
            songdiv.appendChild(btn);
            container.appendChild(songdiv)
        })
          document.body.appendChild(container) 