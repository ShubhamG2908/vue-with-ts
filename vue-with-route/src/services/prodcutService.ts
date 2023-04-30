import type { Product } from '@/models/ProdcutModel';
import { products } from '@/data/prodcuts.json';
import _ from 'lodash';

export class PorductService {
    private allProducts: Product[] = products as Product[];

    public getProdcutCategory(): string[] {
        return _.uniq(this.allProducts.map(x => x.category));
    }

}