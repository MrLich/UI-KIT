import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist'

String.prototype.underScoreToCamelCase = function () {
    return this.toLowerCase().replace(/[-_]([a-z])/g, function (g) { return g[1].toUpperCase(); })
};

String.prototype.camelToUnderScoreUpperCase = function () {
    return this.split(/(?=[A-Z])/).join('_').toUpperCase()
}

Array.prototype.removeFirstElement = function () {
    this.shift();
    return this;
}

function getArgs(func) {
    // First match everything inside the function argument parens.
    var args = func.toString().match(/function\s.*?\(([^)]*)\)/)[1];

    // Split the arguments string into an array comma delimited.
    return args.split(',').map(function (arg) {
        // Ensure no inline comments are parsed and trim the whitespace.
        return arg.replace(/\/\*.*\*\//, '').trim();
    }).filter(function (arg) {
        // Ensure no undefined values are added.
        return arg;
    }).removeFirstElement();
}

export default class StateManager extends React.Component {
    static definedActions = {};
    static type(stateName, name) {
        return StateManager.definedActions[stateName][name] ? name.camelToUnderScoreUpperCase(): undefined;
    }
    static func(stateName, name) {
        return StateManager.definedActions[stateName][name];
    }
    static create(opts, middleware, callbackWhenDone) {
        let reducers = {};
        Object.keys(opts).forEach((stateName) => {
            let stateActionList = {};
            const stateInstance = new opts[stateName]();
            const methods = Object.getOwnPropertyNames(stateInstance['__proto__']).filter(x => x !== 'constructor');
            methods.forEach((method) => {
                stateActionList[method] = stateInstance[method];
            });
            const initialStates = stateInstance.state;

            Object.keys(stateActionList).forEach((name) => {
                const parameters = getArgs(stateActionList[name]);
                if (!StateManager.definedActions[stateName]) {
                    StateManager.definedActions[stateName] = {};
                }
                StateManager.definedActions[stateName][name] = (...args) => {
                    let passengers = {};
                    parameters.forEach((param, index) => {
                        passengers[param] = args[index];
                    })
                    return {
                        ...{
                            type: name.camelToUnderScoreUpperCase()
                        }, ...passengers
                    };
                };
            })
            const persistConfig = stateInstance.persistConfig;
            const reducerState = (state = initialStates, action) => {
                if (Object.keys(StateManager.definedActions[stateName]).indexOf(action.type.underScoreToCamelCase()) != -1) {
                    let passengers = { state, ...action };
                    delete passengers.type;
                    return stateActionList[action.type.underScoreToCamelCase()](...Object.values(passengers));
                } else {
                    return state;
                }
            }
            reducers[stateName] = persistConfig ? persistReducer(persistConfig, reducerState) : reducerState;
        })
        const storeEnhancer = middleware ? applyMiddleware(middleware): undefined;
        const storeObject = createStore(combineReducers(reducers), storeEnhancer);
        if (typeof callbackWhenDone === 'function') callbackWhenDone(storeEnhancer);
        return {
            store: storeObject,
            persistor: persistStore(storeObject)
        }
    };

    static connect(...args) {
        const component = args.shift();
        return connect(
            (state) => {
                let stateProps = {};
                args.forEach((stateName) => {
                    if (state[stateName]) {
                        stateProps = { ...stateProps, ...state[stateName] };
                    }
                });
                return stateProps;
            },
            (dispatch) => {
                let actionProps = {};
                args.forEach((stateName) => {
                    if (StateManager.definedActions[stateName]) {
                        actionProps = { ...actionProps, ...bindActionCreators(StateManager.definedActions[stateName], dispatch) };
                    }
                })
                return actionProps;
            }
        )(component)
    }
}
