import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjIzMjg3MzUyNCwiYWFpIjoxMSwidWlkIjoyMzUzNzM2NCwiaWFkIjoiMjAyMy0wMS0zMVQyMTowMjoxNy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6OTUwNzUxNiwicmduIjoidXNlMSJ9.lX1RYu90B2JcH0QxITaF8ymd4d6dBes0FJHPI1mzSRE';
const BOARD_ID = '6179528415';

export const sendQuoteToMonday = async (formData) => {
    const planMapping = {
      option1: 'Starter',
      option2: 'Pro',
      option3: 'Custom',
      option4: 'No estoy seguro aún' // Asegúrate de que este valor también sea válido en Monday
    };
  
    const columnValues = {
      texto44: formData.companyName || '',
      enlace: formData.website ? `${formData.website} ${formData.website}` : '',
      texto: formData.firstName || '',
      texto4: formData.lastName || '',
      tel_fono: formData.phone || '',
      correo_electr_nico: formData.email ? `${formData.email} ${formData.email}` : '',
    };
  
    const mutation = `mutation {
      create_item (board_id: ${BOARD_ID}, item_name: "Nuevo contacto", column_values: ${JSON.stringify(JSON.stringify(columnValues))}) {
        id
      }
    }`;

  try {
    const response = await axios.post('https://api.monday.com/v2', {
      query: mutation
    }, {
      headers: {
        Authorization: API_KEY
      }
    });

    if (response.data.errors) {
      console.error('Error al enviar datos a Monday:', response.data.errors);
      return false;
    }

    console.log('Datos enviados a Monday con éxito:', response.data);
    return true;
  } catch (error) {
    console.error('Error al enviar datos a Monday:', error);
    return false;
  }
};