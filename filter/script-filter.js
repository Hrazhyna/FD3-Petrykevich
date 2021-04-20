var PageWord = React.createClass({
    displayName: 'PageWord',
    propTypes: {
        words: React.PropTypes.arrayOf(
            React.PropTypes.string.isRequired,
            
        )
    },
    
    getInitialState: function () {
        return {
            list: this.myWords,
            sorted: false,
            filtered: ' ',
            processedArr: [],
        };
    },
    inputTextChanged: function (EO) {
        setState({ filtered: EO.target.value });
    },
    chekBoxClicked: function (EO) {
        setState({ sorted: EO.target.checked }, this.processedList);
    },
    processedList(){
        let result = this.props.words.slice();
         if (this.state.filtered) {
            result = result.filter(w => w.indexOf(filtered) != -1);
        };
        if (this.state.sorted) {
            result.sort();
        };
        this.setState({ processedArr: result });
        
    },
    resetCliked: function (EO) {
        setState({sorted: EO.target.false, });
    },
    render: function () {

        var myWords = [];
        for (let word of this.props.words) {
            React.DOM.option({ className: 'Word' }, word);
            myWords.push(word);
        };
        

        return React.DOM.div({ className: 'PageWord' },
            React.DOM.input({ type: 'checkbox', onClick: this.chekBoxClicked,}),
            React.DOM.input({ type: 'text', value: this.state.filtered, onChange: this.inputTextChanged }),
            React.DOM.input({ type: 'reset', onClick: this.resetCliked, }),
            React.DOM.select({ className: 'WinWord'}, this.state.list)
        );
    },
});