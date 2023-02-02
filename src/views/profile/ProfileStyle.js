import {StyleSheet} from 'react-native';

export const Style = StyleSheet.create({
  linear_gradient: {
    height: '100%',
  },
  main_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    flexDirection: 'column',
    height: '100%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  avatar_linear_gradient: {
    borderRadius: 200,
  },
  avatar: {
    borderRadius: 200,
  },
  scrollview: {
    height: '100%',
    paddingVertical: 5,
  },
  data_container: {
    margin: 5,

    width: '90%',
    gap: 10,
    paddingVertical: 10,
  },
  indevidual_data: {
    width: '100%',
    padding: 5,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
  },
  data_header: {
    color: 'black',
    fontSize: 15,
  },
  data_text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    color: 'black',
  },
  owner: {
    textAlign: 'center',
  },
  button_container: {
    width: '45%',
  },
  buttons_container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal_inner_container: {
    backgroundColor: 'white',
    height: '50%',
    width: '90%',
    gap: 20,
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'orange',
    borderWidth: 4,
    paddingVertical: 10,
  },
  modal_header: {
    fontSize: 20,
    color: 'black',
  },
  close_button_container: {
    marginTop: 'auto',
  },
  main_content: {
    fontSize: 25,
    color: 'black',
  },
});
