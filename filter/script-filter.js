var PageWord = React.createClass({
    displayName: 'PageWord',
    propTypes: {
        words: React.PropTypes.arrayOf(
            React.PropTypes.string.isRequired,
            
        )
    },
    
    getInitialState: function () {
        return {
            list: this.myWords, // не видно массива
            sorted: false,
            filtered: ' ',
            processedArr: [],
        };
    },
    inputTextChanged: function (EO) {
        this.setState({ filtered: EO.target.value }, this.processedList);
    },
    chekBoxClicked: function (EO) {
        this.setState({ sorted: EO.target.checked }, this.processedList);
    },
    processedList(){
        let result = this.myWords.slice(); //
         if (this.state.filtered) {
            result = result.filter(w => w.indexOf(filtered) != -1);
        };
        if (this.state.sorted) {
            result.sort();
        };
        this.setState({ processedArr: result });
        
    },
    resetCliked: function (EO) {
        this.setState({sorted: EO.target.false, filtered: EO.target.null});
    },
    render: function () {
        
        var myWords = [];
        // this.setState = ({list: myWords}); 
        
        this.props.words.forEach(function (word, index) { // props
            var w =
                React.DOM.option({key: index}, word)
            myWords.push(w)
        });
            
        
        return React.DOM.form({ className: 'PageWord' },
            React.DOM.div({ className: 'Input' },
                 React.DOM.input({ type: 'checkbox', onClick: this.chekBoxClicked,}),
            React.DOM.input({ type: 'text', value: this.state.filtered, onChange: this.inputTextChanged }),
            React.DOM.input({ type: 'reset', onClick: this.resetCliked, }),
            ),
            React.DOM.select({ className: 'WinWord', size: 5, },  myWords),                               // myWords
            
        );
    },
});