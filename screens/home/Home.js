import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Filter from '../../assets/images/filter.svg';
import JobCard from '../../components/JobCard';
export default function Home() {
  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: 30,
          paddingHorizontal: 16,
        }}>
        <Text style={styles.pageTitle}>Latest Gigs</Text>
        <View style={styles.filter}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          <TouchableOpacity>
            <View style={styles.button}>
              <Filter />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 5}}>
        <FlatList
          data={[
            {img: require('../../assets/images/image.png') , title:"User Interface Designer"},
            {img: require('../../assets/images/bat.png') , title:"UI/UX Designer"},
            {img: require('../../assets/images/3arrow.png') , title:"Game UI Designer"},
            {img: require('../../assets/images/show.png') , title:"Social Media Specialist"},
            {img: require('../../assets/images/peackock.png') , title:"Graphics Designer"},
            {img: require('../../assets/images/motion.png') , title:"Motion Illustrator"},
            {img: require('../../assets/images/bat.png') , title:"UI/UX Designer"},
            {img: require('../../assets/images/image.png') , title:"User Interface Designer"},
          ]}
          renderItem={({item}) => (
            <View style={{marginBottom: 5}}>
              <JobCard img={item.img} title={item.title}/>
            </View>
          )}
          keyExtractor={item => item.id}
          // extraData={selectedId}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //   paddingHorizontal: 16,
    position: 'relative',
    height: Dimensions.get('window').height - 30,
    // paddingTop: 30,
  },
  pageTitle: {
    //fontWeight: '500',
    fontSize: 28,
    color: '#2E3137',
    fontFamily: 'GTWalsheimPro-Bold',
  },
  filter: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    fontFamily: 'GTWalsheimPro-Bold',
    borderRadius: 11,
    backgroundColor: '#F3F3F3',
    borderColor: '#F3F3F3',
    paddingHorizontal: 10,
    paddingVertical: 11,
    width: '85%',
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: '#9969D3',
    borderRadius: 11,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
