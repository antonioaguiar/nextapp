import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {

    state = {
        pagina: 1,
        products: [],
    };

    //executa assim que monta a tela
    componentDidMount() {
        this.loadProducts(1);
    }

    loadProducts = async () => {
        const response = await api.get(`/products?page=${this.state.pagina}`);
        //console.log(response.data.docs);
        this.setState({ products: response.data.docs });
    }

    navegarPaginasClick(newPage) {
        this.setState({ pagina: newPage });
    };
 

    render() {
        return (
            <div>
                <h1>Produtos: {this.state.products.length}</h1>
                <div className="product-list">
                    {this.state.products.map(product => (
                        <h2 key={product._id}>{product.title}</h2>
                    ))}
                </div>
                <button onClick={this.navegarPaginasClick(2)}>
                    Página Atual: {this.state.pagina}
                </button>
            </div>
        );
    }
}