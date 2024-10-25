import { StyleSheet, Text, Image, View, TextInput } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CheckBox, Input } from '@rneui/themed';
import { useState } from 'react';
import Button from '../components/Button';

const Login = ({ navigation }) => {

    const [isSelected, setSelection] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword =()=>{
        setShowPassword(!showPassword);
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/banner.jpg')}
                style={{ width: '100%', height: 200, resizeMode: 'cover' }}
            />
            <View style={styles.content}>
                <View style={styles.contentTop}>
                    <View style={styles.title}>
                        <Ionicons name='arrow-back' size={24} color='#000' onPress={() => navigation.goBack()} />
                        <Text style={styles.topText}> Đăng nhập</Text>
                        <Text></Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.baseText}>Bạn chưa có tài khoản của DT?
                            <Text onPress={() => navigation.navigate('Register')} style={styles.innerText}> Đăng ký ngay </Text></Text>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.viewInput}>
                        <Ionicons
                            name='person-outline'
                            size={24}
                            color='black'
                        />
                        <TextInput placeholder='username'
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.viewInput}>
                        <Ionicons
                            name='key-outline'
                            size={24}
                            color='black'
                        />
                        <TextInput placeholder='password'
                            style={styles.textInput}
                            secureTextEntry={showPassword}
                        />
                        <Ionicons
                        onPress={handleShowPassword}
                            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                            size={24}
                            color='black'
                        />


                    </View>
                    <View style={styles.support}>
                        <CheckBox
                            title='Lưu tài khoản'
                            checked={isSelected}
                            onPress={() => setSelection(!isSelected)}
                        >
                        </CheckBox>
                        <Text style={[styles.innerText, { paddingRight: 15 }]}>Quên mật khẩu?</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                    <Button title='Đăng nhập' width={300} height={40} />
                    </View>


                </View>
            </View>

        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    contentTop: {

    },
    title: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    topText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    baseText: {
        fontSize: 15,
        color: 'black',
    },
    innerText: {
        color: 'blue',
    },
    inputContainer: {
        marginTop: 20,
    },
    viewInput: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        margin: 10,

    }
    , textInput: {
        paddingHorizontal: 10,
        height: 40,
        width: '85%',


    }
    , support: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonContainer:{
        alignItems: 'center',
        justifyContent: 'center',
    }

});
