export function getRandomNumber(min: number = 4, max: number = 7): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}