import type {IBank} from "@/interfaces/IBank";

export interface IAgency {
    id: number,
    nameAgency: string,
    bank: IBank
}