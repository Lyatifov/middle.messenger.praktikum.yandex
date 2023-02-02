export default (modalWindowId: string) => {
    const changeClass = () => {
        const modalWindow = document.getElementById(modalWindowId);
        if (modalWindow) {
            if (modalWindow.className === "modal-window") {
                modalWindow.className = "modal-window_active";
            } else {
                modalWindow.className = "modal-window";
            }
        }
    };
    return changeClass;
};
