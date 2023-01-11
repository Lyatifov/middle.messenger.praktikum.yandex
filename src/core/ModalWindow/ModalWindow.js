export default (activeModalWindow) => {
    const profileImgEditor = document.getElementById("profileImgEditor"),
        background = document.getElementById("background"),
        profileImgLabel = document.getElementById("profileImgLabel"),
        modalWindow = document.getElementById("modalWindow");
    profileImgLabel.addEventListener("click", () => {
        activeModalWindow != activeModalWindow;
        if (activeModalWindow) {
            modalWindow.className = "modal-window_active";
        }
    });
    profileImgEditor.addEventListener("click", () => {
        activeModalWindow != activeModalWindow;
        if (activeModalWindow) {
            modalWindow.className = "modal-window_active";
        }
    });
    background.addEventListener("click", () => {
        if (activeModalWindow) {
            modalWindow.className = "modal-window";
        }
        activeModalWindow != activeModalWindow;
    });
};
