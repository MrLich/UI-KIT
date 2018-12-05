import React from 'react';
import Modal from './Modal';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
export default class ModalCommon extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const props = this.props;
        const stylesModal = {
            height: props.height ? props.height : '30%', 
            position:'relative',
            marginRight:  props.marginRight ? props.marginRight : '10%', 
            width: props.width ? props.width : '90%', 
            borderRadius: props.borderRadius ? props.borderRadius : 5,
        };
        return <Modal
        isOpen={props.visible}
        onOpened={props.onShow}
        onClosed={props.onRequestClose}
        style={{...stylesModal, ...props.style}}>
            <View style={styles.container}>
                <Text style={styles.txtTitle}>{props.txtTitle ? props.txtTitle : 'Bạn chưa nhập title'}</Text>
                <Text style={styles.txtContent1}>{props.txtContent ? props.txtContent : 'Bạn chưa nhập Content' }</Text>
                <View style={styles.containPolicy}>
                    <Text style={styles.txtDetail}>{props.txtDetail ? props.txtDetail :  'Bạn chưa nhập thông tin chi tiết'}</Text>
                    <Text style={styles.txtPolicy}>{props.txtPolicy ? props.txtPolicy : 'Bạn chưa nhập chính sách' }</Text>
                </View>
                {
                    props.types !== 'dialog' ? 
                        <TouchableOpacity style={styles.buttonModal1} onPress={props.onCloseModal1} >
                            {props.nameButton1 ? props.nameButton1 : 'Đóng'}
                        </TouchableOpacity> :
                        <View style={{ paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                            <TouchableOpacity onPress={props.onCloseModal2}>
                                {props.nameButton1 ? props.nameButton1 : 'Hủy'}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={props.onCloseModal3}>
                                {props.nameButton2 ? props.nameButton2 : 'Gọi'}
                            </TouchableOpacity>
                        </View>
                }
            </View>
        </Modal>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    txtTitle: {
        textAlign:'center',
        color:'rgb(47,54,66)' ,
        fontWeight: 'bold' ,
        paddingHorizontal: 10,
        paddingVertical:10,
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(223,223,223)'
    },
    txtContent1: {
        textAlign:'left',
        color:'rgb(62,69,80)', 
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 15
    },
    containPolicy: {
        marginLeft: 20, 
        flexDirection: 'row', 
        alignItems:'center'
    },
    txtDetail: { 
        fontSize: 15
    },
    txtPolicy: {
        color: 'rgb(74,173,205)',
        paddingLeft: 5
    },
    buttonModal1: { 
        alignSelf: 'center', 
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: 5, 
        fontSize: 15, width: '100%',
        position: 'absolute', 
        left: 0, 
        right:0,
        bottom:0 
    }
})