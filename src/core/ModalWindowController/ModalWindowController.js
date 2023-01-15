export let ActiveModalWindow = true;

export default () => {
    const profileImgEditor = document.getElementById("profileImgEditor"),
        background = document.getElementById("background"),
        profileImgLabel = document.getElementById("profileImgLabel"),
        modalWindow = document.getElementById("modalWindow");
    profileImgLabel.addEventListener("click", () => {
        ActiveModalWindow != ActiveModalWindow;
        if (ActiveModalWindow) {
            modalWindow.className = "modal-window_active";
        }
    });
    profileImgEditor.addEventListener("click", () => {
        ActiveModalWindow != ActiveModalWindow;
        if (ActiveModalWindow) {
            modalWindow.className = "modal-window_active";
        }
    });
    background.addEventListener("click", () => {
        if (ActiveModalWindow) {
            modalWindow.className = "modal-window";
        }
        ActiveModalWindow != ActiveModalWindow;
    });
};
