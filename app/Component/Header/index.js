/*eslint import/no-unresolved: [2, { ignore: ['\.png'] }]*/
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
import StyledText from '../StyledText';

const Header = ({
  hasHamburger,
  hasBack,
  hasHome,
  hasSearch,
  hasClose,
  navigation,
  title,
}) => {
  const goToHome = () => navigation.navigate('Home');
  const toggleDrawer = () => navigation.navigate('DrawerToggle');
  const goBack = () => navigation.goBack();
  const goToSearch = () => navigation.navigate('Search');
  const goToClose = () => navigation.navigate('Home');
  
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <StyledText
          textStyle="h4MedWhiteT2"
          addedStyle={styles.title}
          upperCase
        >
          {title ? title : 'Bootstrap Native'}
        </StyledText>
      </View>
      {hasHamburger && (
        <TouchableOpacity onPress={toggleDrawer} style={styles.iconbackground}>
          <Image source={require('../../Assets/hamburger.png')} />
        </TouchableOpacity>
      )}
      {hasBack && (
        <TouchableOpacity onPress={goBack} style={styles.iconbackground}>
          <Image source={require('../../Assets/back.png')} />
        </TouchableOpacity>
      )}
      {hasHome && (
        <TouchableOpacity onPress={goToHome} style={styles.iconbackground}>
          <Image source={require('../../Assets/home.png')} />
        </TouchableOpacity>
      )}
      {hasSearch && (
        <TouchableOpacity onPress={goToSearch} style={styles.iconbackground}>
          <Image source={require('../../Assets/search.png')} />
        </TouchableOpacity>
      )}
      {hasClose && (
        <TouchableOpacity onPress={goToClose}>
          <View style={styles.iconbackground}>
            <Image source={require('../../Assets/close.png')} />
          </View>
        </TouchableOpacity>
      )}
      {!hasClose && !hasSearch && <View style={styles.iconbackground} />}
    </View>
  );
};

Header.propTypes = {
  hasBack: PropTypes.bool,
  hasClose: PropTypes.bool,
  hasHamburger: PropTypes.bool,
  hasHome: PropTypes.bool,
  hasSearch: PropTypes.bool,
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string,
};

export default Header;
