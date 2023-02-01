import tWrapper from "./Wrapper.hbs";
import tButtons from "./Buttons.hbs";
import { DataForMiniModalWindow } from "../../../../interfaces/interfaces";

export default (data: DataForMiniModalWindow): string => {
    const { buttons, id, className } = data;
    let buttonList = "";
    buttons.forEach((element) => {
        buttonList += tButtons({ ...element });
    });
    const res: string = tWrapper({
        className,
        id,
        buttons: buttonList,
    });
    return res;
};
