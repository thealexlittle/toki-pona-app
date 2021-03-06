import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    overflow: 'hidden',
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    width: '95%',
    justifyContent: 'space-evenly',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  input: {
    flex: 1,
    marginLeft: 10
  }, 
  list:{
    flex: 1
  },
  empty:{
    margin: 100,
    fontSize: 20
  }
});

export default styles