export function setGlobalScroll(isModalOpen = false) {
  const body = document.querySelector("body");

  if(isModalOpen) {
    return body.style.overflow = "hidden";
  }
  return body.style.overflow = "auto";
}

export function updateModalItem(key, value) {
  return key + ": " + value;
}

export function resetCards() {
  const cardList = document.querySelector(".trainers-cards__container");

  cardList.innerHTML = "";
};

export function getFilterCriteria(form) {
  const formData = new FormData(form);

  const criteria = {
    specialization: formData.get('direction'),
    category: formData.get('category')
  };
  
  return criteria;
}

export function mapFormValues(input) {
  switch (input) {
    case 'all':
      return 'ВСІ'
   
    case 'master':
      return 'МАЙСТЕР'
   
    case 'specialist':
      return 'СПЕЦІАЛІСТ'
   
    case 'instructor':
      return 'ІНСТРУКТОР'
   
    case 'gym':
      return 'ТРЕНАЖЕРНИЙ ЗАЛ'
   
    case 'fight club':
      return 'БІЙЦІВСЬКИЙ КЛУБ'
   
    case 'kids club':
      return 'ДИТЯЧИЙ КЛУБ'

    case 'swimming pool':
      return 'БАСЕЙН'
  }
}