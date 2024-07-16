import React, { useState } from "react";
import './index.css';
import './animations.css';
import './Reservations.css';
import './Login.css';

const DateErrorMessage = () => {
    return (
        <div className="fielderorr">
            <p className="error">Please enter a valid date</p>
        </div>
    )
  }

  const AvailabletimesErrorMessage = () => {
    return (
        <div className="fielderorr">
            <p className="error">Please enter a valid time</p>
        </div>
    )
  }
  const GuestsErrorMessage = () => {
    return (
        <div className="fielderorr">
            <p className="error">Please enter a valid number of guests</p>
        </div>
    )
  }

  const OcassionErrorMessage = () => {
    return (
        <div className="fielderorr">
            <p className="error">Please enter a valid occasion</p>
        </div>
    )
  }

const mindate = "2024-06-29";


    function Reservations() {
        const [date , setDate] = useState({
            value3: "",
            istouched3: false,
        });
        const [guests , setGuests] = useState({
            value4: "",
            istouched4: false,
        });
        const [occasion , setOccasion] = useState({
            value5: "Occasion",
            istouched5: false,
        });
        const [availabletimes , setAvailabletimes] = useState({
            value6: "00:00",
            istouched6: false,
        });


        function formValid() {
            return (
                date.value3 >= mindate && occasion.value5 !== "Occasion" &&
                guests.value4 > 0 &&
                availabletimes.value6 !== "00:00"
            )
        }

        function handleSubmit (e) {
            e.preventDefault();
            alert("Reserved a table successfully!");
            console.log(date, availabletimes, guests, occasion);
             /*onSubmit({date, availabletimes, guests, occasion}); */

            setDate({
                value3: "",
                istouched3: false,
            });
            setGuests({
                value4: "",
                istouched4: false,
            });
            setOccasion({
                value5: "Occasion",
                istouched5: false,
            });
            setAvailabletimes({
                value6: "00:00",
                istouched6: false,
            });
        }

      /*  const fetchAPI = (date) => {
            fetch("https://randomuser.me/api/?results=1")
                .then((response) => response.json())
                .then((data) => initializeTimes(data))
                .then(data => console.log(data));
        }

        useEffect(() => {
            fetchAPI();
        }, []); */



        return (
        <div className="layout-form">
            <form onSubmit={handleSubmit} className="form-1" method="POST">
            <p className="form-title">Book your table</p>
            <div className="section-wrap">
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" name="choose date" placeholder="mm/dd/yyyy" value={date.value3}
                onChange={e => { setDate({...date, value3: e.target.value}); }}
                onBlur={() => { setDate({...date, istouched3: true }); }} className={date.value3 < mindate && date.istouched3 ? "erorr-color" : "normal-color" } aria-required="true" aria-invalid="true" required/>
                {date.value3 < mindate && date.istouched3 ? (
                    <DateErrorMessage></DateErrorMessage>
                ) : null }
            </div>
            <div className="section-wrap">
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" data-testid="res-time" name="choose time" value={availabletimes.value6}
                onChange={e => { setAvailabletimes({...availabletimes, value6: e.target.value}); }}
                onBlur={() => { setAvailabletimes({...availabletimes, istouched6: true }); }}  className={ availabletimes.value6 < "17:00" && availabletimes.istouched6 ? "erorr-color" : "normal-color" } aria-required="true" aria-invalid="true" required>
                    <option value="00:00">00:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                </select>
                {availabletimes.value6 < "17:00" && availabletimes.istouched6 ? (
                    <AvailabletimesErrorMessage></AvailabletimesErrorMessage>
                ) : null }
            </div>
            <div className="section-wrap">
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="0" name="number of guests" min="0" max="10" id="guests" value={guests.value4}
                onChange={e => { setGuests({...guests, value4: e.target.value}); }}
                onBlur={() => { setGuests({...guests, istouched4: true }); }} className={guests.value4 < 1 && guests.istouched4 ? "erorr-color" : "normal-color"} aria-required="true" aria-invalid="true" required/>
                {guests.value4 < 1 && guests.istouched4 ? (
                    <GuestsErrorMessage></GuestsErrorMessage>
                ) : null }
            </div>
            <div className="section-wrap">
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" data-testid="occasion" name="occasion" value={occasion.value5}
                onChange={e => { setOccasion({...occasion, value5: e.target.value}); }}
                onBlur={() => { setOccasion({...occasion, istouched5: true }); }} className={occasion.value5 === "Occasion" && occasion.istouched5 ? "erorr-color" : "normal-color"} aria-required="true" aria-invalid="true" required>
                    <option value="Occasion">Occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                {occasion.value5 === "Occasion" && occasion.istouched5 ? (
                    <OcassionErrorMessage></OcassionErrorMessage>
                ) : null }
            </div>
            <div className="section-wrap">
                <input type="submit" role="button" value="Make Your Reservation" className="button-1" disabled={!formValid()}/>
            </div>
            </form>
        </div>
        )
    }


export default Reservations;