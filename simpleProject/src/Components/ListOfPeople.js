import React, {useState} from 'react';
import {
  Modal,
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Pressable,
  TextInput,
} from 'react-native';
import People from '../../People.js';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/AntDesign';
import WebIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PopModal from './PopModal';
const {width, height} = Dimensions.get('window');
const ListOfPeople = () => {
  const [isLike, setIsLike] = useState(false);
  const [data, setData] = useState(People);
  const [modalVisible, setModalVisible] = useState(false);

  ///design card
  const Card = props => {
    const details = props.details;
    // delete Card function
    const deleteUser = id => {
      setData(data.filter(to => to.id != id));
    };
    return (
      <View style={styles.card} key={details.id}>
        {details.Image && (
          <View>
            <Image source={{uri: details.Image}} style={styles.photo} />
          </View>
        )}
        <View style={{marginTop: 20, marginLeft: 20, position: 'relative'}}>
          <Text style={styles.name}> {details.Name}</Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
            }}>
            <Icon name="mail-outline" size={28} />
            <Text style={styles.mailid}>{details.Mailid}</Text>
          </View>
          <View style={{marginTop: 8, flexDirection: 'row'}}>
            <Icons name="phone" size={28} />
            <Text style={{fontSize: 20, marginLeft: 10}}>
              {details.phoneNumber}
            </Text>
          </View>
          <View style={{marginTop: 8, flexDirection: 'row'}}>
            <WebIcon name="web" size={28} />
            <Text style={{fontSize: 20, marginLeft: 10}}>
              {details.Website}
            </Text>
          </View>
        </View>
        <View
          style={{
            borderTopWidth: 1,
            borderColor: '#C0C0C0',
            padding: 20,
            marginTop: 50,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              borderColor: '#C0C0C0',
              alignItems: 'center',
            }}>
            <Pressable onPress={() => setIsLike(isLike => !isLike)}>
              <Icon name="heart" size={40} color={isLike ? 'grey' : 'red'} />
            </Pressable>
          </View>
          <View
            style={{
              flex: 1,
              borderRightWidth: 1,
              borderColor: '#C0C0C0',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Icons name="edit" size={40} style={{marginRight: 10}} />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity onPress={() => deleteUser(details.id)}>
              <WebIcon name="delete" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => <Card details={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    padding: '3%',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  photo: {
    width: '100%',
    height: height / 3,
  },
  card: {
    width: '91%',
    margin: '2.5%',
    height: height / 1.5,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    elevation: 5,
    backgroundColor: '#fff',
    marginBottom: '5%',
    marginTop: '5%',
  },
  mailid: {
    fontSize: 20,
    marginLeft: 10,
  },
});

export default ListOfPeople;
