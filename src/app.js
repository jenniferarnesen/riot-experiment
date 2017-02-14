'use strict';

import "../node_modules/@nrk/bjartmar/dist/nrk-style.css";
import "./assets/base.css";

import riot from 'riot';

import './components/app';

riot.mount('*', {title: 'Tweet generator'});
