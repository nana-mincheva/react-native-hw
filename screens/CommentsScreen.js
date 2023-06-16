import { StyleSheet, Text, View, Image } from 'react-native';
import ReturnButton from "../components/ReturnButton";

const CommentsScreen = () => {
  return (
      <View style={styles.container}>
          <View style={styles.commentsHeader}>
               <ReturnButton></ReturnButton>
                <Text style={styles.commentsTitle}>Коментарі</Text>
            </View>
          <Image
              source={require('../assets/images/comments_img.jpg')}
              style={styles.postPhoto} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopColor: 'rgba(0, 0, 0, 0.3)',
    borderTopWidth: 1,
    width: "100%",
  },
   commentsHeader: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    height: 90,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 12,
    marginBottom: 32,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
    },
   commentsTitle: {
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: 500,
    fontSize: 17,
    },
  postPhoto: {
    width: 353,
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },
});

export default CommentsScreen;