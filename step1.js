window.addEventListener('scroll', function(e) {
    const root = document.getElementById("root")
    root.style.filter = 'none';
    root.style.filter = 'none';

    const divModals = document.querySelectorAll("[data-cy-id='modal-ModalPortal-0-plans-modal']");
    divModals.forEach(e => e.style.visibility = "hidden");
});
