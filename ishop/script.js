var PageStore = React.createClass({
    displayName: 'PageStore',
    render: function () {

        var productsPage = [];
        
        this.props.products.forEach(function (product) {
            
            var productPage =
                React.DOM.div({ key: product.code, className: 'Product' },
                    React.DOM.img({ src: product.url },),
                    React.DOM.div({ className: 'Info' },
                        React.DOM.p({ className: 'Name' }, product.name),
                        React.DOM.span({ className: 'Cost' }, product.cost),
                        React.DOM.span({ className: 'Lot' }, product.lot),
                    ),
                );
            productsPage.push(productPage);
        });

        return React.DOM.div({ className: 'PageStore' },
            React.DOM.div({ className: 'Store' }, this.props.store ),
            React.DOM.div({ className: 'Products'}, productsPage ),
        );
    },
    
});