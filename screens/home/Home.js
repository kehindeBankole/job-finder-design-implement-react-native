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
import CustomModal from '../../components/CustomModal';
import JobCard from '../../components/JobCard';
export default function Home() {
  const [text, onChangeText] = React.useState('Useless Text');
  const [clicked, setClicked] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [company, setCompany] = React.useState('');
  return (
    <View style={styles.container}>
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
      <ScrollView style={{marginTop: 5}}>
        <FlatList
          data={[
            {
              img: require('../../assets/images/image.png'),
              title: 'User Interface Designer',
              company:"TBWA\Buenos Aires"
            },
            {
              img: require('../../assets/images/bat.png'),
              title: 'UI/UX Designer',
              company:"Cybermoth GmbH"
            },
            {
              img: require('../../assets/images/3arrow.png'),
              title: 'Game UI Designer',
              company:"Javary Co. Studios"
            },
            {
              img: require('../../assets/images/show.png'),
              title: 'Social Media Specialist',
              company:"Showcialize"
            },
            {
              img: require('../../assets/images/peackock.png'),
              title: 'Graphics Designer',
              company:"Mohini Magazine"
            },
            {
              img: require('../../assets/images/motion.png'),
              title: 'Motion Illustrator',
              company:"Mohini Magazine"
            },
            {
              img: require('../../assets/images/bat.png'),
              title: 'UI/UX Designer',
              company:"TBWA\Buenos Aires"
            },
            {
              img: require('../../assets/images/image.png'),
              title: 'User Interface Designer',
              company:"TBWA\Buenos Aires"
            },
          ]}
          renderItem={({item}) => (
            <View style={{marginBottom: 5}}>
              <JobCard
                img={item.img}
                title={item.title}
                company={item.company}
                handleClick={() => {
                  setClicked(true);
                  setTitle(item.title);
                  setCompany(item.company);
                }}
              />
            </View>
          )}
          keyExtractor={item => item.id}
          // extraData={selectedId}
        />
      </ScrollView>

      <View
        style={{
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          position: 'absolute',
          // top:0,
          zIndex: 1,
          padding: 0,
          margin: 0,
          bottom: clicked === false ? -999 : 0,
        }}
        onTouchStart={() => setClicked(false)}>
        <CustomModal click={false} title={title} company={company} />
      </View>
    </View>
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
