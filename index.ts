document.addEventListener('DOMContentLoaded' , ()=>{
  const toggleButton = document.getElementById("btn") as HTMLButtonElement;
  const skillsSection = document.getElementById("skill") as HTMLElement;
    toggleButton.addEventListener('click',()=>{
      if (skillsSection.style.display === 'none'){
        skillsSection.style.display = 'block';
      } else {
        skillsSection.style.display = 'none';
      }
    })
   }
  )