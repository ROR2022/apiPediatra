import { __dirname } from "../app.js";
import fs from "fs";

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

export const logformatDate = (date) => {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join("");
};

export const addToLoggerFile = async (log) => {
  let today = new Date();
  let formatToday = logformatDate(today);

  try {
    // add a line to a logger file, using appendFile
    fs.appendFile(
      `${__dirname}/log/logger${formatToday.toString()}.log`,
      `\n${log}`,
      (err) => {
        if (err) {
          fs.writeFile(
            `${__dirname}/log/logger${formatToday.toString()}.log`,
            `\n${log}`,
            (err) => {
              if (err) return err;
              console.log("The log were updated");
              return "The log were updated";
            }
          );
        }
        console.log("The log were updated");
        return "The log were updated";
      }
    );
  } catch (error) {
    console.log("no logger available:...", error);
    return error;
  }
};
