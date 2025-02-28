import { MessageType } from "#core";

import { evaluator } from "./eval.mjs";
import { Antilink, Antiword } from "./main.mjs";

export async function upsertsM(message: MessageType) {
    Promise.all([evaluator(message), Antilink(message), Antiword(message)]);
}
