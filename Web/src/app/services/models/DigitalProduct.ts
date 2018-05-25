import { Tag } from './Tag';

export class ProducteDigital {
    id: number;
    nom: string;
    descripcioProducte: string;
    preu: number;
    tags: Array<Tag['id']>;
    stock: number;
}