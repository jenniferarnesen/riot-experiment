import trumpismSource from '../services/trumpism-service';
import './trumpism.tag';

<app>

  <div id="app">
    <h1 class="title">{opts.title}</h1>
    <button id='trumpism-adder' onclick='{ this.handleClick }'>Generate trumpism</button>
    <ul>
      <li each={ trumpisms }>
        <trumpism title='{ism}'></trumpism>
      </li>
    </ul>
  </div>

  <script>
    'use strict';

    this.trumpisms = [];

    const fetchTrumpism = () => {
        trumpismSource.fetch()
          .then((ism) => {
            this.trumpisms.unshift({ism: ism});
            this.update();
          });
    };

    this.on('mount', () => this['trumpism-adder'].focus());

    this.handleClick = fetchTrumpism;
  </script>

  <style>
    #app {
      width: 400px;
      margin: 0 auto;
    }

    .title {
      margin-top: 20px;
      text-align: center;
    }

    #trumpism-adder {
      margin: 5px;
      color: white;
      border-radius: 4px;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
      background: rgb(223, 117, 20);
    }
  </style>

</app>
