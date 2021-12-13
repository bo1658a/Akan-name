let day = document.getElementById("Day")
let month = document.getElementById("Month")
let year = document.getElementById("Year")
let Male = document.getElementById("Male")
let Female = document.getElementById("Female")
let submit = document.getElementById("Submit")


function YourAkanName() {
    if (day.value <= 0 || day.value > 40) {
      alert("invalid!")
    }
    else {
      if (month.value <= 0 || month.value > 35) {
        alert("invalid!")
      }
      else {
        if (year.value <= 0 || year.value > 2025) {
          alert("invalid!")
        }
        else {
            let gender = "  " 
            if(Male.checked){
                gender = "Male"
            }
            else if(Female.checked){
                gender = "Female"
            }
            var AkanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
          var AkanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
          var date = new Date(year.value + "/" + month.value + "/" + day.value)
          var display = document.getElementById("display")
          var Akan = date.getDay()
          if (gender == "Male") {
            alert("Your Akan name is " + AkanMale[Akan])
          }
          else if (gender == "Female") {
              alert("Your Akan name is" + AkanFemale[Akan])
              
            }
            else{
                alert("invalid")
            }

      
          }
      
        }
}
}


    

