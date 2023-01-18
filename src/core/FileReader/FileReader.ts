export default () => {
    const wrapper: HTMLElement | null =
            document.getElementById("loadFileWrapper"),
        dropZone: HTMLElement | null = document.getElementById("dropZone"),
        modalForm: HTMLElement | null = document.getElementById("modalForm");
    interface Photo extends Blob, MediaSource, File {
        type: string;
    }
    let file: Photo;
    if (modalForm) {
        modalForm.addEventListener("drop", (ev) => {
            ev.preventDefault();
            if (ev.dataTransfer) {
                console.log(ev.dataTransfer.files[0]);
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
    const handleFile = (file?: Photo, loadFile?: HTMLInputElement) => {
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
        } else {
            document.body.innerHTML = `<h3>Это не изображение!</h3>`;
            const timer = setTimeout(() => {
                location.reload();
                clearTimeout(timer);
            }, 2000);
        }
    };
    const createImage = (file: Photo) => {
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
        if (wrapper) {
            wrapper.append(imageElement);
            setTimeout(() => {
                wrapper.append(buttonForRemoveImage);
            }, 1000);
        }
        URL.revokeObjectURL(URL.createObjectURL(file));
    };
};
