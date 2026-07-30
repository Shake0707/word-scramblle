export function createInputs(length: number, frame: HTMLDivElement) {
    frame.innerHTML = "";
    for (let i = 0; i < length; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1;
        frame.appendChild(input);
    }
}