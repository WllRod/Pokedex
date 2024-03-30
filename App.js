import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Header from './components/header';
import Body from './components/Body';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="red"
      />
      <Header />
      <Body />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
});
