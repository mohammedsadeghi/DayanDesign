import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Style} from './ProfileStyle';
import {Image, Modal, ScrollView, Text, View} from 'react-native';
import Avatar from './../../assets/p-re.png';
import {HomeButton} from '../../components/buttons/HomeButtons';

const modalEnum = ['سوابق بیمار', 'تجویز نسخه', 'حساسیت دارویی'];
const Profile = ({navigation}: any) => {
  const [modalHeader, setModalHeader] = React.useState(0);
  const [modal, setModal] = React.useState(false);
  return (
    <>
      <LinearGradient
        colors={['#FDFCFB', '#667EEA']}
        style={Style.linear_gradient}>
        <ScrollView style={Style.scrollview}>
          <View style={Style.main_container}>
            <LinearGradient
              colors={['#FC466B', '#3F5EFB']}
              style={Style.avatar_linear_gradient}>
              <Image source={Avatar} style={Style.avatar} />
            </LinearGradient>
            <View style={Style.buttons_container}>
              <View style={Style.button_container}>
                <HomeButton
                  text="    نمایش سوابق بیمار"
                  handleClick={() => {
                    setModal(true);
                    setModalHeader(0);
                  }}
                />
              </View>
              <View style={Style.button_container}>
                <HomeButton
                  text="       تجویز نسخه"
                  handleClick={() => {
                    setModal(true);
                    setModalHeader(1);
                  }}
                />
              </View>
              <View style={Style.button_container}>
                <HomeButton
                  text="    حساسیت دارویی"
                  handleClick={() => {
                    setModal(true);
                    setModalHeader(2);
                  }}
                />
              </View>
              <View style={Style.button_container}>
                <HomeButton
                  text="           بازگشت"
                  handleClick={() => {
                    navigation.goBack();
                  }}
                />
              </View>
            </View>
            <View style={Style.data_container}>
              <View style={Style.indevidual_data}>
                <Text style={Style.data_header}>نام </Text>
                <Text style={Style.data_text}>محمد</Text>
              </View>
              <View style={Style.indevidual_data}>
                <Text style={Style.data_header}>نام خانوادگی</Text>
                <Text style={Style.data_text}>صادقی</Text>
              </View>
              <View style={Style.indevidual_data}>
                <Text style={Style.data_header}>جنسیت</Text>
                <Text style={Style.data_text}>مرد</Text>
              </View>
              <View style={Style.indevidual_data}>
                <Text style={Style.data_header}>تاریخ تولد</Text>
                <Text style={{...Style.data_text, alignSelf: 'flex-end'}}>
                  1379/10/24
                </Text>
              </View>
              <View style={Style.indevidual_data}>
                <Text style={Style.data_header}>تاریخ اعتبار بیمه</Text>
                <Text style={{...Style.data_text, alignSelf: 'flex-end'}}>
                  1402/05/05
                </Text>
              </View>
              <View style={Style.indevidual_data}>
                <Text style={Style.data_header}>نوع بیمه</Text>
                <Text style={Style.data_text}>اجباری</Text>
              </View>
              <View style={Style.indevidual_data}>
                <Text style={Style.data_header}>تاریخ آخرین نسخه</Text>
                <Text style={{...Style.data_text, alignSelf: 'flex-end'}}>
                  1401/10/10
                </Text>
              </View>
              <View style={Style.indevidual_data}>
                <Text style={Style.data_header}>تاریخ اعتبار آخرین نسخه</Text>
                <Text style={{...Style.data_text, alignSelf: 'flex-end'}}>
                  1401/12/12
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>

      <Modal
        animationType="slide"
        visible={modal}
        transparent
        style={{justifyContent: 'center', alignItems: 'center', margin: 0}}>
        <View style={Style.modalContainer}>
          <View style={Style.modal_inner_container}>
            <Text style={Style.modal_header}>{modalEnum[modalHeader]}</Text>
            {modalHeader !== 1 && (
              <Text style={Style.main_content}>
                {modalEnum[modalHeader]} ثبت نشده است!
              </Text>
            )}
            {modalHeader === 1 && (
              <View style={Style.main_content}>
                <View style={Style.buttons_container}>
                  <View style={Style.button_container}>
                    <HomeButton text="ویزیت" handleClick={() => {}} />
                  </View>
                  <View style={Style.button_container}>
                    <HomeButton text="دارو" handleClick={() => {}} />
                  </View>
                  <View style={Style.button_container}>
                    <HomeButton text="آزمایشگاه" handleClick={() => {}} />
                  </View>
                  <View style={Style.button_container}>
                    <HomeButton text="تصویربرداری" handleClick={() => {}} />
                  </View>
                </View>
              </View>
            )}
            <View style={Style.close_button_container}>
              <HomeButton
                text="بستن"
                handleClick={() => {
                  setModal(false);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
export default Profile;
