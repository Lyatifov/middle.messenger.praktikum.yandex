export default () => {
    const wrapper = document.getElementById("loadFileWrapper"),
        dropZone = document.getElementById("dropZone"),
        modalForm = document.getElementById("modalForm");
    let file;
    modalForm.addEventListener("drop", (ev) => {
        ev.preventDefault();
        file = ev.dataTransfer.files[0];
        handleFile(file);
    });
    dropZone.addEventListener("click", () => {
        const loadFile = document.createElement("input");
        loadFile.className = "_none";
        loadFile.type = "file";
        loadFile.click();
        loadFile.addEventListener("change", () => {
            file = loadFile.files[0];
            handleFile(file, loadFile);
        });
    });
    document.addEventListener("dragover", (ev) => ev.preventDefault());
    document.addEventListener("drop", (ev) => ev.preventDefault());
    const handleFile = (file, loadFile) => {
        dropZone.className += " _none";
        if (loadFile) {
            loadFile.remove();
        }
        const type = file.type.replace(/\/.+/, "");
        if (type === "image") {
            createImage(file);
            return;
        }
        document.body.innerHTML = `<h3>Это не изображение!</h3>`;
        const timer = setTimeout(() => {
            location.reload();
            clearTimeout(timer);
        }, 2000);
    };
    const createImage = (image) => {
        const removeImage = () => {
            imageElement.remove();
            buttonForRemoveImage.remove();
            dropZone.className = "drop-zone";
        };
        const imageElement = document.createElement("img"),
            buttonForRemoveImage = document.createElement("button");
        imageElement.alt = "Ваше новое изображение";
        buttonForRemoveImage.className = "button-for-remove-image";
        buttonForRemoveImage.innerHTML = "&#10060;";
        buttonForRemoveImage.onclick = removeImage;
        imageElement.src = URL.createObjectURL(image);
        wrapper.append(imageElement);
        setTimeout(() => {
            wrapper.append(buttonForRemoveImage);
        }, 1000);
        URL.revokeObjectURL(image);
    };
};
