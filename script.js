var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portfolio = function (_React$Component) {
    _inherits(Portfolio, _React$Component);

    function Portfolio(props) {
        _classCallCheck(this, Portfolio);

        var _this = _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).call(this, props));

        _this.state = {
            portfolio: [{
                name: 'Metal Investements',
                shares_owned: 10,
                cost_per_share: 20,
                market_price: 100
            }, {
                name: 'Johanesburg solutions LTD',
                shares_owned: 10,
                cost_per_share: 20,
                market_price: 100
            }, {
                name: 'Tech Giants',
                shares_owned: 10,
                cost_per_share: 20,
                market_price: 100
            }, {
                name: 'Best Solutions',
                shares_owned: 10,
                cost_per_share: 20,
                market_price: 100
            }],
            form: {
                name: '',
                shares_owned: 0,
                cost_per_share: 0,
                market_price: 0
            }
        };

        _this.deleteStock = _this.deleteStock.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleForm = _this.handleForm.bind(_this);
        _this.addStock = _this.addStock.bind(_this);
        return _this;
    }

    _createClass(Portfolio, [{
        key: 'deleteStock',
        value: function deleteStock(i) {
            var portfolio = this.state.portfolio.slice();
            portfolio.splice(i, 1);
            this.setState({ portfolio: portfolio });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e, i) {
            var portfolio = this.state.portfolio.slice();
            var _e$target = e.target,
                name = _e$target.name,
                value = _e$target.value;

            portfolio[i][name] = value;
            this.setState({ portfolio: portfolio });
        }
    }, {
        key: 'handleForm',
        value: function handleForm(e) {
            var _e$target2 = e.target,
                name = _e$target2.name,
                value = _e$target2.value;
            var form = this.state.form;

            form[name] = value;
            this.setState({ form: form });
        }
    }, {
        key: 'addStock',
        value: function addStock(e) {
            e.preventDefault();
            var portfolio = this.state.portfolio.slice();
            portfolio.push(this.state.form);
            this.setState({
                portfolio: portfolio,
                form: {
                    name: '',
                    shares_owned: 0,
                    cost_per_share: 0,
                    market_price: 0
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                portfolio = _state.portfolio,
                form = _state.form;


            var market_value = portfolio.reduce(function (sum, stock) {
                return stock.shares_owned * stock.market_price + sum;
            }, 0);
            var cost = portfolio.reduce(function (sum, stock) {
                return stock.shares_owned * stock.cost_per_share + sum;
            }, 0);
            var portfolio_gain_loss = market_value - cost;
            return React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'h3',
                    { className: 'text-center' },
                    'React Stock Portfolio'
                ),
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-12' },
                        React.createElement(
                            'table',
                            { className: 'table table-responsive' },
                            React.createElement(
                                'thead',
                                null,
                                React.createElement(
                                    'tr',
                                    null,
                                    React.createElement(
                                        'th',
                                        { scope: 'col' },
                                        'Name'
                                    ),
                                    React.createElement(
                                        'th',
                                        { scope: 'col' },
                                        'Shares Owned'
                                    ),
                                    React.createElement(
                                        'th',
                                        { scope: 'col' },
                                        'Cost per share'
                                    ),
                                    React.createElement(
                                        'th',
                                        { scope: 'col' },
                                        'Market price'
                                    ),
                                    React.createElement(
                                        'th',
                                        { scope: 'col' },
                                        'Market Value'
                                    ),
                                    React.createElement(
                                        'th',
                                        { scope: 'col' },
                                        'Gain/Loss'
                                    ),
                                    React.createElement('th', { scope: 'col' })
                                )
                            ),
                            React.createElement(
                                'tbody',
                                null,
                                portfolio.map(function (stock, i) {
                                    var name = stock.name,
                                        shares_owned = stock.shares_owned,
                                        cost_per_share = stock.cost_per_share,
                                        market_price = stock.market_price;

                                    var market_value = shares_owned * market_price;
                                    var profit_loss = market_value - shares_owned * cost_per_share;
                                    return React.createElement(
                                        'tr',
                                        { key: i },
                                        React.createElement(
                                            'td',
                                            null,
                                            name
                                        ),
                                        React.createElement(
                                            'td',
                                            null,
                                            React.createElement('input', { onChange: function onChange(e) {
                                                    return _this2.handleChange(e, i);
                                                }, type: 'number', name: 'shares_owned', value: shares_owned })
                                        ),
                                        React.createElement(
                                            'td',
                                            null,
                                            React.createElement('input', { onChange: function onChange(e) {
                                                    return _this2.handleChange(e, i);
                                                }, type: 'number', name: 'cost_per_share', value: cost_per_share })
                                        ),
                                        React.createElement(
                                            'td',
                                            null,
                                            React.createElement('input', { onChange: function onChange(e) {
                                                    return _this2.handleChange(e, i);
                                                }, type: 'number', name: 'market_price', value: market_price })
                                        ),
                                        React.createElement(
                                            'td',
                                            null,
                                            market_value
                                        ),
                                        React.createElement(
                                            'td',
                                            null,
                                            profit_loss
                                        ),
                                        React.createElement(
                                            'td',
                                            null,
                                            React.createElement(
                                                'button',
                                                { className: 'btn btn-light btn-sm', onClick: function onClick() {
                                                        return _this2.deleteStock(i);
                                                    } },
                                                'Remove'
                                            ),
                                            ' '
                                        )
                                    );
                                })
                            )
                        )
                    ),
                    React.createElement(
                        'form',
                        { className: 'col-12 mt-2 mb-4', onSubmit: this.addStock },
                        React.createElement('input', {
                            className: 'mx-2',
                            name: 'name',
                            type: 'text',
                            placeholder: 'Name',
                            onChange: this.handleForm,
                            value: form.name,
                            required: true
                        }),
                        React.createElement('input', {
                            className: 'mx-2',
                            name: 'shares_owned',
                            type: 'number',
                            placeholder: 'Shares',
                            value: form.shares_owned,
                            onChange: this.handleForm
                        }),
                        React.createElement('input', {
                            className: 'mx-2',
                            name: 'cost_per_share',
                            type: 'number',
                            placeholder: 'Cost',
                            value: form.cost_per_share,
                            onChange: this.handleForm
                        }),
                        React.createElement('input', {
                            className: 'mx-2',
                            name: 'market_price',
                            type: 'number',
                            placeholder: 'Price',
                            value: form.market_price,
                            onChange: this.handleForm
                        }),
                        React.createElement(
                            'button',
                            { className: 'btn btn-primary btn-sm' },
                            'Add'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-12 col-md-6' },
                        React.createElement(
                            'h4',
                            { className: 'mb-3' },
                            'Portfolio value: $',
                            market_value
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-12 col-md-6' },
                        React.createElement(
                            'h4',
                            { className: 'mb-3' },
                            'Portfolio Gain/Loss $',
                            portfolio_gain_loss
                        )
                    )
                )
            );
        }
    }]);

    return Portfolio;
}(React.Component);

ReactDOM.render(React.createElement(Portfolio, null), document.querySelector("#root"));