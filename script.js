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

const songs = [
  
  {
    id:1,
    genre: "K-pop Music",
    title: "Dynamite",
    artist: "BTS",
    youtubeLink: "https://www.youtube.com/watch?v=gdZLi9oWNZg"
  },
  {
    id:2,
    genre: "K-pop Music",
    title: "How You Like That",
    artist: "BLACKPINK",
    youtubeLink: "https://www.youtube.com/watch?v=ioNng23DkIM"
  },
  {
    id:3,
    genre: "K-pop Music",
    title: "Love Dive",
    artist: "IVE",
    youtubeLink: "https://www.youtube.com/watch?v=l-jZOXa7gQY"
  },
  {
    id:4,
    genre: "K-pop Music",
    title: "God's Menu",
    artist: "Stray Kids",
    youtubeLink: "https://www.youtube.com/watch?v=TQTlCHxyuu8"
  },
  {
        id:5,
    genre: "K-pop Music",
    title: "Hype Boy",
    artist: "NewJeans",
    youtubeLink: "https://www.youtube.com/watch?v=11cta61wi0g"
  },

  
  {    id:6,
    genre: "Bollywood Music",
    title: "Kesariya",
    artist: "Arijit Singh",
    youtubeLink: "https://www.youtube.com/watch?v=BddP6PYo2gs"
  },
  {
        id:7,
    genre: "Bollywood Music",
    title: "Tumhi Ho Bandhu",
    artist: "Pritam",
    youtubeLink: "https://www.youtube.com/watch?v=o1RducJbUdc"
  },
  {
       id:8,
    genre: "Bollywood Music",
    title: "Raataan Lambiyan",
    artist: "Jubin Nautiyal & Asees Kaur",
    youtubeLink: "https://www.youtube.com/watch?v=gvyUuxdRdR4"
  },
  {
       id:9,
    genre: "Bollywood Music",
    title: "Kabhi Kabhi Aditi",
    artist: "A.R Rahman",
    youtubeLink: "https://www.youtube.com/watch?v=AX7t8ZwroHQ"
  },
  {
       id:10,
    genre: "Bollywood Music",
    title: "Kal Ho Naa Ho",
    artist: "Sonu Nigam",
    youtubeLink: "https://www.youtube.com/watch?v=g0eO74UmRBs"
  },

  
  {
    id:11,
    genre: "Classical Music",
    title: "Canon in D",
    artist: "Johann Pachelbel",
    youtubeLink: "https://www.youtube.com/watch?v=Ptk_1Dc2iPY"
  },
  {
    id:12,
    genre: "Classical Music",
    title: "Für Elise",
    artist: "Ludwig van Beethoven",
    youtubeLink: "https://www.youtube.com/watch?v=q9bU12gXUyM"
  },
  {
    id:13,
    genre: "Classical Music",
    title: "The Four Seasons: Spring",
    artist: "Antonio Vivaldi",
    youtubeLink: "https://www.youtube.com/watch?v=mFWQgxXM_b8"
  },
  {
    id:14,
    genre: "Classical Music",
    title: "Moonlight Sonata",
    artist: "Ludwig van Beethoven",
    youtubeLink: "https://www.youtube.com/watch?v=4Tr0otuiQuU"
  },
  {
    id:15,
    genre: "Classical Music",
    title: "Swan Lake",
    artist: "Pyotr Ilyich Tchaikovsky",
    youtubeLink: "https://www.youtube.com/watch?v=9cNQFB0TDfY"
  },

  
  {
       id:16,
      genre: "Hip-Hop Music",
    title: "Not Like Us",
    artist: "Kendrick Lamar",
    youtubeLink: "https://www.youtube.com/watch?v=H58vbez_m4E"
 },
  {
       id:17,
    genre: "Hip-Hop Music",
    title: "SICKO MODE",
    artist: "Travis Scott",
    youtubeLink: "https://www.youtube.com/watch?v=6ONRf7h3Mdk"
  },
  {
       id:18,
    genre: "Hip-Hop Music",
    title: "God's Plan",
    artist: "Drake",
    youtubeLink: "https://www.youtube.com/watch?v=xpVfcZ0ZcFM"
  },
  {
       id:19,
    genre: "Hip-Hop Music",
    title: "HUMBLE.",
    artist: "Kendrick Lamar",
    youtubeLink: "https://www.youtube.com/watch?v=tvTRZJ-4EyI"
  },
  {   id:20,
  genre: "Hip-Hop Music",
    title: "Lose Yourself",
    artist: "Eminem",
    youtubeLink: "https://www.youtube.com/watch?v=xFYQQPAOz7Y"
},

  
  {
       id:21,
    genre: "Instrumental Music",
    title: "River Flows in You",
    artist: "Yiruma",
    youtubeLink: "https://www.youtube.com/watch?v=7maJOI3QMu0"
  },
  {
    id:22,
    genre: "Instrumental Music",
    title: "Experience",
    artist: "Ludovico Einaudi",
    youtubeLink: "https://www.youtube.com/watch?v=eUDVUZZyA0M"
  },
  {
    id:23,
    genre: "Instrumental Music",
    title: "Comptine d'un autre été",
    artist: "Yann Tiersen",
    youtubeLink: "https://www.youtube.com/watch?v=PaXKf0JEzEA"
  },
  {
    id:24,
    genre: "Instrumental Music",
    title: "Nuvole Bianche",
    artist: "Ludovico Einaudi",
    youtubeLink: "https://www.youtube.com/watch?v=VUCI-1vIbUo"
  },
  {
    id:25,
    genre: "Instrumental Music",
    title: "Kiss the Rain",
    artist: "Yiruma",
    youtubeLink: "https://www.youtube.com/watch?v=imGaOIm5HOk"
  },

  
  {
    id:26,
    genre: "Lo-Fi Music",
    title: "Snowman",
    artist: "WYS",
    youtubeLink: "https://www.youtube.com/watch?v=1P5BSm_oFJg"
  },
  {
    id:27,
    genre: "Lo-Fi Music",
    title: "Dream with tea",
    artist: "Lukrembo",
    youtubeLink: "https://www.youtube.com/watch?v=t_0PQkXZxiE"
  },
  {
    id:28,
    genre: "Lo-Fi Music",
    title: "Affection",
    artist: "Jinsang",
    youtubeLink: "https://www.youtube.com/watch?v=NAkZ8gUXcIE"
  },
  {
    id:29,
    genre: "Lo-Fi Music",
    title: "Warm Nights",
    artist: "Lakey Inspired",
    youtubeLink: "https://www.youtube.com/watch?v=rXYm8YLrZwU"
  },
  {
    id:30,
    genre: "Lo-Fi Music",
    title: "Better Days",
    artist: "LAKEY INSPIRED",
    youtubeLink: "https://www.youtube.com/watch?v=RXLzvo6kvVQ"
  },

  
  {
    id:31,
    genre: "Pop Music",
    title: "Shape of You",
    artist: "Ed Sheeran",
    youtubeLink: "https://www.youtube.com/watch?v=JGwWNGJdvx8"
  },
  {
    id:32,
    genre: "Pop Music",
    title: "Blinding Lights",
    artist: "The Weeknd",
    youtubeLink: "https://www.youtube.com/watch?v=4NRXx6U8ABQ"
  },
  {
    id:33,
    genre: "Pop Music",
    title: "Flowers",
    artist: "Miley Cyrus",
    youtubeLink: "https://www.youtube.com/watch?v=G7KNmW9a75Y"
  },
  {
    id:34,
    genre: "Pop Music",
    title: "Levitating",
    artist: "Dua Lipa",
    youtubeLink:"https://www.youtube.com/watch?v=TUVcZfQe-Kw"
  },
  {
    id:35,
    genre: "Pop Music",
    title: "Bad Guy",
    artist: "Billie Eilish",
    youtubeLink: "https://www.youtube.com/watch?v=DyDfgMOUjCI"
  },

  
  {
    id:36,
    genre: "Punjabi Songs",
    title: "Brown Munde",
    artist: "AP Dhillon, Gurinder Gill & Shinda Kahlon",
    youtubeLink:"https://www.youtube.com/watch?v=VNs_cCtdbPc"
  },
  {
    id:37,
    genre: "Punjabi Songs",
    title: "Excuses",
    artist: "AP Dhillon & Gurinder Gill",
    youtubeLink: "https://www.youtube.com/watch?v=vX2cDW8LUWk"
  },
  {
    id:38,
    genre: "Punjabi Songs",
    title: "295",
    artist: "Sidhu Moose Wala",
    youtubeLink:"https://www.youtube.com/watch?v=n_FCrCQ6-bA"
  },
  {
    id:39,
    genre: "Punjabi Songs",
    title: "Insane",
    artist: "AP Dhillon",
    youtubeLink:"https://www.youtube.com/watch?v=cqP8I5aaud8"
  },
  {
    id:40,
    genre: "Punjabi Songs",
    title: "GOAT",
    artist: "Diljit Dosanjh",
    youtubeLink:"https://www.youtube.com/watch?v=cl0a3i2wFcc"
  }
];
