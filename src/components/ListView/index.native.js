import React, { Component } from "react";
import { FlatList } from "react-native";
import { List } from "react-native-elements";

export default class ListView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.props.data}
          ItemSeparatorComponent={this.props.renderSeparator}
          ListHeaderComponent={this.props.renderHeader}
          ListFooterComponent={this.props.renderFooter}
          renderItem={this.props.renderRow}
          onRefresh={this.props.onRefresh}
          refreshing={this.props.refreshing}
          onEndReached={this.props.onEndReached}
          onEndReachedThreshold={this.props.onEndReachedThreshold}
          { ...this.props }
        />
      </List>
    );
  }
}