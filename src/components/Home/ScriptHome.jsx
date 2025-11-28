export function initHomeScripts() {
    const greeting = document.querySelector('.greeting');
    const nameTitle = document.querySelector('.typing-text');
    const subtitle = document.querySelector('.subtitle');
  
    if (!greeting || !nameTitle || !subtitle) return;
  
    // Limpa o conteúdo
    greeting.innerHTML = '';
    nameTitle.innerHTML = '';
    subtitle.innerHTML = '';
  
    const typeWriter = (element, text, delay = 0, speed = 80) => {
      setTimeout(() => {
        let i = 0;
        const typing = setInterval(() => {
          if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
          } else {
            clearInterval(typing);
          }
        }, speed);
      }, delay);
    };
  
    // Sequência de digitação ajustada
    typeWriter(greeting, 'Olá, eu sou', 0);
    typeWriter(nameTitle, 'Guilherme Machado', 1000); 
    typeWriter(subtitle, 'Desenvolvedor Full Stack', 2500);
  
    return () => {
      // Cleanup se necessário
    };
}