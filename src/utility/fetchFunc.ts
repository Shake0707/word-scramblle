import type { TApi } from "../types/api.type";
import { getRandomNumber } from "./getRandomNumber";

const API_BASE = "https://random-word-api.herokuapp.com/word";

export async function fetchFunc(): Promise<TApi> {
    const randomInt = getRandomNumber();
    const data = await fetch(API_BASE + "?length=" + randomInt);
    const res = await data.json() as TApi;
    

    return res;
}