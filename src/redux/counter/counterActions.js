import { INCREMENT } from "./counterTypes"

export const updateCounter = () => {
    return {
        type: INCREMENT
    }
}