"use strict";

/*
Purpose of pie chart is to measure x/100%
4 fields to measure max heap against a sorted array.
  1. elements 0-10 digits from location in sorted array
  2. elements 10-20 digits...
  3. elements 20-30 digits...
  4. elements 30+ digits

1. make max heap with random nums
3. make sorted array from heap
4. make frequency counter
  a. loop over sorted array
  b. while index !== same, get index of sortedElement in heap
     if >=30, "30+" increment
     if >=20, increment group
     if >=10, increment group
     else increment 0-10 group
5. feed results to pie chart.
*/

function runAnalysis() {
  const results = [
    { name: "30-100", count: 0, color: "#EE5A24" },
    { name: "20-30", count: 0, color: "#FFC312" },
    { name: "10-20", count: 0, color: "#C4E538" },
    { name: "0-10", count: 0, color: "#009432" },
  ];

  for (let i = 0; i < 10000; i++) {
    let maxHeap = new MaxBinaryHeap();
    for (let i = 0; i < 100; i++) {
      let n = Math.floor(Math.random() * 100);
      maxHeap.insert(n);
    }

    let sortedHeap = [...maxHeap.values].sort((a, b) => b - a);
    sortedHeap.forEach((num, index) => {
      let heapIdx = maxHeap.values.indexOf(num);
      sortedHeap[heapIdx] = -1;
      let diff = Math.abs(heapIdx - index);

      if (diff >= 30) {
        results[0].count += 1;
      } else if (diff >= 20) {
        results[1].count += 1;
      } else if (diff >= 10) {
        results[2].count += 1;
      } else if (diff >= 0) {
        results[3].count += 1;
      }
    });
  }

  let cx7 = document.querySelector("#pie").getContext("2d");
  let total = results.reduce(
    (sum, { count }) => sum + count, 0);

  //start at top
  let currentAngle = 0.5 * Math.PI;

  for (let result of results) {
    let sliceAngle = (result.count / total) * 2 * Math.PI;
    cx7.beginPath();
    //center = 100,100
    //from current angle, clockwise by slice's angle
    cx7.arc(100, 100, 100,
      currentAngle, currentAngle + sliceAngle);
    currentAngle += sliceAngle;
    cx7.lineTo(100, 100);
    cx7.fillStyle = result.color;
    cx7.fill();
  }

  console.table(results);
}

runAnalysis()





