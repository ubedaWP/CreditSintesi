import { Tag } from './Tag';
export class ProducteFisic {
    id: number;
    nom: string;
    descripcioProducte: string;
    preu: number;
    tags: Array<Tag['id']>;
    stock: number;
}