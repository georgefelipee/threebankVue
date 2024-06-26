import type {IBank} from "@/interfaces/IBank";
import type {IAgency} from "@/interfaces/IAgency";
import type {IUserData} from "@/interfaces/IUserData";
import type {ICreateAccount} from "@/interfaces/ICreateAccount";

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

export async function signUp(userData: IUserData) {
    // Parse response body as JSON
    return await fetch(urlApi + 'users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData),
    });
}

export async function createBankAccount(ICreateAccount: ICreateAccount ) {
    return await fetch(urlApi + 'accounts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ICreateAccount),
    });
}
