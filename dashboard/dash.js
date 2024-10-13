$(document).ready(function () {
    
    $("#toggler").click(function () {
        $("#menu").toggle()
    })
    /* for dropdown in dashboard */
    $("#dropdown2").click(function () {
        $("#drop-menu2").toggle()
    })
     $("#dropdown3").click(function () {
        $("#drop-menu3").toggle()
    })
    $("#dropdown4").click(function () {
        $("#drop-menu4").toggle()
    })
    $("#dropdown1").click(function () {
        $("#drop-menu1").toggle()
    })
   
    /* function oneView(){
      $("#first-sem").hide()
      $("#second-sem").hide()
      $("#third-sem").hide()
      $("#fourth-sem").hide()
      $("#fifth-sem").hide()
      $("#sixth-sem").hide()
      $("#seventh-sem").hide()
   }
 $("#sem-1").click(function(){
    $("#first-sem").toggle()
   
    
 })
 

 $("#sem-2").click(function(){
    $("#second-sem").toggle()
    
 })

 $("#sem-3").click(function(){
    $("#third-sem").toggle()
    
 })
 $("#sem-4").click(function(){
    $("#fourth-sem").toggle()
    
 })
 $("#sem-5").click(function(){
    $("#fifth-sem").oneView()
    $("#fifth-sem").show()
    
 })
 $("#sem-6").click(function(){
    $("#sixth-sem").toggle()
    
 })
 $("#sem-7").click(function(){
    $("#seventh-sem").toggle()
    
 }) */


})

/* for notes navigator , it show only the desired clicking semenster notes
 */
const firstSem=document.querySelector("#first-sem")
const secondSem=document.querySelector("#second-sem")
const thirdSem=document.querySelector("#third-sem")
const fourthSem=document.querySelector("#fourth-sem")
const fifthSem=document.querySelector("#fifth-sem")
const sixthSem=document.querySelector("#sixth-sem")
const seventhSem=document.querySelector("#seventh-sem")

document.querySelector("#sem-1").addEventListener("click",()=>{
   firstSem.style.display="block";
   secondSem.style.display="none"
   thirdSem.style.display="none"
   fourthSem.style.display="none"
   fifthSem.style.display="none"
   sixthSem.style.display="none"
   seventhSem.style.display="none"
   
})
document.querySelector("#sem-2").addEventListener("click",()=>{
   firstSem.style.display="none";
   secondSem.style.display="block"
   thirdSem.style.display="none"
   fourthSem.style.display="none"
   fifthSem.style.display="none"
   sixthSem.style.display="none"
   seventhSem.style.display="none"
   
})
document.querySelector("#sem-3").addEventListener("click",()=>{
   firstSem.style.display="none";
   secondSem.style.display="none"
   thirdSem.style.display="block"
   fourthSem.style.display="none"
   fifthSem.style.display="none"
   sixthSem.style.display="none"
   seventhSem.style.display="none"
   
})
document.querySelector("#sem-4").addEventListener("click",()=>{
   firstSem.style.display="none";
   secondSem.style.display="none"
   thirdSem.style.display="none"
   fourthSem.style.display="block"
   fifthSem.style.display="none"
   sixthSem.style.display="none"
   seventhSem.style.display="none"
   
})
document.querySelector("#sem-5").addEventListener("click",()=>{
   firstSem.style.display="none";
   secondSem.style.display="none"
   thirdSem.style.display="none"
   fourthSem.style.display="none"
   fifthSem.style.display="block"
   sixthSem.style.display="none"
   seventhSem.style.display="none"
   
})
document.querySelector("#sem-6").addEventListener("click",()=>{
   firstSem.style.display="none";
   secondSem.style.display="none"
   thirdSem.style.display="none"
   fourthSem.style.display="none"
   fifthSem.style.display="none"
   sixthSem.style.display="block"
   seventhSem.style.display="none"
   
})
document.querySelector("#sem-7").addEventListener("click",()=>{
   firstSem.style.display="none";
   secondSem.style.display="none"
   thirdSem.style.display="none"
   fourthSem.style.display="none"
   fifthSem.style.display="none"
   sixthSem.style.display="none"
   seventhSem.style.display="block"
   
})

/* for menubar off */
const menubar=document.querySelector("#menu")

document.querySelector("#menu-off").addEventListener("click",()=>{
   menubar.style.display="none"

})

