document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.category-list button');
  const searchInput = document.querySelector('.search-bar input');
  const products = document.querySelectorAll('.product-card');

  let activeCategory = null;

  // Função para filtrar produtos
  function filterProducts() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    products.forEach(product => {
      const category = product.dataset.category.toLowerCase();
      const title = product.querySelector('h4').textContent.toLowerCase();

      const matchesCategory = activeCategory ? category === activeCategory : true;
      const matchesSearch = title.includes(searchTerm);

      if (matchesCategory && matchesSearch) {
        product.style.display = 'flex';  // seu .product-card usa flexbox
      } else {
        product.style.display = 'none';
      }
    });
  }

  // Evento para clique nos botões de categoria
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove classe active de todos
      buttons.forEach(btn => btn.classList.remove('active'));

      // Ativa o botão clicado
      button.classList.add('active');

      // Atualiza categoria ativa (pode ter um data-category no botão)
      activeCategory = button.dataset.category ? button.dataset.category.toLowerCase() : null;

      filterProducts();
    });
  });

  // Evento para busca por texto
  searchInput.addEventListener('input', () => {
    filterProducts();
  });

  // Inicializa exibindo todos
  filterProducts();
});
