import React from 'react';
import RmcListView from 'rmc-list-view';
import Zscroller from 'rmc-list-view/lib/Zscroller';

class DataSource extends RmcListView.DataSource {
    constructor(props) {
        super(props);
    }
}

export default class ListView extends React.Component {
    constructor(props) {
        super(props);

        const dataSource = new DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            dataSource,
            refreshing: true,
            height: document.documentElement.clientHeight,
        };
    }

    componentDidMount() {
        document.body.style.overflowY =
            navigator.userAgent.match(/Android|iPhone|iPad|iPod/i) ? 'hidden' : 'auto';

        this.lv.getInnerViewNode().addEventListener('touchstart', this.ts = (e) => {
            this.tsPageY = e.touches[0].pageY;
        });
        const scrollNode = document.scrollingElement ? document.scrollingElement : document.body;
        this.lv.getInnerViewNode().addEventListener('touchmove', this.tm = (e) => {
            this.tmPageY = e.touches[0].pageY;
            if (this.tmPageY > this.tsPageY && this.scrollerTop <= 0 && scrollNode.scrollTop > 0) {
                console.log('start pull to refresh');
                this.domScroller.options.preventDefaultOnTouchMove = false;
            } else {
                this.domScroller.options.preventDefaultOnTouchMove = undefined;
            }
        });
    }

    componentWillUnmount() {
        this.lv.getInnerViewNode().removeEventListener('touchstart', this.ts);
        this.lv.getInnerViewNode().removeEventListener('touchmove', this.tm);
    }

    onScroll = (e) => {
        this.scrollerTop = e.scroller.getValues().top;
        this.domScroller = e;
    };

    scrollingComplete = () => {
        if (this.scrollerTop >= -1) {
            this.setState({ showFinishTxt: false });
        }
    }
    
    renderPullIcon() {
        return [
            <div key="0" className="zscroller-refresh-control-pull">
                <span>Refreshed</span>
            </div>,
            <div key="1" className="zscroller-refresh-control-release">
                <span>Release to fetch data</span>
            </div>,
        ];
    }

    render() {
        return (
            <RmcListView
                ref={el => this.lv = el}
                style={{ height: this.props.height + 'px', margin: 0, padding: 0 }}
                dataSource={this.state.dataSource.cloneWithRows(this.props.data)}
                renderScrollComponent={props => <Zscroller className={'list-group'} {...props} />}
                scrollerOptions={{ scrollbars: true, scrollingComplete: this.scrollingComplete }}
                renderSeparator={this.props.renderSeparator}
                renderHeader={this.props.renderHeader}
                renderFooter={this.props.renderFooter}
                renderRow={this.props.renderRow}
                refreshControl={this.props.refreshControl}
                onRefresh={this.props.onRefresh}
                onEndReached={this.props.onEndReached}
                onEndReachedThreshold={this.props.onEndReachedThreshold}
                pageSize={this.props.pageSize}
                refreshing={this.state.refreshing}
                onScroll={this.onScroll}
                icon={this.renderPullIcon()}
                loading={'Loading...'}
                refreshControl
                { ...this.props }
            />
        );
    }
}