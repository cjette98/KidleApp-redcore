import { StyleSheet, Text, View } from 'react-native'
import {useState} from 'react'
import RNFS from 'react-native-fs';
import DocumentPicker from 'react-native-document-picker';
const MainContainer = () => {
    const [hascontent, setContent] = useState(null) 
    const [bookTitle, setBookTitle] = useState('')
    const generateBookParts = (book) => {
      const TotalCharPerPage = 275
      const bookPages = Math.round(book.length / TotalCharPerPage);
      const bookPartsList = [];
      let bookPart = book;
      for (let i = 1; i <= bookPages; i++) {
          if (bookPart.slice(0, TotalCharPerPage) != "") {
              bookPartsList.push(
                  <View style={styles.viewStyle} key={i}>
                      <Text style={styles.textContent}>{bookPart.slice(0, TotalCharPerPage)}</Text>
                      <Text style={styles.pageNumberStyle}>Page {i}</Text>
                  </View>
              );
              bookPart = bookPart.slice(TotalCharPerPage);
          }
      }
      setContent(bookPartsList);
  }
   
   
    const readFile = async (path) => {
        const response = await RNFS.readFile(path);
        generateBookParts(response)
      };

    const browsefile = async () => {
        try {
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.plainText],
          });
          readFile(res[0].uri)
          setBookTitle(res[0].name)
        } catch (err) {
          console.log(err)
        }
      };
  return  {
    bookTitle,
    hascontent,
    browsefile
  }
}

export default MainContainer

const styles = StyleSheet.create({
  
  viewStyle: {
      padding: 10,
  },
  textContent: {
      fontSize: 30,
  },
  pageNumberStyle: {
      fontSize: 16,
      color: 'gray',
      alignSelf: 'flex-end',
  }
});
