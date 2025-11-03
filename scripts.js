const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');

let activeIndex = 0;
const totalItems = items.length;

function updateIndex(direction) {
  if (direction > 0) {
    activeIndex = (activeIndex + 1) % totalItems;
  } else if (direction < 0) {
    activeIndex = (activeIndex - 1 + totalItems) % totalItems;
  }
}

function updateUI() {
  items.forEach((item, index) => {
    item.classList.toggle('active', index === activeIndex);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === activeIndex);
  });

  numberIndicator.textContent = String(activeIndex + 1).padStart(2, '0');
}

function startTimer() {
  const intervalId = setInterval(() => {
    updateIndex(1);
    updateUI();
  }, 5000);

  return intervalId;
}

const timerId = startTimer();

prevButton.addEventListener('click', () => {
  updateIndex(-1);
  updateUI();
});

nextButton.addEventListener('click', () => {
  updateIndex(1);
  updateUI();
});


