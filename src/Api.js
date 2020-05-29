import axios from 'axios';

const api = axios.create({
    baseURL: 'https://script.googleusercontent.com/macros/echo?user_content_key=K7E97H4pJKWJT8qi60PgITkkDhe7wkT1gaPCoZ9T_94aA4NvCf4icePSz9SrqowkKGjmviudKimdo91EromVixv0clyrxpDAm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFkSJ3OGPU4PNUNksnCEJmJS93T2ZzyujjUpxX3tYNvUSMYBj7AgB7_TWN7yU7wky0W-dnclfdIe&lib=MiU-jTl38wC2L3rz6MLSQoNcSVaJnOjrd'
});

export default api;