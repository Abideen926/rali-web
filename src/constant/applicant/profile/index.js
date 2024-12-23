export const PROFILE_DETAILS = {
  userProfile: "/assets/images/profile/profile.png",
  userName: "James Anderson",
  contactDetails: [
    {
      title: "Email",
      name: "email",
      placeholder: "Info@Example.com",
    },
    {
      title: "Phone",
      name: "phone",
      placeholder: "(123)-456-7890",
    },
    {
      title: "Degree/Certifications",
      name: "degree",
      placeholder: "lorem lipsum/ year/ institute/ year of completion/ grade",
    },
    {
      title: "Other Education",
      name: "otherEducation",
      placeholder: "other edu",
    },
    {
      title: "Skills",
      name: "skills",
      placeholder: "skills",
    },
  ],
  about:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
};
export const EDIT_PROFILE_DETAILS = {
  userProfile: "/assets/images/profile/profile.png",
  userName: "James Anderson",
  contactDetails: [
    {
      title: "Name (Last, First Middle Initial)",
      name: "name",
      placeholder: "lorem lipsum dolor sit",
    },
    {
      title: "City",
      name: "city",
      placeholder: "lorem lipsum dolor sit",
    },
    {
      title: "State",
      name: "state",
      placeholder: "lorem lipsum dolor sit",
    },
    {
      title: "Address",
      name: "address",
      placeholder: "lorem lipsum dolor sit",
    },
    {
      title: "Degree/Certifications",
      name: "degree",
      placeholder: "lorem lipsum dolor sit",
    },
    {
      title: "Institute",
      name: "institute",
      placeholder: "lorem lipsum dolor sit",
    },
    {
      title: "Year Of Completion",
      name: "year",
      placeholder: "lorem lipsum dolor sit",
    },
    {
      title: "Grade/GPA",
      name: "grade",
      placeholder: "lorem lipsum dolor sit",
    },
    {
      title: "Other Education",
      name: "other_edu",
      placeholder: "lorem lipsum dolor sit",
    },
    {
      title: "Skills",
      name: "skills",
      placeholder: "lorem lipsum dolor sit",
    },
    {
      title: "About",
      name: "about",
      placeholder: "lorem lipsum dolor sit",
    },
  ],
  about:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
};

export const CHANGE_PASSWORD = [
  {
    label: "Current Password",
    name: "currentPass",
    placeholder: "************************************",
  },
  {
    label: "New Password",
    name: "newPass",
    placeholder: "************************************",
  },
  {
    label: "Confirm Your Password",
    name: "confirmPass",
    placeholder: "************************************",
  },
];

export const PROFILE_SETTINGS = [
  {
    title: "Notification Settings",
    placeHolder: "Job Seeker",
    name: "notification",
    buttonLable: "Change Notfication Type",
    link: "settings/changeNotification",
  },
  {
    title: "Email",
    placeHolder: "info@Example.com",
    name: "email",
    buttonLable: "Change Email",
    link: "settings/changeEmail",
  },
  {
    title: "Phone Number",
    placeHolder: "none",
    name: "phone",
    buttonLable: "Add Phone",
    link: "settings/addPhone",
  },
  {
    title: "Profile",
    placeHolder: "profile one",
    name: "profile",
    buttonLable: "Edit Profile",
    link: "/applicant/profile/editProfile",
  },
  // {
  //   title: "Cancel Account",
  //   placeHolder: "Cancel Your Account Permanently",
  //   name: "cancel",
  //   buttonLable: "Confirm",
  //   link: "",
  // },
  // {
  //   title: "Pause Account",
  //   placeHolder: "Are You Sure Want To Pause Account?",
  //   name: "pause",
  //   buttonLable: "Edit Profile",
  //   link: "",
  // },
  {
    title: "Sign Out",
    placeHolder: "Do You Want To Sign Out Your Account?",
    name: "signout",
    buttonLable: "Sign Out",
    link: "/applicant/login",
  },
];



export const CHANGE_EMAIL = [
  {
      label:'new email address',
      name:'newEamail',
      placeholder:'Info@Xyzgmail.com',

  },
  {
      label:'current password',
      name:'currentPassword',
      placeholder:'***********',

  }
]
export const ADD_NUMBER = [
  {
      label:'Add Phone number',
      name:'phone',
      placeholder:'United State (1)',

  },
  {
      label:'Password',
      name:'currentPassword',
      placeholder:'000-111-222-3',

  }
]

export const ADD_NUMBER_VERIFICATIONS = {
  logo: '/assets/images/logo.png',
  title : 'Email Verification',
  form : [
      {
          name:'verification',
          names: 'Verification Code*',
          placeHolder: '123456789'
      }
  ]
}