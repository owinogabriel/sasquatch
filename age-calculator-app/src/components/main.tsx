"use client";

import { useState } from "react";
import "./App.css";
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
  day: number;
  month: number;
  year: number;
};

interface isSuccess {
  isSuccess: boolean;
}

interface initialState extends Inputs, isSuccess {}

const initialState: initialState = {
  isSuccess: false,
  day: 0,
  month: 0,
  year: 0,
};

function App() {
  const [formData, setformData] = useState(initialState);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();


  const calculateAge = (day: number, month: number, year: number) => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths -= 1;
      ageDays += new Date(year, month, 0).getDate();
    }

    if (ageMonths < 0) {
      ageYears -= 1;
      ageMonths += 12;
    }

    return { years: ageYears, months: ageMonths, days: ageDays };
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { day, month, year } = data;
    const calculatedAge = calculateAge(day, month, year);
    const {days, months,years} =calculatedAge
    setformData((prev: initialState) => {
      return {
        ...prev,
        isSuccess: true,
        day:days,
        month:months,
        year:years,
      };
    });
  };
  return (
    <main>
      <section className="age-calculator">
        <form
          className="age-calculator__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex-group text-slate-900">
            <div className="grid-flow inputWrapper">
              <label className="label" htmlFor="day">
                Day
              </label>
              <input
                type="text"
                id="day"
                placeholder="DD"
                aria-describedby="error"
                className={`input ${errors.day ? "input-error" : ""}`}
                size={1}
                {...register("day", {
                  required: "This field is required",
                  min: { value: 1, message: "invalid day" },
                  max: { value: 31, message: "invalid day" },
                })}
              />
              {errors.day && (
                <span id="error" className="error">
                  {errors.day.message}
                </span>
              )}
            </div>
            <div className="grid-flow">
              <label className="label" htmlFor="month">
                Month
              </label>
              <input
                type="text"
                id="month"
                placeholder="MM"
                aria-describedby="error"
                className={`input ${errors.month ? "input-error" : ""}`}
                size={1}
                {...register("month", {
                  required: "This field is required",
                  min: { value: 1, message: "invalid month" },
                  max: { value: 12, message: "invalid month" },
                })}
              />
              {errors.month && (
                <span id="error" className="error">
                  {errors.month.message}
                </span>
              )}
            </div>
            <div className="grid-flow">
              <label className="label" htmlFor="year">
                Year
              </label>
              <input
                type="text"
                id="year"
                placeholder="YYYY"
                aria-describedby="error"
                className={`input ${errors.year ? "input-error" : ""}`}
                size={1}
                {...register("year", {
                  required: "This field is required",
                  min: { value: 1900, message: "invalid year" },
                  max: {
                    value: new Date().getFullYear(),
                    message: "invalid year",
                  },
                })}
              />
              {errors.year && (
                <span id="error" className="error">
                  {errors.year.message}
                </span>
              )}
            </div>
          </div>
          <button
            className="btn btn-poition-end"
            title="calculate"
            type="submit"
          >
            {/* <img src={} className="btnImage" alt="" /> */}
          </button>
        </form>
        <div className="result">
          <p>
            {formData.isSuccess ? (
              <span className="hyphen-minus">{formData.year}&nbsp;</span>
            ) : (
              <span className="hyphen-minus">&#45; &#45;&nbsp;</span>
            )}
            years
          </p>
          <p>
            {formData.isSuccess ? (
              <span className="hyphen-minus">{formData.month}&nbsp;</span>
            ) : (
              <span className="hyphen-minus">&#45; &#45;&nbsp;</span>
            )}
            months
          </p>
          <p>
            {formData.isSuccess ? (
              <span className="hyphen-minus">{formData.day}&nbsp;</span>
            ) : (
              <span className="hyphen-minus">&#45; &#45;&nbsp;</span>
            )}
            days
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;