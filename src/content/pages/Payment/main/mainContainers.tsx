import { connect } from 'react-redux';
import { actions, selectors } from 'src/store/payment';
import Main from './main';

const mapStateToProps = (state: any) => ({
  data: selectors.dataSelector(state)
});

const mapDispatchToProps = dispatch => ({
  init: async (searchData: Object) => {
    return await Promise.all([
      dispatch(actions.getData(searchData))
    ]);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
