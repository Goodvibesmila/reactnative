
/* Importerar viktiga komponenter.
 1. Är inbyggda komponenter i React Native.
 2-4 är komponenter jag byggt i andra filer i samma projekt.  */
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';
import Typography from './components/Typography';
import Spacing from './components/Spacing';


/* Exporterar, samt skapar App. */
export default function App() {
  return (

    /* Länkar till styling-variabeln för hela containern.  */
    <View style={styles.container}>

      {/* 1. Länkar till styles-variabeln. 
      2-3. hämtar från typography, olika varianter (Storlek/stil på text
      4. Hämtar styling om "item" från styles-variabeln.) */}

      <View style={styles.tasksWrapper}>
      <Typography variant='header'>TODOLISTA</Typography>
      <Typography variant='subheader'> Uppgifter</Typography>
      <View style={styles.items}>


          {/* Hämtar från "task" och stoppar in en sträng. */ }
          <Task text={'Uppgift 1'} />
          <Task text={'Uppgift 2'} />

        </View>
      </View>
     
     {/* Här är "task-delen"
            1. Viewkomponent som innebär att när man trycker på inputdelen
            så kommer tangentbordet upp och pushar upp allt istället
            För att täcka det (ex i mobilläge)
            
            2. Behavior - Det här är från react native dok, betyder att om det är
              iOS så vill vi ha padding och är det android så vill vi ha height.
            3. Sen lägger vi in styles och hänvisar till writeTaskWrapper
            4. Därefter är inputfältet inkl styling.
            5. Sen kommer touchableOpacity som är en knapp.
            6. Sen kör vi vår spacingkomponent som jag byggt och
              stoppar in variant 3, vilket innebär ett space på 20
              (för att inpu ska hamna i samma höjd som knapp.)
            7. Styling för addwrapper.
            8. Lägger till "lägg till" text och styling.
            9. Lägger till space variant 2 också från min komponent.
            10. Kör variant body från min Typography komponent och skriver ut
                texten "du har nått botten av sidan".
             */}
     <KeyboardAvoidingView
     behavior={Platform.OS === "iOS" ? "padding" : "height"}
     style={styles.writeTaskWrapper} >
      <TextInput style={styles.input} placeholder={'Skriv en uppgift'}></TextInput>
      <TouchableOpacity >
        <Spacing variant='3'></Spacing>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>Lägg till</Text>
          </View> 
          <View> 
            <Spacing variant='2'></Spacing>
          <Typography variant='body'>Du har nått botten av sidan</Typography>
          </View>
         </TouchableOpacity>
     </KeyboardAvoidingView>

    </View>


  );
}

/*Skapar en "låda"/container/variabel" som innehåller styling.
stylesheet.create är ett inbyggt nativecomponent*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical:15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
