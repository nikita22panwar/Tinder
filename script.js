// step1: get the data jo show krna hai

let users =[   // that's an array of objects
    { profilePic: "https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG90cmFpdCUyMHdvbWFufGVufDB8fDB8fHww",
    displayPic: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHBvdHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
     pendingMessage: 13,
    location: "Delhi, India",
    name:"Kiara",
    age:22,
    interests:["music", "painting"],
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores doloremque sed reprehenderit culpa iure distinctio dolor vero !",
    isFriend: null
},
  { profilePic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHBvdHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    displayPic:"https://images.unsplash.com/photo-1629003796219-50be87eaf428?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwbW9kZWxzfGVufDB8fDB8fHww",
     pendingMessage: 9,
    location: "Noida, UP",
    name:"Rowhi",
    age:20,
    interests:["music", "traveling"],
    bio: "Lorem ipsum dolor sit, e doloribus sapiente aperiam quia!",
    isFriend: null
},
   { profilePic: "https://images.unsplash.com/photo-1707451956654-21cdf1ccf641?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHBvdHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
     displayPic:"https://images.unsplash.com/photo-1580465446361-8aae5321522b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHdvbWVuJTIwbW9kZWxzJTIwbGF1Z2h8ZW58MHx8MHx8fDA%3D",
     pendingMessage: 7,
    location: "Mumbai, India",
    name:"Anaya",
    age:19,
    interests:["music", "movies"],
    bio: " dignissimos culpa iure distinctio dolor vero adipisci ad, esse, at rerum. Nisi minima repudiandae doloribus sapiente aperiam quia!",
    isFriend: null
},
  { profilePic: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHBvdHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    displayPic:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHBvdHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
     pendingMessage: 6,
    location: "Paris, France",
    name:"Sifaa",
    age:18,
    interests:["music", "reading"],
    bio: "Lorem ipsum dolor sit,Lorem ipsum dolor sit Lorem ipsum dolor sit!",
    isFriend: null
}
]

function select(elem){  //elem ki vajah se hume repeat document.queryselector nhi likhna padega
    return document.querySelector(elem);
}
// step 2: setup main card image 
let curr=0;
let isAnimating=false;

function setData(index){
  select(".prfling img").src=users[index].profilePic;
  select(".badge h5").textContent=users[index].pendingMessage;
  select(".location h3").textContent=users[index].location;
  select(".name h1:nth-child(1)").textContent=users[index].name;
  select(".name h1:nth-child(2)").textContent=users[index].age;
 
  var clutter="";
  users[index].interests.forEach(function(interest){
   clutter += `
   <div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
   <i class="text-sm ri-music-2-fill"></i>
   <h3 class="text-sm tracking-tight capitalize">${interest}</h3>
</div>
   `
  })
  select(".tags").innerHTML =clutter;
  
  select(".bio p").textContent= users[index].bio;

}

(function setInitial(){
    select(".maincard img").src=users[curr].displayPic;
    select(".incomingcard img").src=users[curr+1]?.displayPic;
   
     setData(curr);
    curr=2;
})();


// function for image change
function imageChange(){
  if(!isAnimating){
    isAnimating=true;
  let tl=gsap.timeline({
     onComplete:function(){
      isAnimating=false;
      let main=select(".maincard");
      let incoming=select(".incomingcard"); 

      incoming.classList.remove("z-[2]");
      incoming.classList.add("z-[3]");
      incoming.classList.remove("incomingcard");

      main.classList.remove("z-[3]");
      main.classList.add("z-[2]");
      gsap.set(main, {
        scale:1,
        opacity:1
      })
      if(curr === users.length) curr=0;
      select(".maincard img").src=users[curr].displayPic;
      curr++;
      main.classList.remove("maincard");
      incoming.classList.add("maincard");
      main.classList.add("incomingcard");
     }
  });
  
  tl.to(".maincard",{
    scale:1.1,
    opacity:0,
    ease:Circ,
    duration:.9
  },"a")
  .from(".incomingcard",{
    scale:.9,
    opacity:0,
    ease:Circ,
    duration:1.1
  },"a")
};
}
   let deny= select(".deny");
   let accept= select(".accept");

   deny.addEventListener("click", function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
      y:"100%",
      opacity:.06,
      stagger: .1,
      ease: Power4.easeInOut,
      duration: 1.5
   })
});

accept.addEventListener("click", function(){
  imageChange();
  setData(curr-1);
  gsap.from(".details .element",{
    y:"100%",
    opacity:.06,
    stagger: .1,
    ease: Power4.easeInOut,
    duration: 1.5
 })
});


(function containerCreator(){
  document.querySelectorAll(".element")
  .forEach(function(element){
    let div=document.createElement("div");
    div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
    div.appendChild(element);
    select(".details").appendChild(div);
  })
})();

