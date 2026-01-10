alert("Eu já estou com saudades!")

const somErro = new Audio('audio/erro.mp3');
const somAcerto = new Audio('audio/acerto.mp3');

let etapaAtual = 'introducao';

const btnNao = document.getElementById('btnNao');

const linkYoutube = 'https://www.youtube.com/watch?v=aO9KoEaEkMg';

const overlay = document.getElementById('patrocinadores');
const videoPatrocinio = document.getElementById('videoPatrocinio');
const btnFechar = document.getElementById('fecharPatrocinio');
const btnUltima = document.getElementById('btnUltimaPergunta');

function irParaEtapa(id) {
  document.querySelectorAll('section').forEach(sec => {
    if (!sec.classList.contains('overlay')) {
      sec.style.display = 'none';
    }
  });

  const etapa = document.getElementById(id);
  if (etapa) {
    etapa.style.display = 'flex';
    etapa.scrollIntoView({ behavior: 'smooth' });
    etapaAtual = id;
  }
}

function respostaErrada(botao) {
  somErro.currentTime = 0;
  somErro.play();

  const secao = document.getElementById('pergunta1');
  secao.classList.add('fundo-erro', 'shake');
  botao.classList.add('errada');

  alert('VOCÊ SABE A RESPOSTA CERTA, SÓ NÃO QUER ACEITAR');

  setTimeout(() => {
    secao.classList.remove('shake');
  }, 400);
}

function respostaCorretaPergunta1() {
  const secao = document.getElementById('pergunta1');
  secao.classList.remove('fundo-erro');

  document.querySelectorAll('#pergunta1 button').forEach(btn => {
    btn.classList.remove('errada');
  });

  somAcerto.currentTime = 0;
  somAcerto.play();

  alert('Eu sei que você é minha fã numero 1 meu amor ❤️');

  setTimeout(() => {
    irParaEtapa('momentos');
  }, 900);
}

function respostaErradaPergunta2(botao) {
  somErro.currentTime = 0;
  somErro.play();

  botao.classList.add('errada');

  alert('Resposta errada, volte 2 casas! 😝😝😝😝');

  irParaEtapa('pergunta1');
}

document.getElementById('voceEspecial').addEventListener('click', () => {
  somAcerto.currentTime = 0;
  somAcerto.play();

  alert('Claro que essa seria a resposta, afinal você é meu único vício ❤️');

  setTimeout(() => {
    irParaEtapa('declaracao');
  }, 900);
});

btnUltima.addEventListener('click', () => {
  alert('Mas antes disso, um anúncio dos nossos patrocinadores');

  overlay.style.display = 'flex';
  btnFechar.style.display = 'none';

  videoPatrocinio.pause();
  videoPatrocinio.currentTime = 0;

  setTimeout(() => {
    videoPatrocinio.play();
  }, 300);

  setTimeout(() => {
    btnFechar.style.display = 'block';
  }, 5000);
});

btnFechar.addEventListener('click', () => {
  videoPatrocinio.pause();
  videoPatrocinio.currentTime = 0;

  overlay.style.display = 'none';

  irParaEtapa('pedidoFinal');
});

document.getElementById('btnSim').addEventListener('click', () => {
  window.location.href = linkYoutube;
});

btnNao.addEventListener('mouseenter', () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  btnNao.style.transform = `translate(${x}px, ${y}px)`;
});

btnNao.addEventListener('click', (e) => {
  e.preventDefault();
});

document.addEventListener('DOMContentLoaded', () => {
  irParaEtapa('introducao');

  videoPatrocinio.pause();
  videoPatrocinio.currentTime = 0;
  videoPatrocinio.removeAttribute('autoplay');
});
