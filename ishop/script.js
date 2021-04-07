var PageStore = React.createClass({
    displayName: 'PageStore',
    render: function () {

        var productsCode = [];
        
        this.props.products.forEach(function (item) {
            var product = this.props.products[item];
            var productPage =
                React.DOM.div({ key: product.code, className: 'Product' },
                    React.DOM.div({ className: 'Photo' }, product.url),
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
            Reace.DOM.div({ className: 'Products'}, productsPage ),
        );
    },
    
});