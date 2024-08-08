import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AddNewParticipant.css";
import axios from "axios";

const AddNewParticipant = () => {
  const navigate = useNavigate();
  const { eventID } = useParams();
  const [form, setForm] = useState({
    FullName: "",
    UserID: "",
    Deparment: "",
    IsOfficeEmployee: "",
    Gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
<<<<<<< HEAD
       // Add the new user
       const userResponse = await axios.post('https://localhost:7282/UsersDTO', form);
      
       // Link the new user to the event
       const UserID = userResponse.data.id; // Get the new user's ID
       await axios.post('https://localhost:7282/Events_UsersDTO', { eventID: parseInt(eventID), UserID });
 
       navigate(`/participant-list/${eventID}`);
     } catch (error) {
       console.error('Error adding participant:', error);
     }
=======
      // Yeni kullanıcı ekle
      const userResponse = await axios.post(
        "http://localhost:5043/api/users",
        form
      );

      // Yeni kullanıcıyı etkinlikle ilişkilendir
      const UserID = userResponse.data.id; // Yeni kullanıcının ID'sini al
      await axios.post("http://localhost:5043/api/eventsusers", {
        eventID: parseInt(eventID),
        UserID,
      });

      navigate(`/participant-list/${eventID}`);
    } catch (error) {
      console.error("Error adding participant:", error);
    }
>>>>>>> 2fb7c774642db59bba8056f0bd3a6846c761626d
  };

  const handleLoGoClick = () => {
    navigate("/");
  };

  const handleAddGuestClick = () => {
    navigate("/add-guest");
  };

  return (
    <div className="add-participant-container">
      <header className="header">
        <img
          src={`${process.env.PUBLIC_URL}/logo-esbas.png`}
          onClick={handleLoGoClick}
          className="logo"
          alt="ESBAŞ Logo"
        />
      </header>
      <div className="add-participant">
        <div className="add-participant-header">
          <h2>Yeni Katılımcı Ekle</h2>
          <button className="misafir-butonu" onClick={handleAddGuestClick}>Misafir Katılımcı</button>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Ad Soyad:
            <input
              type="text"
              name="FullName"
              value={form["FullName"]}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Card ID:
            <input
              type="text"
              name="UserID"
              value={form["UserID"]}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Kaydet</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewParticipant;


/*
<label>
            Departman:
            <FontAwesomeIcon
            icon = {faCog}
            onClick={() => handleIconClick('/add-new-participant/participant-department')}
            className="icon"
            />
            <select
              name="Department"
              value={form.Department}
              onChange={handleChange}
              required
            >
              <option value=""> Seçiniz </option>{" "}
              <option value="İnsan Kaynakları"> İnsan Kaynakları </option>{" "}
              <option value="Bilgi İşlem"> Bilgi İşlem </option>{" "}
            </select>{" "}
          </label>{" "}
          <label>
            Çalışma Alanı:
            <FontAwesomeIcon
            icon = {faCog}
            onClick={() => handleIconClick('/add-new-participant/participant-location')}
            className="icon"
            />
            <select
              name="IsOfficeEmployee"
              value={form.IsOfficeEmployee}
              onChange={handleChange}
              required
            >
              <option value=""> Seçiniz </option>
              <option value="Ofis"> Ofis </option>
              <option value="Saha"> Saha </option>
            </select>{" "}
          </label>{" "}
          <label>
            Cinsiyet:
            <FontAwesomeIcon
            icon = {faCog}
            onClick={() => handleIconClick('/add-new-participant/participant-gender')}
            className="icon"
            />
            <select
              name="Gender"
              value={form.Gender}
              onChange={handleChange}
              required
            >
              <option value=""> Seçiniz </option>
              <option value="Kadın"> Kadın </option>
              <option value="Erkek"> Erkek </option>
            </select>{" "}
          </label>{" "}
*/