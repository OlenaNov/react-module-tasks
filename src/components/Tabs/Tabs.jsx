import { Component, PureComponent } from "react";

export default class Tabs extends PureComponent {
    state = {
        activeTabIndex: 0,
    };

    // ================================================================
    // Для предотвращения re-render одинакового компонента 
    // объявляется либо Проверка через функциюshouldComponentUpdate(nextProps, nextState),
    //  либо используется PureComponent. 
    // ================================================================


    // shouldComponentUpdate(nextProps, nextState) {
    //         return nextState.activeTabIndex !== this.state.activeTabIndex;
    // };

    setActiveTabIndex = idx => {
        this.setState({
            activeTabIndex: idx,
        })
    };

    render() {
        console.log(`Re-render @ ${Date.now()}`);

        const { activeTabIndex } = this.state;
        const { items } = this.props;
        const activeTab = items[activeTabIndex];
        return (
            <>
                <div>
                    {items.map((item, idx) => (
                        <button 
                        type="button"
                        key={item.label}
                        onClick={() => this.setActiveTabIndex(idx)}
                        >{item.label}
                        </button>
                    ))}
                </div>

                <div>
                    <h2>{activeTab.label}</h2>
                    <p>{activeTab.content}</p>
                </div>
            </>
        )
    }
};