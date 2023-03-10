import store from "../../Store/Store";

export default () => {
    store.removeNewAvatar();
    const wrapper: HTMLElement | null = document.getElementById("loadFileWrapper"),
        dropZone: HTMLElement | null = document.getElementById("dropZone"),
        modalForm: HTMLElement | null = document.getElementById("modalForm");
    let file: Blob;
    if (modalForm) {
        modalForm.addEventListener("drop", (ev) => {
            ev.preventDefault();
            if (ev.dataTransfer) {
                file = ev.dataTransfer.files[0];
            }
            handleFile(file);
        });
    }
    if (dropZone) {
        dropZone.addEventListener("click", () => {
            const loadFile = document.createElement("input");
            loadFile.className = "_none";
            loadFile.type = "file";
            loadFile.click();
            loadFile.addEventListener("change", () => {
                if (loadFile.files) {
                    file = loadFile.files[0];
                }
                handleFile(file, loadFile);
            });
        });
    }
    document.addEventListener("dragover", (ev) => ev.preventDefault());
    document.addEventListener("drop", (ev) => ev.preventDefault());
    const handleFile = (file?: Blob, loadFile?: HTMLInputElement) => {
        if (dropZone) {
            dropZone.className += " _none";
        }
        if (loadFile) {
            loadFile.remove();
        }
        if (file) {
            const type: string = file.type.replace(/\/.+/, "");
            if (type === "image") {
                createImage(file);
                return;
            }
        }
        // else {
        //     document.body.innerHTML = `<h3>Это не изображение!</h3>`;
        //     const timer = setTimeout(() => {
        //         location.reload();
        //         clearTimeout(timer);
        //     }, 2000);
        // }
    };
    const createImage = (file: Blob) => {
        const removeImage = () => {
            imageElement.remove();
            buttonForRemoveImage.remove();
            if (dropZone) {
                dropZone.className = "drop-zone";
            }
        };
        const imageElement = document.createElement("img"),
            buttonForRemoveImage = document.createElement("button");
        imageElement.alt = "Ваше новое изображение";
        buttonForRemoveImage.className = "button-for-remove-image";
        buttonForRemoveImage.innerHTML = "&#10060;";
        buttonForRemoveImage.onclick = removeImage;
        imageElement.src = URL.createObjectURL(file);
        store.setNewAvatar(file);
        if (wrapper) {
            wrapper.append(imageElement);
            setTimeout(() => {
                wrapper.append(buttonForRemoveImage);
            }, 1000);
        }
        URL.revokeObjectURL(URL.createObjectURL(file));
    };
};
