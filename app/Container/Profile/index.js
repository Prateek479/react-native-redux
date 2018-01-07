import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Profile from 'Component/Profile';
import { fetchProfileAction } from 'Actions/profile'
import {
  selectProfileData,
  selectError,
  selectLoading
} from 'Selectors/profile';


const mapStateToProps = createStructuredSelector({
    profile : selectProfileData(),
    error: selectError(),
    isLoading: selectLoading(),
});

const mapDispatchToProps = {
    fetchProfile : fetchProfileAction
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);

