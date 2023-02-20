interface Answer {
    result: boolean;
    message: string;
}
type Func = (input: string) => Answer;

function isLatinAlphabet(input: string): boolean {
    const pattern = new RegExp(/[a-z]/i);
    const isMatch = pattern.test(input);
    return isMatch;
}
function isCyrillicAlphabet(input: string): boolean {
    const pattern = new RegExp(/[а-я]/i);
    const isMatch = pattern.test(input);
    return isMatch;
}
function isFirstLetterIsUppercase(input: string): boolean {
    const pattern = new RegExp(/^[A-ZА-Я]/);
    const isMatch = pattern.test(input);
    return isMatch;
}
function isCapitalLetter(input: string): boolean {
    const pattern = new RegExp(/[A-ZА-Я]/g);
    const isMatch = pattern.test(input);
    return isMatch;
}
function isSpaces(input: string): boolean {
    const pattern = new RegExp(/\s/g);
    const isMatch = pattern.test(input);
    return isMatch;
}
function isNumber(input: string): boolean {
    const pattern = new RegExp(/[0-9]/g);
    const isMatch = pattern.test(input);
    return isMatch;
}
function isSpecialCharacters(input: string): boolean {
    // eslint-disable-next-line no-useless-escape
    const pattern = new RegExp(/[!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?]/g);
    const isMatch = pattern.test(input);
    return isMatch;
}
function isEmail(input: string): boolean {
    const pattern = new RegExp(
        // eslint-disable-next-line no-useless-escape
        /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
    );
    const isMatch = pattern.test(input);
    return isMatch;
}
function isPhone(input: string): boolean {
    const pattern = new RegExp(
        // eslint-disable-next-line no-useless-escape
        /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g
    );
    const isMatch = pattern.test(input);
    return isMatch;
}
function isLength(input: string, min: number, max: number): boolean {
    const length = input.length;
    if (min <= length && length <= max) {
        return true;
    }
    return false;
}
function isEmpty(input: string | undefined | null): boolean {
    if (input) {
        if (input.trim().length) {
            return false;
        }
    }
    return true;
}

