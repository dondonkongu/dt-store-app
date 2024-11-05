import { StyleSheet, Text, Image, View, TextInput, Alert } from 'react-native';
import React, { useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CheckBox, Input } from '@rneui/themed';
import { useState } from 'react';
import Button from '../components/Button';
import Line from '../components/Line';
import AuthContext from '../context/AuthContext';


const Login = ({ navigation }) => {
    const {login} = useContext(AuthContext)


    const [isSelected, setSelection] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleLoginWithFacebook = () => {
        console.log('login with facebook');


    }
    const handleLoginWithGoogle = () => {
        console.log('login with google');

    }
    const handleLogin = async() => {
        try { 
            await login(username,password)
            navigation.goBack()
            
        } catch (err) {
            console.log(err);
                Alert.alert('Thông báo',err.response?.data?.message||'dang nhap that bai')
        }

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
                        <Text>    </Text>
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
                            value={username}
                            onChangeText={(text)=>{
                                setUsername(text)} }
                        />
                    </View>
                    <View style={styles.viewInput}>
                        <Ionicons
                            name='key-outline'
                            size={24}
                            color='black'
                        />
                        <TextInput placeholder='password'
                            value={password}
                            style={styles.textInput}
                            secureTextEntry={!showPassword}
                            onChangeText={(text)=>setPassword(text) }
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
                        <Button title='Đăng nhập' width='100%' height={50} onPress={handleLogin} />
                    </View>
                    <View style={[styles.buttonContainer,{marginTop: 10}]}>
                        <Line title='HOẶC ĐĂNG NHẬP BẰNG' />
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons
                                onPress={handleLoginWithFacebook}
                                name='logo-facebook'
                                size={50}
                                color={'#3b5998'}
                            />
                            <Ionicons
                                onPress={handleLoginWithGoogle}
                                name='logo-google'
                                size={50}
                                color={'#db4437'}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.bottomText}>
                    <Text>Bằng việc chọn đăng nhập, bạn xác nhận đã đọc và đồng ý với các<Text style={styles.innerText}> Điều Khoản Sử Dụng</Text> cùng<Text style={styles.innerText}> Chính Sách Bảo Mật & Chia Sẻ Thông Tin</Text> của DT Store</Text>
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
        marginTop: 15,
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
        borderColor: '#ccc',
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
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    bottomText: {
       marginTop:100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    }

});
