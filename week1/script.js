// // DOM element
// const toggleBtn = document.getElementById("toggleTheme");
// const reset=document.getElementById("resetTheme")

// // Load theme on page load
// const savedTheme = localStorage.getItem("theme");

//     if (savedTheme) {
//   document.body.classList.add(savedTheme);
// } else {
//   document.body.classList.add("light"); // default
// }



// // Toggle theme
// toggleBtn.addEventListener("click", () => {
//   if (document.body.classList.contains("light")) {
//     document.body.classList.replace("light", "dark");
//     localStorage.setItem("theme", "dark");
//   } else {
//     document.body.classList.replace("dark", "light");
//     localStorage.setItem("theme", "light");
//   }
// });

// reset.addEventListener("click",()=>{
//     localStorage.removeItem("theme")
//     document.body.classList.remove("dark","light")
// })


const btntoggle=document.getElementById("toggleTheme")
const btnreset=document.getElementById("resetTheme")


const savedtheme=sessionStorage.getItem("theme")||"light";
document.body.classList.add(savedtheme);
btntoggle.value=savedtheme;
let count=0
btntoggle.addEventListener("change",()=>{
console.log(btntoggle.value)
count++
sessionStorage.setItem("count",count)
const current=document.body.classList.item(0)
sessionStorage.setItem("theme",`${btntoggle.value}`)
document.body.classList.replace(`${current}`,`${btntoggle.value}`)
document.getElementById("themeStatus").innerText = 
  `Current Theme: ${count}`;
})

