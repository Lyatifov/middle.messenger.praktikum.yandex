export let ActiveModalWindow: boolean = true;

export default () => {
    const profileImgEditor: HTMLElement =
            document.getElementById("profileImgEditor"),
        background: HTMLElement = document.getElementById("background"),
        profileImgLabel: HTMLElement =
            document.getElementById("profileImgLabel"),
        modalWindow: HTMLElement = document.getElementById("modalWindow");
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
