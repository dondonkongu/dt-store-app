import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import BASE_URL from '../../api';

const BoSuuTap = () => {
  const navigation = useNavigation();

  const [collections, setCollections] = useState([])

  const fetchCollections = async () => {
    try {
      const response = await BASE_URL.get('/dt-store/collections');
      setCollections(response.data.result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCollections();
  }, []);


 
  const renderCollectionItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('CollectionDetail', { collectionData: item })} style={styles.collectionItem}>
      <Image source={{ uri: item.url }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description} numberOfLines={3}>{item.description}</Text>
        <Text style={styles.detailButton}>Xem chi tiết</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={collections}
        keyExtractor={(item) => item.id}
        renderItem={renderCollectionItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default BoSuuTap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  collectionItem: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  detailButton: {
    fontSize: 14,
    color: '#f8d000',
    fontWeight: 'bold',
    
  },
});
