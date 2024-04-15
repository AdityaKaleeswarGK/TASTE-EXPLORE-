document.getElementById('showTeam').addEventListener('click', function() {
    const teamMembers = [
        { name: 'Harshitha', role: 'Developer' },
        { name: 'Aditya', role: 'Developer'},
    ];

    const teamList = document.getElementById('teamList');

    // Clear existing list items
    teamList.innerHTML = '';

    // Populate list with team members with a smooth transition
    setTimeout(() => {
        teamMembers.forEach(function(member) {
            const listItem = document.createElement('li');
            listItem.textContent = member.name + ' - ' + member.role;
            listItem.addEventListener('click', function() {
                alert(member.details);
            });
            teamList.appendChild(listItem);
        });
    }, 500); // Delay for a smooth transition

    // Show team section with a fade-in effect
    const teamSection = document.getElementById('teamSection');
    fadeIn(teamSection);

    // Change background color of team section randomly
    changeBackgroundColor(teamSection);
});

document.getElementById('suggestRecipe').addEventListener('click', function() {
    const recipes = [
        'Mediterranean Quinoa Salad',
        'Spaghetti Aglio e Olio',
        'Chicken Avocado Wrap',
        'Vegetable Stir-Fry',
        'Berry Smoothie Bowl'
    ];

    const recipeSuggestion = document.getElementById('recipeSuggestion');

    // Get a random recipe from the recipes array
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];

    // Display the recipe suggestion
    recipeSuggestion.textContent = 'How about trying ' + randomRecipe + ' for your next meal?';
    recipeSuggestion.style.display = 'block';
});

function fadeIn(element) {
    let opacity = 0;
    element.style.display = 'block';
    const fadeInInterval = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(fadeInInterval);
        }
    }, 50);
}

function changeBackgroundColor(element) {
    const colors = ['#33CC99', '#FF6666', '#6699FF', '#FFCC66', '#99CC66'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.backgroundColor = randomColor;
}
