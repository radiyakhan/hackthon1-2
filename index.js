document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById("btn");
    var skillsSection = document.getElementById("skill");
    toggleButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    });
});
