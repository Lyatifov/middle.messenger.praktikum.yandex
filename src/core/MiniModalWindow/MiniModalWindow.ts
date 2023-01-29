export default (activationButtonId: string, modalWindowId: string) => {
    const activationButton = document.getElementById(activationButtonId);
    const modalWindow = document.getElementById(modalWindowId);
    function changeClass(): void {
        if (modalWindow) {
            if (modalWindow.className === "mini-modal") {
                modalWindow.className += " mini-modal_active";
            } else {
                modalWindow.className = "mini-modal";
            }
        }
    }
    if (activationButton && modalWindow) {
        activationButton.removeEventListener("click", changeClass);
        activationButton.addEventListener("click", changeClass);
    }
};
