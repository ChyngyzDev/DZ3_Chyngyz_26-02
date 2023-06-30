const tabs = document.querySelectorAll('.tabheader__item');
const tabsParent = document.querySelector('.tabheader__items');
const tabContent = document.querySelectorAll('.tabcontent');

const hideTabContent = () => {
  tabContent.forEach((item) => {
    item.style.display = 'none';
  });
  tabs.forEach((item) => {
    item.classList.remove('tabheader__item_active');
  });
};

const showTabContent = (i = 3) => {
  tabContent[i].style.display = 'block';
  tabs[i].classList.add('tabheader__item_active');
};

hideTabContent();
showTabContent();
let k = 0;
let isTrue = true;
tabsParent.addEventListener('click', (event) => {
  isTrue = false;
  setTimeout(() => (isTrue = true), 3000);
  const target = event.target;
  if (target.classList.contains('tabheader__item')) {
    tabs.forEach((item, i) => {
      if (target === item) {
        console.log(i);
        hideTabContent();
        showTabContent(i);
        k = i;
      }
    });
  }
});

const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('.btn_white');
const closeModalBtn = document.querySelector('.modal__close');

const openModal = () => {
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
};

modalTrigger.addEventListener('click', openModal);

const closeModal = () => {
  modal.classList.remove('show');
  modal.classList.add('hide');
  document.body.style.overflow = '';
};
closeModalBtn.addEventListener('click', closeModal);

setInterval(() => {
  if (isTrue) {
    hideTabContent();
    showTabContent(k);
    k++;
    k === tabs.length ? (k = 0) : '';
  }
}, 1000);

modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('show')) {
    closeModal();
  }
});
document.onscroll = () => {
  window.innerHeight + window.scrollY >= document.body.offsetHeight - 0.8 ? openModal() : '';
};
