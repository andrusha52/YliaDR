import React, { Component } from "react";
import css from "./app.module.css";
import uniqid from "uniqid";

class App extends Component {
  state = {
    start: true,
    question: "",
    answer: "",
    answerArr: [],
    answerInp: "",
    index: 0,
    arr: [
      {
        question: "Алекс Анвандтер",
        answer: "ты никогда не будешь один",
        podskazka: "google поможет",
      },
      {
        question: "ТЫ никогда не будешь один",
        answer: "ливерпуль",
        podskazka: "пой",
      },
      { question: "Liverpool", answer: "1990", podskazka: "ищи" },

      { question: "Твоя недавняя обновка", answer: "11", podskazka: "число" },
      { question: "Uclseh", answer: "12", podskazka: "плюсуй" },
      { question: "Мохнатого друга", answer: "42", podskazka: "ищи" },
      {
        question: "Самый важный день в твоей жизни и Рами Малека",
        answer: "12",
        podskazka: "цифра",
      },
      { question: "Страстный поцелуй", answer: "41", podskazka: "ищи" },
      {
        question: "переведи в буквы ",
        answer: "01.05.2013",
        podskazka: "дата",
        img: "../images/41.jpg",
      },
      { question: "слушай", answer: "10", podskazka: "месяц" },
      { question: "", answer: "", podskazka: "" },
    ],
  };

  changeValueInp(e) {
    this.setState({ answer: e.target.value });
  }
  async clickBtn(e) {
    e.preventDefault();
    if (
      this.state.answer.toLowerCase() ===
      this.state.arr[this.state.index].answer
    ) {
      if (
        this.state.answer.toLowerCase() === "1990" ||
        this.state.answer.toLowerCase() === "01.05.2013" ||
        this.state.answer.toLowerCase() === "10"
      ) {
        await this.setState({
          answerArr: [...this.state.answerArr, this.state.answer],
        });
      }
      await this.setState((prev) => ({
        index: prev.index + 1,
        answer: "",
      }));
    } else {
      alert("не верно!");
    }
  }
  clickStart() {
    this.setState({
      start: false,
    });
  }

  render() {
    const { arr, index, answer, answerArr, start } = this.state;
    return (
      <div className={css.container}>
        {start ? (
          <button className={css.start} onClick={() => this.clickStart()}>
            START
          </button>
        ) : (
          <div className={css.section}>
            <p id="text">{arr[index].question}</p>
            {arr[index].img && (
              <img
                src="https://90zavod.ru/wp-content/uploads/kak-rasshifrovat-bukvy-v-cifry_3.jpg"
                alt=""
                width={333}
                height={279}
              />
            )}
            {arr[index].question.length > 0 && (
              <form autocomplete="off">
                <input
                  id="inp"
                  type="text"
                  className={css.inp}
                  placeholder={arr[index].podskazka}
                  value={answer}
                  onChange={(e) => this.changeValueInp(e)}
                />
                <button
                  type="submit"
                  className={css.btn}
                  onClick={(e) => this.clickBtn(e)}
                >
                  Ответ
                </button>
              </form>
            )}
            {answerArr.length > 2 && (
              <p>Сумируй числа что бы вышло 3-х значное число </p>
            )}
            {answerArr.length > 0 && (
              <ul className={css.ulResult}>
                {" "}
                {answerArr.map((el) => (
                  <li className={css.liResult} key={uniqid()}>
                    <p>{el}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
