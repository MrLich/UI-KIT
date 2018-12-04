import React from 'react';
import View from '../View';
import Text from '../Text';
import SectionView from '../SectionView';

const styles = {
  containerDialog: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 0,
    margin: 0
  },
  messageWrapper: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 10,
    width: '100%'
  },
  titleWrapper: {
    flexDirection: 'row',
    marginBottom: 0,
    marginTop: 25,
    marginLeft: 10,
    width: '100%'
  },
  text: {
    justifyContent: 'flex-start',
    alignSelf: 'center'
  }
}

export default ({
  title,
  message,
  style
}) => {
  return (
    <SectionView style={{ ...styles.containerDialog, ...style }}>
      <View style={styles.titleWrapper} semiBold>
        {React.isValidElement(title) ? title : <Text style={{ ...styles.text, ...{ fontWeight: 'bold' } }}>{title}</Text>}
      </View>
      <View style={styles.messageWrapper}>
        {React.isValidElement(message) ? message : <Text style={styles.text}>{message}</Text>}
      </View>
    </SectionView>
  );
};

