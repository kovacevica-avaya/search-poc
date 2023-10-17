import { put, takeLatest, fork } from 'redux-saga/effects';
import { setSearchResults } from '../store/slice';

function* searchContactsAction(action) {
     // Log for testing
     console.log('searchContactsAction saga triggered with payload:', action.payload);
    const searchString = action.payload.toLowerCase();
    if (searchString) {
      const dummyResults = ['Vladimir', 'George', 'Momir', 'Aleksandar'];
      const filteredResults = dummyResults.filter(name =>
        name.toLowerCase().includes(searchString)
      );
      yield put(setSearchResults(filteredResults));
    } else {
      yield put(setSearchResults([]));
    }
  }
  

  export function* watchSearchContacts() {
    // Log when the widget is mounted and saga runs
    console.log('watchSearchContacts saga initialized and running...');
  
    yield fork(searchContactsAction, { payload: '' }); 
  
    yield takeLatest('search/setSearchInput', searchContactsAction);
  }
  
