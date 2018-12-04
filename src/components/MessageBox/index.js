import React from 'react';
import View from '../View';
import Text from '../Text';
import SectionView from '../SectionView';
import TouchableOpacity from '../TouchableOpacity';

const styles = {
  leftButton: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 0
  },
  oneButton: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  middleButton: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  rightButton: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 4
  },
  containerDialog: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 4
  },
  messageWrapper: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    marginBottom: 20,
    width: '100%'
  },
  buttonWrapper: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  buttonGroup: {
    flexDirection: 'row',
    width: '100%'
  },
  buttonContainer: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  button: {
    fontSize: 17,
    alignSelf: 'center',
    marginBottom: 0
  },
  title: {
    marginBottom: 0,
    marginTop: 15
  },
  text: {
    justifyContent: 'center',
    alignSelf: 'center'
  }
}

const MessageButton = ({ onPress, style, text, textColor }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.buttonContainer, ...style }}
      onPress={onPress}
    >
      <View style={styles.buttonWrapper}>
        <Text style={{ ...styles.button, ...{ color: textColor || '#333333' } }}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ({
  title,
  message,
  buttons,
  onDismissed,
  style
}) => {
  return (
    <SectionView style={{ ...styles.containerDialog, ...style }}>
      <View style={styles.title} semiBold>
        {React.isValidElement(title) ? title : <Text style={{ ...styles.text, ...{ fontWeight: 'bold' } }}>{title}</Text>}
      </View>
      <View style={styles.messageWrapper}>
        {React.isValidElement(message) ? message : <Text style={styles.text}>{message}</Text>}
      </View>
      <View style={styles.buttonGroup}>
        {buttons.map((element, index) => {
          const lastIndex = buttons.length - 1;
          const buttonStyle = lastIndex === 0 ? styles.oneButton : (index === 0 ? styles.leftButton :
            (index === lastIndex ? styles.rightButton : styles.middleButton));
          return <MessageButton key={index}
            onPress={element.onPress || onDismissed}
            style={{ ...buttonStyle, ...element.style }}
            text={element.text}
            textColor={element.textColor}
          />
        })}
      </View>
    </SectionView>
  );
};

