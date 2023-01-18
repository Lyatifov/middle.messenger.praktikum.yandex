export const ActiveModalWindow = true;

export default () => {
    const profileImgEditor: HTMLElement | null =
            document.getElementById("profileImgEditor"),
        background: HTMLElement | null = document.getElementById("background"),
        profileImgLabel: HTMLElement | null =
            document.getElementById("profileImgLabel"),
        modalWindow: HTMLElement | null =
            document.getElementById("modalWindow");
    if (profileImgLabel && modalWindow && profileImgEditor && background) {
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
    }
};
