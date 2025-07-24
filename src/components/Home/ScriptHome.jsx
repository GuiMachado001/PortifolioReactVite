import AOS from 'aos';
import 'aos/dist/aos.css';

let animationRunning = false;

export function initHomeScripts() {
  if (animationRunning) return; // evita rodar múltiplas vezes
  animationRunning = true;

  AOS.init();

  const initTypingAnimation = () => {
    const titleApresentacao = document.querySelector('.titleApresentacao h1');
    const span = document.querySelector('.titleApresentacao span');
    const paragraph = document.querySelector('.titleApresentacao p');

    if (!titleApresentacao || !span || !paragraph) return;

    // Limpa o conteúdo antes de iniciar a animação
    titleApresentacao.innerHTML = '';
    span.innerHTML = '';
    paragraph.innerHTML = '';

    const typingAnimation = (element, text, delay) => {
      setTimeout(() => {
        text.split('').forEach((item, index) => {
          setTimeout(() => {
            element.innerHTML += item;
          }, 80 * index);
        });
      }, delay);
    };

    typingAnimation(titleApresentacao, 'Olá, eu sou o ', 0);
    typingAnimation(span, 'Guilherme Machado', 1600);
    typingAnimation(paragraph, 'Desenvolvedor Front-End', 3700);
  };

  initTypingAnimation();

  const icons = document.querySelectorAll('.icon');
  const containers = document.querySelectorAll('.containerDemoProjetos > div');

  if (!icons.length || !containers.length) return;

  const mouseOverHandler = (event) => {
    containers.forEach((container) => (container.style.display = 'none'));

    const iconClass = event.currentTarget.classList[0];
    const containerToShow = document.querySelector(
      `.containerFotos${iconClass.replace('icon', '')}`
    );

    if (containerToShow) containerToShow.style.display = 'flex';
    else console.log('Container não encontrado para:', iconClass);
  };

  const mouseOutHandler = () => {
    containers.forEach((container) => (container.style.display = 'none'));
  };

  icons.forEach((icon) => {
    icon.addEventListener('mouseover', mouseOverHandler);
    icon.addEventListener('mouseout', mouseOutHandler);
  });

  // Função para remover event listeners quando o componente desmontar
  return () => {
    icons.forEach((icon) => {
      icon.removeEventListener('mouseover', mouseOverHandler);
      icon.removeEventListener('mouseout', mouseOutHandler);
    });
  };
}
