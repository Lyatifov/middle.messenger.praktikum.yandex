export default (modalWindowId: string) => {
    const changeClass = () => {
        const modalWindow = document.getElementById(modalWindowId);
        if (modalWindow) {
            if (modalWindow.className === "mini-modal") {
                modalWindow.className += " mini-modal_active";
            } else {
                modalWindow.className = "mini-modal";
            }
        }
    };
    return changeClass;
};
