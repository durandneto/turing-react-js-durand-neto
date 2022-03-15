import React, { useEffect } from 'react';

export default function IntersectionObserver() {
  useEffect(() => {
    let increasingColor = 'rgba(40, 40, 190, ratio)';
    let decreasingColor = 'rgba(190, 40, 40, ratio)';
    let text = document.querySelector('#vertical');

    function handleIntersect(entries, observer) {
      let prevRatio = 0.0;
      entries.forEach((entry) => {
        if (entry.intersectionRatio > prevRatio) {
          console.log('up', entry.intersectionRatio);
          if (entry.intersectionRatio < 0.9) {
            text.innerHTML = "I'm leaving";
          } else {
            text.innerHTML = 'Welcome to Turing|Observers';
          }
          entry.target.style.backgroundColor = increasingColor.replace(
            'ratio',
            entry.intersectionRatio
          );
        } else {
          console.log('dows');
          entry.target.style.backgroundColor = decreasingColor.replace(
            'ratio',
            entry.intersectionRatio
          );
        }
        prevRatio = entry.intersectionRatio;
      });
    }

    function buildThresholdList() {
      let thresholds = [];
      let numSteps = 20;

      for (let i = 1.0; i <= numSteps; i++) {
        let ratio = i / numSteps;
        thresholds.push(ratio);
      }

      thresholds.push(0);
      console.log(thresholds);
      return thresholds;
    }

    let boxElement = document.querySelector('#box');

    let options = {
      root: null,
      rootMargin: '0px',
      threshold: buildThresholdList(),
    };

    let observer = new window.IntersectionObserver(handleIntersect, options);
    observer.observe(boxElement);
  });

  return (
    <div id="wrapper">
      <div id="box">
        <div className="vertical" id="vertical">
          Welcome to <strong>The Box!</strong>
        </div>
      </div>
    </div>
  );
}
