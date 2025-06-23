/**
 * Copyright (c) 2023 The Readme-Workflows organisation and Contributors
 */

const dateFormat = require("dateformat");

const { date } = require("../config");

const appendDate = (fullContent) => {
  let dateStartIdx = fullContent.findIndex(
    (content) => content.trim() === "<!--RECENT_ACTIVITY:last_update-->",
  );

  if (dateStartIdx !== -1) {
    let dateEndIdx = fullContent.findIndex(
      (content, index) =>
        content.trim() === "<!--RECENT_ACTIVITY:last_update_end-->" &&
        index > dateStartIdx,
    );

    let offset;
    let finalDate;

    if (date.timezone.split("/").length === 2) {
      process.env.TZ = date.timezone;
      finalDate = new Date();
    } else {
      let tz = date.timezone.replace("GMT", "").split(":");
      let tz_hours = parseInt(tz[0].trim());

      if (tz.length > 1) {
        offset = tz_hours * 60 + parseInt(tz[1].trim());
      } else {
        if (tz_hours > 99) {
          offset = Math.floor(tz_hours / 100) * 60 + (tz_hours % 100);
        } else {
          offset = tz_hours * 60;
        }
      }

      const utc = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
      finalDate = new Date(utc + offset * 60000);
    }

    let finalDateString = date.text.replace(
      "{DATE}",
      dateFormat(finalDate, date.format),
    );

    if (dateEndIdx === -1) {
      fullContent.splice(
        dateStartIdx + 1,
        0,
        finalDateString,
        "<!--RECENT_ACTIVITY:last_update_end-->",
      );
    } else {
      fullContent.splice(
        dateStartIdx + 1,
        dateEndIdx - dateStartIdx - 1,
        finalDateString,
      );
    }
  }
  return fullContent;
};

module.exports = appendDate;
