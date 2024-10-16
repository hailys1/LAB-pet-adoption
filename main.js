const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://i.abcnewsfe.com/a/ff9ddf87-2afd-4649-a288-dc75f9fe064b/dino-1-ht-er-240110_1704903903782_hpMain_2_16x9.jpeg?w=992",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://i.natgeofe.com/n/9b87dda3-9946-4a1c-a97f-c21f73ced888/Meraxes-CREDIT-Carlos-Papolio.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://think.kera.org/wp-content/uploads/2024/09/shutterstock_2042576309-800x500.jpg"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://www.purina.co.uk/sites/default/files/styles/ttt_image_510/public/2022-06/GettyImages-1186344530.jpg?itok=DPCnhCoO"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "https://www.thesprucepets.com/thmb/whvFIY9Epn7ITmGk1pfYMuHCRO0=/1471x0/filters:no_upscale():strip_icc()/GettyImages-1288261359-4016b054680e41d28451f081babd0c45.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://npr.brightspotcdn.com/dims4/default/d8f448b/2147483647/strip/true/crop/1600x925+0+0/resize/880x509!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F76%2F25%2Fe9d2a3c0412a8fc5293bd2cb7018%2Fbisticeratops-reconstruction-by-sergey-krasovskiy.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://image.petmd.com/files/styles/978x550/public/2021-12/cat_on_chair.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://static.wixstatic.com/media/ab4909_a20fbb574af54c94817a8092ef6ae305~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ab4909_a20fbb574af54c94817a8092ef6ae305~mv2.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmZCoTeVJHM7ZCcQou4hWf0kKNyaxKmp9CQ&s"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://us.feliway.com/cdn/shop/articles/10_fascinating_facts_about_black_cats-3.jpg?v=1712147891"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://www.dinosaur.org/wp-content/uploads/2024/08/illustration-featuring-a-variety-of-sauropodomorph-dinosaurs-in-a-lush-Jurassic-landscape-1024x574.png"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://cdn2.psychologytoday.com/assets/styles/manual_crop_4_3_1200x900/public/field_blog_entry_teaser_image/2020-09/teamk_pixabay.jpg?itok=VDnU_i3h"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://cdn.shopify.com/s/files/1/0265/6157/7032/files/dachshund-dog.jpg?v=1693826292"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://images.prismic.io/trustedhousesitters/ZtGP8EaF0TcGJkfo_tennesseerexcat.png?auto=format,compress&rect=0,0,1920,800&w=960&h=400"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://www.science.org/do/10.1126/science.zlch9vm/full/_20240620_on_giant_horned_dinosaur_lede-1718897025690.jpg"
    }
  ];

// 1. setting location
  const Targethtml = document.querySelector("#petApp")

// 2. Empty string and making funtion for filter
const cardsOnDom =(array) => {

  let domString = "";
for (const pet of array) {

  domString += 
  `<div class="card" style="width: 30rem;">
 
  <div class="card-body">
    <h5 class="name-title">${pet.name}</h5>
    <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
    <p class="type-color">${pet.color}</p>
    <p class="special-text">${pet.specialSkill}</p>
    <p class="type-text">${pet.type}</p>
    <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
  </div>
</div>`;
}

// 3. 1 + 2 populating set location with our string
Targethtml.innerHTML = domString;
};

// will display all animals when page loads

cardsOnDom(pets) 
// FILTER FOR BUTTONS
// make a filter
const filter = (array, petType) => {
  const petArray = [];
  for (const member of array) {
    if (member.type === petType) {
      petArray.push(member);
    }
  }

  return petArray;
};

// cardsOnDom(pets)
// connect html buttons to js 2
const catButton = document.querySelector("#cat");
const dogButton = document.querySelector("#dog");
const dinoButton = document.querySelector("#dino");
const allButton = document.querySelector("#all");

// 1 + 2 use event listener so when they click button, we trigger step
// show all button

allButton.addEventListener("click", () => {
  cardsOnDom(pets);
});

// filter button

catButton.addEventListener("click", () => {
  const catMembers = filter(pets, "cat");
  cardsOnDom(catMembers);
});

dogButton.addEventListener("click", () => {
  const dogMembers = filter(pets, "dog");
  cardsOnDom(dogMembers);
});

dinoButton.addEventListener("click", () => {
  const dinoMembers = filter(pets, "dino");
  cardsOnDom(dinoMembers);
});


//create form

const form = document.querySelector("form");

const newPet = (e) => {
  e.preventDefault();

  const newPetObj = {
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    color: document.querySelector("#pet-color").value,
    specialSkill: document.querySelector("#special-skill").value,
    type: document.querySelector("#type").value,
    imageUrl: document.querySelector("#imageUrl").value,
  };

  pets.push(newPetObj);
  cardsOnDom(pets)
  form.reset();
};

form.addEventListener("submit", newPet)

//Delete form
const petApp = document.querySelector("#petApp");

petApp.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")){
    const [, id] = e.target.id.split("--");
    const index = pets.findIndex(e => e.id === Number(id));
    pets.splice(index, 1);

    cardsOnDom(pets);
  }
});

const startApp = () => {
  cardsOnDom(pets);
};

startApp();
