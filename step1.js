window.addEventListener('scroll', function(e) {
    const root = document.getElementById("root")
    root.style.filter = 'none';
    root.style.filter = 'none';

    const divModal = document.querySelectorAll("[data-cy-id='modal-ModalPortal-0-plans-modal']");
    divModal.forEach(e => e.remove());
});
