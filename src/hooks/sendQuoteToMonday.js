import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM3NTY4MDg0OSwiYWFpIjoxMSwidWlkIjo2MjIxNzk2NiwiaWFkIjoiMjAyNC0wNi0yNFQwNDowMjowNS42NDlaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjI0NTk0ODEsInJnbiI6InVzZTEifQ.3EG_C6qBNTuL6cNBNQmNxZdo9XV43Cxp-SD6gHOG0Wk";
const BOARD_ID = "6889647133";

export const sendQuoteToMonday = async (formData) => {
  const columnValues = {
    texto8__1: formData.companyName || "",
    enlace__1: formData.website
      ? `${formData.website} ${formData.website}`
      : "",
    texto__1: formData.firstName || "",
    texto4__1: formData.lastName || "",
    tel_fono__1: formData.phone || "",
    correo_electr_nico__1: formData.email
      ? `${formData.email} ${formData.email}`
      : "",
  };

  const itemName = `${formData.firstName} ${formData.lastName}`;

  const mutation = `mutation {
    create_item (board_id: ${BOARD_ID}, item_name: "${itemName}", column_values: ${JSON.stringify(
    JSON.stringify(columnValues)
  )}) {
      id
    }
  }`;

  try {
    const response = await axios.post(
      "https://api.monday.com/v2",
      {
        query: mutation,
      },
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    );

    if (response.data.errors) {
      console.error("Error al enviar datos a Monday:", response.data.errors);
      return false;
    }

    console.log("Datos enviados a Monday con éxito:", response.data);
    return true;
  } catch (error) {
    console.error("Error al enviar datos a Monday:", error);
    return false;
  }
};
