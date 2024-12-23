import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import applicantFormReducer from './slices/applicantRegistrationFormSlice';
import authSlice from './slices/authSlice';
import applicantAppliedJob from './slices/applicantAppliedSpecificJob'
import attachedCv from './slices/applicantCv';
import applicantType from './slices/applicantStageType'

const rootReducer = combineReducers({
    form: applicantFormReducer,
    auth: authSlice,
    appliedJobs: applicantAppliedJob,
    applicantAttachedCv: attachedCv,
    applicantLetterType: applicantType
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'appliedJobs', 'applicantAttachedCv'],
};

export default persistReducer(persistConfig, rootReducer);
