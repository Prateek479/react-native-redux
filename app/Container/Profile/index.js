import { connect } from 'react-redux';
import Profile from 'Component/Profile';
import { fetchProfileAction } from 'Actions/profile'

const mapStateToProps = (state) => {
  return {
    profile : state.profile
  }
};

const mapDispatchToProps = {
    fetchProfile : fetchProfileAction
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);

