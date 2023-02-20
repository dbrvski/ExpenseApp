import React from "react";
import { ChartBar } from "./ChartBar";
import styled from "@emotion/styled";
import { Card } from "../../UI/Card";

export const ExpenseChart = ({ expenses }) => {
  const chartDataPoints = [
    { value: 0, label: "Jan" },
    { value: 0, label: "Feb" },
    { value: 0, label: "Mar" },
    { value: 0, label: "Apr" },
    { value: 0, label: "May" },
    { value: 0, label: "Jun" },
    { value: 0, label: "Jul" },
    { value: 0, label: "Aug" },
    { value: 0, label: "Sep" },
    { value: 0, label: "Oct" },
    { value: 0, label: "Nov" },
    { value: 0, label: "Dec" },
  ];

  for (const expense of expenses) {
    const monthIndex = expense.date.getMonth();
    chartDataPoints[monthIndex].value += expense.amount;
  }

  const yearTotal = chartDataPoints.reduce(
    (prev, curr) => prev + curr.value,
    0
  );

  return (
    <Card justify="space-between">
      {chartDataPoints.map((month, inx) => {
        return (
          <ChartBar
            key={inx}
            value={month.value}
            label={month.label}
            maxValue={yearTotal}
          />
        );
      })}
    </Card>
  );
};
