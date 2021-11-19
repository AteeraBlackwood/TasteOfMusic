let outputElement = document.getElementById('Music');
let contentGridElement = document.getElementById('grid-item');
let classicalMusicElement = document.getElementById('ClassicalMusic');
let popMusicElement = document.getElementById('PopMusic');
let rockMusicElement = document.getElementById('RockMusic');
let gospelMusicElement = document.getElementById('GospelMusic');
let fromAnimeElement = document.getElementById('AnimeMusic');

//var randomIndex = Math.floor(Math.random() * myJSON["jsonDatabase"].length);

let jsonDatabase = [

      {
      "Title": "Dance of the Sugar Plum Fairies",
      "Artist": "Pyotr Ilyich Tchaikovsky",
      "Picture": "SugarPlumAlbum.jpg",
      "Genre": "Classical",
      "Song": "Tchaikovsky.mp3"
    },

     {
      "Title": "The Four Seasons: Spring I Allegro",
      "Artist": "Antonio Vivaldi",
      "Picture": "SpringAlbum.jpg",
      "Genre": "Classical",
      "Song":""
    },

      {
      "Title": "Ride of the Valkyries",
      "Artist": "Richard Wagner",
      "Picture": "WagnerAlbum.jpg",
      "Genre": "Classical",
      "Song":""
      }

    ,

    {

      "Title": "How to Be a Heartbreaker",
      "Artist": "MARINA",
      "Picture": "MarinaAlbum.jpg",
      "Genre": "Pop",
      "Song":""
    },

      {
      "Title": "Rather Be ",
      "Artist": "Clean Bandit, Jess Glynne",
      "Picture": "Rather_Be_single_cover.jpg",
      "Genre": "Pop",
      "Song":""
    },

      {
      "Title": "Give Me Love",
      "Artist": "Ed Sheeran",
      "Picture": "Ed_SheeranAlbumcover.png",
      "Genre": "Pop",
      "Song":""
      }
    ,

        {
        "Title": "Welcome to the Black Parade",
        "Artist": "My Chemical Romance",
        "Picture": "MCRAlbum.jpg",
        "Genre": "Rock",
        "Song":""
      },

        {
        "Title": "One More",
        "Artist": "SuperChick",
        "Picture": "Superchick Album.jpg",
        "Genre": "Rock",
        "Song":""
        },

        {
        "Title": "Hope of Morning",
        "Artist": "Icon for Hire",
        "Picture": "IconForHireAlbum.jpg",
        "Genre": "Rock",
        "Song":""
        }
      ,

          {
          "Title": "Give Me",
          "Artist": "Kirk Franklin, Mali Music",
          "Picture": "KirkFranklinAlbum.jpg",
          "Genre": "Gospel",
          "Song":""
        },

          {
          "Title": "Take Me to the King ",
          "Artist": "Tamela Mann",
          "Picture": "TamelaMannAlbum.jpg",
          "Genre": "Gospel",
          "Song":""
        },

          {
          "Title": "Work It Out",
          "Artist": "Tye Tribbet",
          "Picture": "TyeTribbettAlbum.jpg",
          "Genre": "Gospel",
          "Song":""
          }
        ,

            {
            "Title": "Rising Hope",
            "Artist": "LiSA",
            "Picture": "LisaAlbum.jpg",
            "Genre": "Anime",
            "Song":""
            },

            {
            "Title": "My Hero",
            "Artist": "MAN ON A MISSION",
            "Picture": "ManOnAMissionAlbum.jpg",
            "Genre": "Anime",
            "Song":""
          },

            {
            "Title": "Jojo Sono Chino Sadame",
            "Artist": "Hiroaki Tommy Tominaga",
            "Picture": "JojoAlbum.jpg",
            "Genre": "Anime",
            "Song":""
            }

          ]

console.log("Blueberries");


for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

// Init GLIDE for carousel slideshow
new Glide('.glide').mount();



function createElementProper(incomingJSON){
  let newContentListItem = document.createElement("LI");
  newContentListItem.classList.add("glide__slide");
  let newContentPart = document.createElement("DIV");
  // Give an <li> element and glid__slide. Maybe replace div
  newContentPart.classList.add('grid-item');
  newContentListItem.appendChild(newContentPart);

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['Title'];
  newContentPart.appendChild(newContentHeading);

  let newArtistName = document.createElement("p");
  newArtistName.innerText = incomingJSON['Artist'];
  newContentPart.appendChild(newArtistName);

  // let newMusic = document.createElement("AUDIO");
  // newMusic.innerText = incomingJSON['Song'];
  // newContentPart.appendChild(newMusic);

  let newImage = document.createElement("IMG");
  newImage.classList.add("albumImage");
  newImage.src = incomingJSON['Picture'];
  newContentPart.appendChild(newImage);

  //When using the carousel, copy and past the code in example

if (incomingJSON["Genre"]=="Classical"){
  classicalMusicElement.appendChild(newContentListItem);
}
if (incomingJSON["Genre"]=="Pop"){
  popMusicElement.appendChild(newContentListItem);
}
if (incomingJSON["Genre"]=="Rock"){
  rockMusicElement.appendChild(newContentListItem);
}
if (incomingJSON["Genre"]=="Gospel"){
  gospelMusicElement.appendChild(newContentListItem);
}
if (incomingJSON["Genre"]=="Anime"){
  fromAnimeElement.appendChild(newContentListItem);
}

}
