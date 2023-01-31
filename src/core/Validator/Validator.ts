interface Answer {
    result: boolean;
    message: string;
}
type Func = (input: string) => Answer;
export default class Validator {
    form: HTMLElement;
    constructor(form: HTMLElement) {
        this.form = form;
        setTimeout(() => this.init(), 1);
    }
    isLatinAlphabet(input: string): boolean {
        const pattern = new RegExp(/[a-z]/i);
        const isMatch = pattern.test(input);
        return isMatch;
    }
    isCyrillicAlphabet(input: string): boolean {
        const pattern = new RegExp(/[а-я]/i);
        const isMatch = pattern.test(input);
        return isMatch;
    }
    isFirstLetterIsUppercase(input: string): boolean {
        const pattern = new RegExp(/^[A-ZА-Я]/);
        const isMatch = pattern.test(input);
        return isMatch;
    }
    isCapitalLetter(input: string): boolean {
        const pattern = new RegExp(/[A-ZА-Я]/g);
        const isMatch = pattern.test(input);
        return isMatch;
    }
    isSpaces(input: string): boolean {
        const pattern = new RegExp(/\s/g);
        const isMatch = pattern.test(input);
        return isMatch;
    }
    isNumber(input: string): boolean {
        const pattern = new RegExp(/[0-9]/g);
        const isMatch = pattern.test(input);
        return isMatch;
    }
    isSpecialCharacters(input: string): boolean {
        // eslint-disable-next-line no-useless-escape
        const pattern = new RegExp(/[!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?]/g);
        const isMatch = pattern.test(input);
        return isMatch;
    }
    isEmail(input: string): boolean {
        const pattern = new RegExp(
            // eslint-disable-next-line no-useless-escape
            /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
        );
        const isMatch = pattern.test(input);
        return isMatch;
    }
    isPhone(input: string): boolean {
        const pattern = new RegExp(
            // eslint-disable-next-line no-useless-escape
            /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g
        );
        const isMatch = pattern.test(input);
        return isMatch;
    }
    isLength(input: string, min: number, max: number): boolean {
        const length = input.length;
        if (min <= length && length <= max) {
            return true;
        }
        return false;
    }
    isEmpty(input: string | undefined | null): boolean {
        if (input) {
            if (input.trim().length) {
                return true;
            }
        }
        return false;
    }
    first_name(input: string): Answer {
        const answer: Answer = {
            result: false,
            message:
                "В данное поле принимается: латиница или кириллица, первая буква должна быть заглавной, без пробелов. без цифр, без спецсимволов (допустим только дефис)",
        };
        if (!input) return answer;
        const isCyrillic = this.isCyrillicAlphabet(input);
        const isLatin = this.isLatinAlphabet(input);
        const isFirstLetterIsUppercase = this.isFirstLetterIsUppercase(input);
        const isSpaces = this.isSpaces(input);
        const isNumber = this.isNumber(input);
        const isSpecialCharacters = this.isSpecialCharacters(input);
        if (
            (isCyrillic || isLatin) &&
            isFirstLetterIsUppercase &&
            !isSpaces &&
            !isNumber &&
            !isSpecialCharacters
        ) {
            answer.result = true;
        }
        return answer;
    }
    second_name(input: string): Answer {
        const answer: Answer = {
            result: false,
            message:
                "В данное поле принимается: латиница или кириллица, первая буква должна быть заглавной, без пробелов. без цифр, без спецсимволов (допустим только дефис)",
        };
        if (!input) return answer;
        return this.first_name(input);
    }
    login(input: string): Answer {
        const answer: Answer = {
            result: false,
            message:
                "В данное поле принимается: от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)",
        };
        if (!input) return answer;
        const isCyrillic = this.isCyrillicAlphabet(input);
        const isLatin = this.isLatinAlphabet(input);
        const isSpaces = this.isSpaces(input);
        const isSpecialCharacters = this.isSpecialCharacters(input);
        const isLength = this.isLength(input, 3, 20);
        if (!isCyrillic && isLatin && !isSpaces && !isSpecialCharacters && isLength) {
            answer.result = true;
        }
        return answer;
    }
    email(input: string): Answer {
        const answer: Answer = {
            result: false,
            message: "Неверный формат почты",
        };
        if (!input) return answer;
        const isEmail = this.isEmail(input);
        if (isEmail) {
            answer.result = true;
        }
        return answer;
    }
    password(input: string): Answer {
        const answer: Answer = {
            result: false,
            message:
                "В данное поле принимается: от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра",
        };
        if (!input) return answer;
        const isCyrillic = this.isCyrillicAlphabet(input);
        const isLatin = this.isLatinAlphabet(input);
        const isSpaces = this.isSpaces(input);
        const isNumber = this.isNumber(input);
        const isCapitalLetter = this.isCapitalLetter(input);
        const isLength = this.isLength(input, 8, 40);
        if (
            !isCyrillic &&
            isLatin &&
            !isSpaces &&
            isNumber &&
            isCapitalLetter &&
            isLength
        ) {
            answer.result = true;
        }
        return answer;
    }
    phone(input: string): Answer {
        const answer: Answer = {
            result: false,
            message:
                "В данное поле принимается: от 10 до 15 символов, состоит из цифр, может начинается с плюса.",
        };
        if (!input) {
            return answer;
        }
        const isPhone = this.isPhone(input);
        if (isPhone) {
            answer.result = true;
        }
        return answer;
    }
    message(input: string): Answer {
        const answer: Answer = {
            result: false,
            message: "",
        };
        if (!input) return answer;
        if (!this.isEmpty(input)) {
            answer.result = true;
        }
        return answer;
    }
    passwordRepite(input: string): Answer {
        const answer: Answer = {
            result: false,
            message: "Введенные пароли разные",
        };
        if (!input) return answer;
        const password = document.getElementById("password") as HTMLInputElement;
        if (password) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const value: string = password.value;
            if (input === value) {
                answer.result = true;
            }
        }
        return answer;
    }
    display_name(input: string): Answer {
        const answer: Answer = {
            result: false,
            message:
                "В данное поле принимается: от 5 до 20 символов, латиница или кириллица, без пробелов, без спецсимволов",
        };
        if (!input) return answer;
        const isLength = this.isLength(input, 5, 20);
        const isCyrillic = this.isCyrillicAlphabet(input);
        const isLatin = this.isLatinAlphabet(input);
        const isSpaces = this.isSpaces(input);
        const isSpecialCharacters = this.isSpecialCharacters(input);
        if ((isCyrillic || isLatin) && !isSpaces && !isSpecialCharacters && isLength) {
            answer.result = true;
        }
        return answer;
    }
    search(): Answer {
        const answer: Answer = {
            result: true,
            message: "",
        };
        return answer;
    }
    init() {
        const inputList = this.form.querySelectorAll("input");
        const labelList = this.form.querySelectorAll("label.input-error");
        function findingErrorLabel(name: string) {
            const length = labelList.length;
            for (let i = 0; i < length; i++) {
                if (labelList[i].getAttribute("for") === name) {
                    return labelList[i];
                }
            }
            return null;
        }
        inputList.forEach((input: HTMLInputElement) => {
            const name = input.getAttribute("name") as keyof Validator;
            const funcThisClass: Func = (this[name] as Func).bind(this);
            if (name && funcThisClass) {
                const errorLabel: Element | null = findingErrorLabel(name);
                input.addEventListener("focus", () => {
                    if (errorLabel) {
                        errorLabel.className = "input-error";
                    }
                });
                input.addEventListener("blur", () => {
                    const value = input.value;
                    const result = funcThisClass(value);
                    if (errorLabel) {
                        errorLabel.textContent = result.message;
                        if (!result.result) {
                            errorLabel.className = "input-error _active";
                        } else {
                            errorLabel.className = "input-error";
                        }
                    }
                });
            }
        });
    }
}
