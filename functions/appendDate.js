/**
 * Copyright (c) 2021 The Readme-Workflows organisation and Contributors
 */

const dateFormat = require("dateformat");

const { TIMEZONE_OFFSET, DATE_FORMAT, DATE_STRING } = require("../config");

const appendDate = (fullContent) => {
  let dateStartIdx = fullContent.findIndex(
    (content) => content.trim() === "<!--RECENT_ACTIVITY:last_update-->"
  );

  if (dateStartIdx !== -1) {
    let dateEndIdx = fullContent.findIndex(
      (content, index) =>
        content.trim() === "<!--RECENT_ACTIVITY:last_update_end-->" &&
        index > dateStartIdx
    );

    let timezone = TIMEZONE_OFFSET.replace("GMT", "").split(":");
    let offset;

    let tz_hours = parseInt(timezone[0].trim());

    if (timezone.length > 1) {
      offset = tz_hours * 60 + parseInt(timezone[1].trim());
    } else {
      if (tz_hours > 99) {
        offset = Math.floor(tz_hours / 100) * 60 + (tz_hours % 100);
      } else {
        offset = tz_hours * 60;
      }
    }

    const utc = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
    let finalDate = new Date(utc + offset * 60000);

    finalDateString = DATE_STRING.replace(
      "{DATE}",
      dateFormat(finalDate, DATE_FORMAT)
    );

    if (dateEndIdx === -1) {
      fullContent.splice(
        dateStartIdx + 1,
        0,
        finalDateString,
        "<!--RECENT_ACTIVITY:last_update_end-->"
      );
    } else {
      fullContent.splice(
        dateStartIdx + 1,
        dateEndIdx - dateStartIdx - 1,
        finalDateString
      );
    }
  }
  return fullContent;
};

module.exports = appendDate;