const listOfHashNames: Record<string, (input: string) => Answer> = {
    first_name: function (input: string): Answer {
        const answer: Answer = {
            result: false,
            message:
                "В данное поле принимается: латиница или кириллица, первая буква должна быть заглавной, без пробелов. без цифр, без спецсимволов (допустим только дефис)",
        };
        if (!input) return answer;
        const Cyrillic = isCyrillicAlphabet(input);
        const Latin = isLatinAlphabet(input);
        const FirstLetterIsUppercase = isFirstLetterIsUppercase(input);
        const Spaces = isSpaces(input);
        const Number = isNumber(input);
        const SpecialCharacters = isSpecialCharacters(input);
        if (
            (Cyrillic || Latin) &&
            FirstLetterIsUppercase &&
            !Spaces &&
            !Number &&
            !SpecialCharacters
        ) {
            answer.result = true;
        }
        return answer;
    },
    second_name: function (input: string): Answer {
        const answer: Answer = {
            result: false,
            message:
                "В данное поле принимается: латиница или кириллица, первая буква должна быть заглавной, без пробелов. без цифр, без спецсимволов (допустим только дефис)",
        };
        if (!input) return answer;
        return listOfHashNames.first_name(input);
    },
    login: function (input: string): Answer {
        const answer: Answer = {
            result: false,
            message:
                "В данное поле принимается: от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)",
        };
        if (!input) return answer;
        const Cyrillic = isCyrillicAlphabet(input);
        const Latin = isLatinAlphabet(input);
        const Spaces = isSpaces(input);
        const SpecialCharacters = isSpecialCharacters(input);
        const Length = isLength(input, 3, 20);
        if (!Cyrillic && Latin && !Spaces && !SpecialCharacters && Length) {
            answer.result = true;
        }
        return answer;
    },
    email: function (input: string): Answer {
        const answer: Answer = {
            result: false,
            message: "Неверный формат почты",
        };
        if (!input) return answer;
        const Email = isEmail(input);
        if (Email) {
            answer.result = true;
        }
        return answer;
    },
    password: function (input: string): Answer {
        const answer: Answer = {
            result: false,
            message:
                "В данное поле принимается: от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра",
        };
        if (!input) return answer;
        const Cyrillic = isCyrillicAlphabet(input);
        const Latin = isLatinAlphabet(input);
        const Spaces = isSpaces(input);
        const Number = isNumber(input);
        const CapitalLetter = isCapitalLetter(input);
        const Length = isLength(input, 8, 40);
        if (!Cyrillic && Latin && !Spaces && Number && CapitalLetter && Length) {
            answer.result = true;
        }
        return answer;
    },
    newPassword: function (input: string): Answer {
        return listOfHashNames.password(input);
    },
    oldPassword: function (input: string): Answer {
        return listOfHashNames.password(input);
    },
    phone: function (input: string): Answer {
        const answer: Answer = {
            result: false,
            message:
                "В данное поле принимается: от 10 до 15 символов, состоит из цифр, может начинается с плюса.",
        };
        if (!input) {
            return answer;
        }
        const Phone = isPhone(input);
        if (Phone) {
            answer.result = true;
        }
        return answer;
    },
    message: function (input: string): Answer {
        const answer: Answer = {
            result: false,
            message: "",
        };
        if (!input) return answer;
        if (!isEmpty(input)) {
            answer.result = true;
        }
        return answer;
    },
    repitePassword: function (input: string): Answer {
        const answer: Answer = {
            result: false,
            message: "Введенные пароли разные",
        };
        if (!input) return answer;
        const password = document.getElementById("newPassword") as HTMLInputElement;
        if (password) {
            const value: string = password.value;
            if (input === value) {
                answer.result = true;
            }
        }
        return answer;
    },
    display_name: function (input: string): Answer {
        const answer: Answer = {
            result: false,
            message:
                "В данное поле принимается: от 5 до 20 символов, латиница или кириллица, без пробелов, без спецсимволов",
        };
        if (!input) return answer;
        const Length = isLength(input, 5, 20);
        const Cyrillic = isCyrillicAlphabet(input);
        const Latin = isLatinAlphabet(input);
        const Spaces = isSpaces(input);
        const SpecialCharacters = isSpecialCharacters(input);
        if ((Cyrillic || Latin) && !Spaces && !SpecialCharacters && Length) {
            answer.result = true;
        }
        return answer;
    },
    title: function (input: string): Answer {
        const answer: Answer = {
            result: false,
            message:
                "В данное поле принимается: от 2 до 14 символов, латиница, кириллица, цифры без спецсимволов",
        };
        if (!input) return answer;
        const Length = isLength(input, 2, 14);
        const SpecialCharacters = isSpecialCharacters(input);
        if (!SpecialCharacters && Length) {
            answer.result = true;
        }
        return answer;
    },
    search: function (): Answer {
        const answer: Answer = {
            result: true,
            message: "",
        };
        return answer;
    },
};

export function init() {
    return {
        focus: (event: {
            target: any;
            preventDefault: () => void;
            composedPath: () => { querySelectorAll: (arg0: string) => any }[];
        }) => {
            const errorLabel = event
                .composedPath()[1]
                .querySelectorAll("label.input-error")[0];
            if (errorLabel) {
                errorLabel.className = "input-error";
            }
        },
        blur: (event: {
            target: any;
            preventDefault: () => void;
            composedPath: () => { querySelectorAll: (arg0: string) => any }[];
        }) => {
            const name = event.target.name;
            const checkFunc = listOfHashNames[name];
            if (checkFunc) {
                const value = event.target.value;
                const checkAnswer = checkFunc(value);
                const errorLabel = event
                    .composedPath()[1]
                    .querySelectorAll("label.input-error")[0];
                if (errorLabel) {
                    if (checkAnswer.result) {
                        errorLabel.className = "input-error";
                    } else {
                        errorLabel.textContent = checkAnswer.message;
                        errorLabel.className = "input-error _active";
                    }
                }
            }
        },
    };
}
export function check(data: Record<string, string>): boolean {
    const arr = Object.entries(data);
    const checkResult = arr.filter((item) => {
        const name: string = item[0];
        const checkThisName: Func = listOfHashNames[name];
        if (checkThisName) {
            const result = checkThisName(item[1]);
            if (result.result) {
                return item;
            }
        }
        return;
    });
    if (checkResult.length === arr.length) {
        return true;
    }
    return false;
}
