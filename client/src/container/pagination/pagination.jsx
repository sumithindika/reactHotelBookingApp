import React from 'react';
import './pagination.css';

const pagination = () => {
  return (
    <div class="container">
      <ul class="pagination">
        <li>
          <a href="#0">Previous</a>
        </li>
        <li>
          <a href="#1">1</a>
        </li>
        <li>
          <a href="#2">2</a>
        </li>
        <li>
          <a href="#3">3</a>
        </li>
        <li>
          <a href="#4">4</a>
        </li>
        <li>
          <a href="#5">5</a>
        </li>
        <li>
          <a href="#6">6</a>
        </li>
        <li>
          <a href="#7">7</a>
        </li>
        <li>
          <a href="#8">8</a>
        </li>
        <li>
          <a href="#9">Next</a>
        </li>
      </ul>
    </div>
  );
};

export default pagination;
