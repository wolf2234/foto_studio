// Подключение основного файла стилей
import "../scss/style.scss";

import "./jquery/jquery-3.7.1.min.js";
import "./jquery/slick.min.js";
import "./jquery/slider.js";
import { showBlock } from "./modules/functions.js";
import { clickPhoto } from "./modules/functions.js";

showBlock(1);
clickPhoto();
