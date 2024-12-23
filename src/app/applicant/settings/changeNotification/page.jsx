'use client'
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import BackButtonWithTitle from '@/components/applicant/dashboard/BackButtonWithTitle';
import Navbar from '@/components/applicant/dashboard/Navbar';
import { NAVBAR_DATA } from '@/constant/applicant/navbar';
import Container from '@/components/common/Container';
import AllowJobSearchNotificationSwitch from '@/components/applicant/settings/changeNotficationType/AllowJobSearchNotificationSwitch';
import AddJobAlertDropdown from '@/components/applicant/settings/changeNotficationType/AddJobAlertDropdown';
import { COUNTRIES, STATES, CITIES, JOB_CATEGORIES, JOB_LOCATIONS, JOB_SHIFTS } from '@/services/apiService/apiEndPoints';
import apiInstance from '@/services/apiService/apiServiceInstance';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobCategories, setJobCategories] = useState([]);
  const [jobLocations, setJobLocations] = useState([]);
  const [jobShifts, setJobShifts] = useState([]);
  const [errors, setErrors] = useState('');

  const [dropdownStates, setDropdownStates] = useState({
    selectedCountry: '',
    selectedState: '',
    selectedCity: '',
    selectedJobCategory: '',
    selectedJobLocation: '',
    selectedJobType: '',
    selectedJobShift: '',
  });

  const handleDropdownChange = (key, value) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await apiInstance.get(COUNTRIES);
        setCountries(response?.data?.data?.countries || []);
      } catch (error) {
        setErrors(error?.response?.data?.message || 'Failed to load countries');
      }
    };

    const getJobCategories = async () => {
      try {
        const response = await apiInstance.get(JOB_CATEGORIES);
        setJobCategories(response?.data?.data?.categories || []);
      } catch (error) {
        setErrors(error?.response?.data?.message || 'Failed to load job categories');
      }
    };

    const getJobLocations = async () => {
      try {
        const response = await apiInstance.get(JOB_LOCATIONS);
        setJobLocations(response?.data?.data?.locations || []);
      } catch (error) {
        setErrors(error?.response?.data?.message || 'Failed to load job locations');
      }
    };

    const getJobShifts = async () => {
      try {
        const response = await apiInstance.get(JOB_SHIFTS);
        setJobShifts(response?.data?.data?.shifts || []);
      } catch (error) {
        setErrors(error?.response?.data?.message || 'Failed to load job shifts');
      }
    };

    getCountries();
    getJobCategories();
    getJobLocations();
    getJobShifts();
  }, []);

  useEffect(() => {
    if (dropdownStates.selectedCountry) {
      const getStates = async (countryId) => {
        try {
          const response = await apiInstance.get(`${STATES}?countryId=${countryId}`);
          setStates(response?.data?.data?.states || []);
        } catch (error) {
          setErrors(error?.response?.data?.message || 'Failed to load states');
        }
      };
      getStates(dropdownStates.selectedCountry);
    }
  }, [dropdownStates.selectedCountry]);

  useEffect(() => {
    if (dropdownStates.selectedState) {
      const getCities = async (stateId) => {
        try {
          const response = await apiInstance.get(`${CITIES}?stateId=${stateId}`);
          setCities(response?.data?.data?.cities || []);
        } catch (error) {
          setErrors(error?.response?.data?.message || 'Failed to load cities');
        }
      };
      getCities(dropdownStates.selectedState);
    }
  }, [dropdownStates.selectedState]);


  const router = useRouter();
    const handleBack = () => {
      router.back();
    };

  return (
    <Box>
      <Navbar data={NAVBAR_DATA} />
      <Container>
        <BackButtonWithTitle label="Notification" onClick={handleBack}/>
        <AllowJobSearchNotificationSwitch />
        <AddJobAlertDropdown
          countries={countries}
          states={states}
          cities={cities}
          jobCategories={jobCategories}
          jobLocations={jobLocations}
          jobShifts={jobShifts}
          dropdownStates={dropdownStates}
          handleDropdownChange={handleDropdownChange}
        />
      </Container>
    </Box>
  );
};

export default Page;
