// Modal functionality
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('portfolioModal');
  const closeModal = document.getElementById('closeModal');

  // Portfolio items
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  // Open modal with project details
  portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
      const projectId = item.getAttribute('data-project');
      openModal(projectId);
    });
  });

  // Close modal when clicked on close button
  closeModal.addEventListener('click',
