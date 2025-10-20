const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers'); // ✅ corrigido
let active = 0;
const total = items.length;
let timer;

function update(direction) {
    // Remove o ativo atual
    document.querySelector('.item.active').classList.remove('active');
    document.querySelector('.dot.active').classList.remove('active');

    // Atualiza o índice ativo
    if (direction > 0) {
        active++;
        if (active === total) active = 0;
    } else if (direction < 0) {
        active--;
        if (active < 0) active = total - 1;
    }

    // Adiciona o novo ativo
    items[active].classList.add('active');
    dots[active].classList.add('active');

    // Atualiza o número do slide
    numberIndicator.textContent = String(active + 1).padStart(2, '0');
}

// Inicia mostrando o primeiro slide
update(0);

// Timer automático
clearInterval(timer);
timer = setInterval(() => {
  update(1);
}, 5000);

// Controles de seta
prevButton.addEventListener('click', () => update(-1));
nextButton.addEventListener('click', () => update(1));
