// DOM Manipulation

// Reveal Event

const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
        hiddenContent.classList.toggle('reveal-btn')
    }


revealBtn.addEventListener("click", revealContent)

// Versão encurtada
// revealBtn.addEventListener('click', () => {
//     hiddenContent.classList.toggle('reveal-btn');
// });
