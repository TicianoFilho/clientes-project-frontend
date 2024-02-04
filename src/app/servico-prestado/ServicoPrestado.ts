import { Cliente } from "../clientes/Clientes";

export class ServicoPrestado {
    id: number;
    descricao: string;
    clienteId: number;
    valor: number;
    dataCadastro: string;
}

export class ServicoPrestadoResearch {
    id: number;
    descricao: string;
    cliente: Cliente;
    valor: number;
    dataCadastro: string;
}

export class ServicoPrestadoDashboard {
    servicoPrestadoTotal: number;
}