import { StyleSheet, Text, View, SafeAreaView, FlatList  } from 'react-native';
//import dataErrado from "@/constants/dataErrado.json"
import data from "@/constants/data"
import { Item } from '@/components/item';



export default function TabTwoScreen() {
  return (
    <>
      <View style={styles.center}>
        <Text>Terceira Página</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList style={styles.back} data={data} renderItem={({item}) => (
          <Item name={item.nome} age={item.idade} date={item.data} image={item.imagem}/>
        )}>

        </FlatList>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    paddingVertical: 20
  },

  container: {
    flex: 1
  },

  back: {
    paddingHorizontal: 20
  }
})