import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

const PopModal = props => {
  const [textInput, setInputText] = useState();

  return (
    <Modal
      animationType="fade"
      visible={props.isModalVisible}
      onRequestClose={props.setIsModalVisible(false)}
      style={styles.modalView}>
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setInputText(text)}
          defaultValue={textInput}
          editable={true}
          multiline={false}
          maxLength={200}
        />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalView: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },

  textInput: {
    width: '90%',

    borderColor: 'grey',
    borderWidth: 1,
    fontSize: 25,
  },
});

export default PopModal;
