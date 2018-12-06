import React from 'react';
import Modal from './Modal';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
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
            <View style={[styles.container, props.container]}>
                {
                 props.types == 'modal03' ? 
                 <View style={[styles.containAvatar, props.containAvatar]}>
                    <Image source={props.source || {uri: 'https://pickaface.net/gallery/avatar/unr_lucasgonzales_180720_0947_2j73zgk.png'}} height={props.heightMobile} width={props.heightMobile} style={[styles.avatar, props.avatar]}/>
                 </View>
                    : 
                    <Text style={[styles.txtTitle, props.cssTxtTile]}>{props.txtTitle ? props.txtTitle : 'Bạn chưa nhập title'}</Text>
                }
                <Text style={[styles.txtContent1, props.csstxtContent]}>{props.txtContent ? props.txtContent : 'Bạn chưa nhập Content' }</Text> 
                {
                    props.types == 'modal01' ? 
                        <View style={[styles.containPolicy,  props.cssPolicy]}>
                            <Text style={[styles.txtDetail,props.cssTxtDetail]}>{props.txtDetail ? props.txtDetail :  'Bạn chưa nhập thông tin chi tiết'}</Text>
                            <Text style={[styles.txtPolicy,props.cssTxtPolicy]}>{props.txtPolicy ? props.txtPolicy : 'Bạn chưa nhập chính sách' }</Text>
                        </View> : null
                }
                
                {
                    props.types == 'modal01' ||  props.types == 'modal03' ? 
                        <TouchableOpacity style={[styles.buttonModal1, props.button1]} onPress={props.onCloseModal1} >
                            <Text style={[styles.txtButton, props.cssTxtClose]}>{props.nameButton1 ? props.nameButton1 : 'Đóng'}</Text>
                        </TouchableOpacity> :
                        <View style={[styles.containDialogButton, props.containDialogButton]}>
                            <TouchableOpacity style={[styles.buttonModal2, props.button2]} onPress={props.onCloseModal2}>
                                <Text style={[styles.txtButton, props.cssTxtCancel]}>{props.nameButton1 ? props.nameButton1 : 'Hủy'}</Text>    
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.buttonModal3, props.button3]} onPress={props.onCloseModal2}>
                                <Text style={[styles.txtButton, props.cssTxtCall]}>{props.nameButton2 ? props.nameButton2 : 'Gọi'}</Text>
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
    containAvatar:{marginVertical: 15},
    avatar: {
        height: 80,
        width: 80
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
        bottom:0,
        backgroundColor:'rgb(74,173,205)', 
        paddingVertical: 10
    },
    containDialogButton: { 
        paddingVertical: 10,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 0, 
        position:'absolute' ,
        left: 0, 
        right:0,
        bottom:0 ,
        flexDirection: 'row',
        justifyContent: 'space-around' 
    },
    buttonModal2: {
        backgroundColor: 'gray', 
    },
    buttonModal3: {
        backgroundColor: 'rgb(74,173,205)',
    },  
    txtButton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16
    }
})