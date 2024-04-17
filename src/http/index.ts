import type {IBank} from "@/interfaces/IBank";
import type {IAgency} from "@/interfaces/IAgency";

var urlApi = "http://localhost:8080/"

async function obterDadosURL<T>(url: string) {
    const resposta = await fetch(url);
    const dados: T = await resposta.json();
    return dados;
}

export async  function obtainBanks(){
    return obterDadosURL<IBank[]>(urlApi + 'banks')
}
export async  function obtainAgencyByBank(bank_id: number){
    return obterDadosURL<IAgency[]>(urlApi + '/agencies/bank/' + bank_id)
}
