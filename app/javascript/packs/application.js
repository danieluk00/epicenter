import "bootstrap";

import { initAutocomplete } from "../plugins/init_autocomplete";

initAutocomplete();

import { getTimeRemaining, initializeClock } from './countdown';

import { btnListener } from './share';

btnListener();
