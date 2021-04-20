var PageStore = React.createClass({
    displayName: 'PageStore',
    state:
        selectItemId = 0,
    
    
    select: function(EO) {
        EO.target.getAttribute('id')
    },
    
    
    render: function () {
        
        var myColumn = [];
        for (var columnName of this.props.point) {
            React.DOM.tr({ className: 'Product' },
                React.DOM.td({ className: 'point' }, columnName),
                
            );
            myColumn.push(columnName);
        };

        var productsPage = [];
        this.props.products.forEach(function (product) {
            var productPage =
                
                 React.DOM.tr({ key: product.code, className: 'Product',  onClick: this.select, id: product.code,}, //data-item: product.code,
                    React.DOM.td({ className: 'Name' }, product.name),
                    React.DOM.td({ className: 'Cost' }, product.cost),
                    React.DOM.td({ className: 'URL' }, product.url),
                    React.DOM.td({ className: 'Lot' }, product.lot),
                    React.DOM.td({ className: 'Button'},
                        React.DOM.input({type: 'button', value: 'Delete'},),
                    ),
                );
                
            productsPage.push(productPage);
        });

        return React.DOM.table({ className: 'PageStore' },
            React.DOM.thead({ className: 'Products'}, myColumn),
            React.DOM.tbody({ className: 'Products'}, productsPage),
        );
    },
});