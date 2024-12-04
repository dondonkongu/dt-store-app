import { SafeAreaView, StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CardMedium from '../components/CardMedium'

const CollectionDetail = ({ navigation }) => {
    const route = useRoute()
    const { collectionData } = route.params



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={26} color="white" onPress={() => navigation.goBack()} />
                <Text style={styles.headerText}>{collectionData.name}</Text>
                <View style={{ width: 26 }} />
            </View>
            <FlatList
                data={collectionData.products}
                keyExtractor={(item) => item.id}
                numColumns={2}
                ListHeaderComponent={
                    <>
                        <View style={styles.body}>
                            <Image source={{ uri: collectionData.url }} style={{ width: '100%', height: 280 }} resizeMode="stretch" />
                            <Text style={{ textAlign: 'center', margin: 10, fontSize: 17 }}>Bộ sưu tập</Text>
                            <Text style={{ textAlign: 'center', margin: 10, fontSize: 15, fontWeight: 'bold' }}>
                                {collectionData.name}
                            </Text>
                            <Text style={styles.description}>{collectionData.description}</Text>
                        </View>
                    </>
                }
                renderItem={({ item }) => (
                    <View style={{ flex:1}}>
                        <CardMedium data={item} />
                    </View>
                )}
            />


        </SafeAreaView>
    )
}

export default CollectionDetail

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#f5f5f5',
    },
    header: { backgroundColor: '#f8d000', width: '100%', paddingHorizontal: 10, height: 70, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: 5, },
    headerText: { color: 'black', fontSize: 20, fontWeight: 'semibold', },
    body: { flex: 1, },
    description: { textAlign: 'center', margin: 12, fontSize: 15 }
})