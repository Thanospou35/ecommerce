// Fonction pour augmenter la quantité d'un produit
const incrementQuantity = (e) => {
    const quantityElement = e.target.closest('.card-body').querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
  
    updateTotalPrice();
  };
  
  // Fonction pour diminuer la quantité d'un produit
  const decrementQuantity = (e) => {
    const quantityElement = e.target.closest('.card-body').querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
      quantityElement.textContent = quantity - 1;
    }
  
    updateTotalPrice();
  };
  
  // Fonction pour supprimer la quantité d'un produit (pas la carte entière)
  const deleteProductQuantity = (e) => {
    const quantityElement = e.target.closest('.card-body').querySelector('.quantity');
    // Réinitialiser la quantité à 0 ou à null
    quantityElement.textContent = 0;
  
    updateTotalPrice();
  };
  
  // Fonction pour mettre à jour le prix total
  const updateTotalPrice = () => {
    let totalPrice = 0;  // Réinitialiser le total
    const products = document.querySelectorAll('.card-body');
    products.forEach((product) => {
      const price = parseFloat(product.querySelector('.unit-price').textContent.replace('$', '').trim());
      const quantity = parseInt(product.querySelector('.quantity').textContent);
      totalPrice += price * quantity;
    });
    document.querySelector('.total').textContent = `${totalPrice.toFixed(2)} $`;
  };
  
  // Ajouter les écouteurs d'événements après le chargement de la page
  document.addEventListener('DOMContentLoaded', () => {
    const plusButtons = document.querySelectorAll('.btn-plus');
    const minusButtons = document.querySelectorAll('.btn-moins');
    const deleteButtons = document.querySelectorAll('.delete-btn');
  
    plusButtons.forEach((button) => button.addEventListener('click', incrementQuantity));
    minusButtons.forEach((button) => button.addEventListener('click', decrementQuantity));
    deleteButtons.forEach((button) => button.addEventListener('click', deleteProductQuantity)); // Modification ici
    
    const colorButtons = document.querySelectorAll('.color-btn');
    colorButtons.forEach((button) => button.addEventListener('click', () => {
      // Alterner la couleur du bouton entre rouge et noir à chaque clic
      button.style.color = button.style.color === 'red' ? 'black' : 'red';
    }));
  });
  