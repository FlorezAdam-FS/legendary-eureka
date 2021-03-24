// create the date range picker function
GetDate = function () {
  $('input[name="daterange"]').daterangepicker(
    {
      ranges: {
        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "Last 7 Days": [moment().subtract(6, "days"), moment()],
      },
      showCustomRangeLabel: false,
      alwaysShowCalendars: true,
      startDate: "03/17/2021",
      endDate: "03/23/2021",
      opens: "center",
    },
    function (start, end, label) {
      console.log(
        "New date range selected: " +
          start.format("YYYY-MM-DD") +
          " to " +
          end.format("YYYY-MM-DD") +
          " (predefined range: " +
          label +
          ")"
      );
      startDate = start.format("YYYY-MM-DD");
      endDate = end.format("YYYY-MM-DD");
    }
  );
};
